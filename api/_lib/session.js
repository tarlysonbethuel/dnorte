const crypto=require('crypto');

const COOKIE='dnorte_session_v32';
const LEGACY_COOKIE='dnorte_session';
const SESSION_AGE=60*60*12;      // 12 horas para uma sessão normal
const REMEMBER_AGE=60*60*24*7;   // 7 dias quando o lojista escolher "manter acesso"

function secret(){
  const s=process.env.SESSION_SECRET;
  if(!s)throw new Error('SESSION_SECRET não configurado na Vercel.');
  return s;
}

function b64(v){return Buffer.from(v).toString('base64url')}

function sign(payload,maxAge){
  const body=b64(JSON.stringify({...payload,exp:Date.now()+maxAge*1000}));
  const sig=crypto.createHmac('sha256',secret()).update(body).digest('base64url');
  return `${body}.${sig}`;
}

function verify(token){
  try{
    if(!token)return null;
    const [body,sig]=token.split('.');
    if(!body||!sig)return null;
    const expected=crypto.createHmac('sha256',secret()).update(body).digest('base64url');
    const a=Buffer.from(sig),b=Buffer.from(expected);
    if(a.length!==b.length||!crypto.timingSafeEqual(a,b))return null;
    const p=JSON.parse(Buffer.from(body,'base64url').toString());
    if(!p.exp||Date.now()>p.exp)return null;
    return p;
  }catch{return null}
}

function parseCookies(req){
  return Object.fromEntries(String(req.headers.cookie||'').split(';').map(s=>s.trim()).filter(Boolean).map(s=>{
    const i=s.indexOf('=');
    return [decodeURIComponent(s.slice(0,i)),decodeURIComponent(s.slice(i+1))];
  }));
}

function userFromReq(req){
  return verify(parseCookies(req)[COOKIE]);
}

function publicUser(user){
  if(!user)return null;
  const {exp,...safe}=user;
  return safe;
}

function setSession(res,user,{remember=false}={}){
  const maxAge=remember?REMEMBER_AGE:SESSION_AGE;
  const token=sign(user,maxAge);
  const persistence=remember?`; Max-Age=${REMEMBER_AGE}`:'';
  res.setHeader('Set-Cookie',`${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax${persistence}`);
}

function clearSession(res){
  res.setHeader('Set-Cookie',[
    `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    `${LEGACY_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
  ]);
}

module.exports={userFromReq,publicUser,setSession,clearSession};
