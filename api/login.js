const {getClients}=require('./_lib/sheets');
const {setSession,publicUser}=require('./_lib/session');

module.exports=async(req,res)=>{
  res.setHeader('Cache-Control','private, no-store, no-cache, must-revalidate');
  if(req.method!=='POST')return res.status(405).json({error:'Método não permitido.'});
  try{
    const usuario=String(req.body?.usuario||'').trim().toUpperCase();
    const senha=String(req.body?.senha||'');
    const remember=Boolean(req.body?.remember);
    if(!usuario||!senha)return res.status(400).json({error:'Preencha usuário e senha.'});
    const clients=await getClients();
    const c=clients.find(x=>x.usuario===usuario&&x.senha===senha);
    if(!c)return res.status(401).json({error:'Usuário ou senha incorretos.'});
    const user={usuario:c.usuario,loja:c.loja,nomeCliente:c.nomeCliente,cidadeCliente:c.cidadeCliente};
    setSession(res,user,{remember});
    return res.status(200).json({user:publicUser(user),remember});
  }catch(e){return res.status(500).json({error:e.message||'Erro interno.'})}
};
