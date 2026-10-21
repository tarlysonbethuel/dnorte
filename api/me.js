const {userFromReq,publicUser}=require('./_lib/session');
module.exports=async(req,res)=>{
  res.setHeader('Cache-Control','private, no-store, no-cache, must-revalidate');
  res.setHeader('Pragma','no-cache');
  try{return res.status(200).json({user:publicUser(userFromReq(req))})}
  catch(e){return res.status(500).json({error:e.message})}
};
