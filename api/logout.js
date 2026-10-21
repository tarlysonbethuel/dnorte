const {clearSession}=require('./_lib/session');
module.exports=async(req,res)=>{
  res.setHeader('Cache-Control','private, no-store, no-cache, must-revalidate');
  if(req.method!=='POST')return res.status(405).json({error:'Método não permitido.'});
  clearSession(res);
  return res.status(200).json({ok:true});
};
