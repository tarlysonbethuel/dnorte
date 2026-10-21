const DEFAULT_SHEET_ID = '1oneVF4MfT-sQJx-Sa7wfr0AjnHQpZ6zgGZuSaelER7c';

function sheetId(){ return process.env.DNORTE_SHEET_ID || DEFAULT_SHEET_ID; }

async function getSheet(sheet){
  const url=`https://docs.google.com/spreadsheets/d/${sheetId()}/gviz/tq?sheet=${encodeURIComponent(sheet)}&tqx=out:json`;
  const r=await fetch(url,{headers:{'User-Agent':'DNorte-V3'}});
  if(!r.ok) throw new Error(`Falha ao acessar a planilha (${r.status}).`);
  const text=await r.text();
  const match=text.match(/google\.visualization\.Query\.setResponse\((.*)\);/s);
  if(!match) throw new Error('Resposta inválida do Google Sheets. Confira a publicação/permissão da planilha.');
  return JSON.parse(match[1]);
}

function cell(c,i,fallback=''){
  const x=c?.[i];
  return x&&x.v!==null&&x.v!==undefined?x.v:fallback;
}

async function getClients(){
  const data=await getSheet('CLIENTES');
  return (data.table.rows||[]).map(r=>r.c).filter(c=>cell(c,0,'')!=='').map(c=>({
    usuario:String(cell(c,0,'')).trim().toUpperCase(),
    senha:String(cell(c,1,'')).trim(),
    loja:String(cell(c,2,'')).trim(),
    nomeCliente:String(cell(c,3,'')).trim(),
    cidadeCliente:String(cell(c,4,'')).trim()
  }));
}

function num(v){if(v===null||v===undefined||v==='')return 0;const n=parseFloat(String(v).replace(',','.'));return Number.isFinite(n)?n:0}
function int(v,def=1){const n=parseInt(v,10);return Number.isFinite(n)&&n>0?n:def}

async function getProducts(){
  const data=await getSheet('Produtos');
  const out=[];
  for(const row of data.table.rows||[]){
    const c=row.c;if(!c||cell(c,1,'')==='')continue;
    const situacao=String(cell(c,6,'ATIVO')).trim().toUpperCase();
    if(!['ATIVO','ESGOTADO'].includes(situacao))continue;
    const precoVarejo=num(cell(c,7,0));
    let precoAtacado=num(cell(c,8,0)); if(precoAtacado<=0)precoAtacado=precoVarejo;
    const precoOferta=num(cell(c,10,0));
    let qtdAtacado=int(cell(c,9,1),1);if(precoAtacado<precoVarejo&&qtdAtacado===1)qtdAtacado=5;
    const qtdMinimaNormal=int(cell(c,11,1),1),qtdMinimaOferta=int(cell(c,12,1),1);
    const qtdMinima=precoOferta>0&&precoOferta<precoVarejo?(qtdMinimaOferta>1?qtdMinimaOferta:qtdMinimaNormal):qtdMinimaNormal;
    out.push({
      sku:String(cell(c,0,'')).split('.')[0], nome:String(cell(c,1,'')), categoria:String(cell(c,2,'DIVERSOS')).trim().toUpperCase(), departamento:String(cell(c,3,'GERAL')).trim().toUpperCase(),
      imagem:String(cell(c,5,'favicon.png')).trim()||'favicon.png', situacao, precoVarejo, precoAtacado, qtdAtacado, precoOferta, qtdMinima
    });
  }
  return out;
}
module.exports={getClients,getProducts};
