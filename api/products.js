const {getProducts}=require('./_lib/sheets');
const {userFromReq,publicUser}=require('./_lib/session');

module.exports=async(req,res)=>{
  res.setHeader('Cache-Control','private, no-store, no-cache, must-revalidate');
  res.setHeader('Pragma','no-cache');
  res.setHeader('Expires','0');
  try{
    const user=userFromReq(req);
    const products=await getProducts();
    if(user){
      return res.status(200).json({authenticated:true,user:publicUser(user),products});
    }
    const publicProducts=products.map(({sku,nome,categoria,departamento,imagem,situacao})=>({sku,nome,categoria,departamento,imagem,situacao}));
    return res.status(200).json({authenticated:false,user:null,products:publicProducts});
  }catch(e){return res.status(500).json({error:e.message||'Erro ao carregar produtos.'})}
};
