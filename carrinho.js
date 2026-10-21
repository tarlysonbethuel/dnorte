const WHATSAPP_LOJA='5569999107161';
const API_BASE='/api';
const CART_TTL_MS=7*24*60*60*1000;
const CART_STORAGE_PREFIX='dnorte_cart_v34_'; // Mantém compatibilidade com carrinhos da V3.4.
let lojistaLogado=null;
let produtos=[];
let carrinho=[];
let validandoSessao=false;
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const money=n=>Number(n||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const esc=(v='')=>String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

window.addEventListener('DOMContentLoaded',init);

async function init(){
  wireUI();
  atualizarContaUI();
  await carregarCarrinho();
}

function wireUI(){
  $('#mobileMenuBtn')?.addEventListener('click',()=>{
    const nav=$('#navLinks');nav?.classList.toggle('open');
    $('#mobileMenuBtn')?.setAttribute('aria-expanded',String(nav?.classList.contains('open')));
  });
  $$('#navLinks a').forEach(a=>a.addEventListener('click',()=>$('#navLinks')?.classList.remove('open')));
  $$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)fecharModal(m.id)}));
  document.addEventListener('click',e=>{const area=$('#accountArea');if(area&&!area.contains(e.target))fecharMenuConta()});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape')fecharMenuConta();
    if(e.key==='Enter'&&$('#modalLogin')?.classList.contains('open')&&document.activeElement?.id==='loginSenha')executarLogin();
  });
  window.addEventListener('focus',()=>validarSessaoAtual());
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')validarSessaoAtual()});
}

async function api(path,options={}){
  const r=await fetch(`${API_BASE}${path}`,{credentials:'include',cache:'no-store',headers:{'Content-Type':'application/json','Cache-Control':'no-cache',...(options.headers||{})},...options});
  let data={};try{data=await r.json()}catch{}
  if(!r.ok)throw new Error(data.error||'Não foi possível concluir a operação.');
  return data;
}

function identificadorCarrinho(user=lojistaLogado){
  const id=String(user?.usuario||user?.loja||user?.nomeCliente||'').trim().toUpperCase();
  return id?encodeURIComponent(id):null;
}
function chaveCarrinho(user=lojistaLogado){const id=identificadorCarrinho(user);return id?`${CART_STORAGE_PREFIX}${id}`:null}
function salvarCarrinho(){
  const key=chaveCarrinho();if(!key)return;
  const payload={expiresAt:Date.now()+CART_TTL_MS,items:carrinho.map(i=>({sku:String(i.sku),qtd:Number(i.qtd)||1}))};
  try{localStorage.setItem(key,JSON.stringify(payload))}catch{}
}
function apagarCarrinhoPersistido(user=lojistaLogado){const key=chaveCarrinho(user);if(!key)return;try{localStorage.removeItem(key)}catch{}}

async function carregarCarrinho(){
  try{
    const data=await api(`/products?t=${Date.now()}`);
    lojistaLogado=data.authenticated?data.user:null;
    produtos=data.authenticated?(data.products||[]):[];
    atualizarContaUI();
    if(!lojistaLogado){mostrarBloqueado();return}
    restaurarCarrinho();
    preencherCliente();
    mostrarCarrinho();
    renderCarrinho();
  }catch(e){
    lojistaLogado=null;atualizarContaUI();mostrarBloqueado();toast(e.message);
  }
}

function restaurarCarrinho(){
  const key=chaveCarrinho();carrinho=[];if(!key)return;
  try{
    const raw=localStorage.getItem(key);if(!raw)return;
    const data=JSON.parse(raw);
    if(!data?.expiresAt||Date.now()>data.expiresAt||!Array.isArray(data.items)){localStorage.removeItem(key);return}
    carrinho=data.items.map(item=>{
      const p=produtos.find(x=>String(x.sku)===String(item.sku));
      if(!p||p.situacao==='ESGOTADO'||!Number.isFinite(Number(p.precoVarejo)))return null;
      return {...p,qtd:Math.max(Number(p.qtdMinima)||1,Number(item.qtd)||1)};
    }).filter(Boolean);
    salvarCarrinho();
  }catch{carrinho=[]}
}

function mostrarBloqueado(){$('#cartAuthGate').hidden=false;$('#cartPageGrid').hidden=true}
function mostrarCarrinho(){$('#cartAuthGate').hidden=true;$('#cartPageGrid').hidden=false}

function atualizarContaUI(){
  const ativo=Boolean(lojistaLogado),btn=$('#btnContaHeader'),icon=$('#iconeConta'),dot=$('#accountDot'),chevron=$('#accountChevron');if(!btn)return;
  if(ativo){
    const loja=lojistaLogado.loja||'Minha conta',pessoa=lojistaLogado.nomeCliente||lojistaLogado.usuario||'';
    $('#textoBtnLogin').textContent=loja;icon.className='fas fa-store';dot.hidden=false;chevron.hidden=false;btn.classList.add('is-authenticated');btn.setAttribute('aria-label',`Conta ativa: ${loja}`);$('#accountLoja').textContent=loja;$('#accountPessoa').textContent=pessoa?`Comprador: ${pessoa}`:'Acesso do lojista';
  }else{
    $('#textoBtnLogin').textContent='Área do Lojista';icon.className='fas fa-lock';dot.hidden=true;chevron.hidden=true;btn.classList.remove('is-authenticated');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Entrar na Área do Lojista');fecharMenuConta();
  }
}
function preencherCliente(){
  $('#inputNome').value=lojistaLogado?.nomeCliente||'';$('#inputLoja').value=lojistaLogado?.loja||'';$('#inputCidade').value=lojistaLogado?.cidadeCliente||'';
}

function precoBase(p){return p.precoOferta>0&&p.precoOferta<p.precoVarejo?p.precoOferta:p.precoVarejo}
function calcularItem(i){const base=precoBase(i);const unit=i.qtd>=i.qtdAtacado&&i.precoAtacado<base?i.precoAtacado:base;return{unit,subtotal:unit*i.qtd}}

function renderCarrinho(){
  const box=$('#cartPageItems'),empty=$('#cartEmptyState');let total=0,itens=0;
  $('#btnLimparCarrinho').hidden=!carrinho.length;$('#btnEnviarPedido').disabled=!carrinho.length;
  if(!carrinho.length){box.innerHTML='';empty.hidden=false;$('#cartItemsSummary').textContent='Nenhum produto no pedido.';$('#summaryItems').textContent='0';$('#summaryProducts').textContent='0';$('#summaryTotal').textContent=money(0);return}
  empty.hidden=true;
  box.innerHTML=carrinho.map(i=>{
    const calc=calcularItem(i);total+=calc.subtotal;itens+=i.qtd;
    return `<article class="cart-page-item"><div class="cart-page-item-image"><img src="${esc(i.imagem||'favicon.png')}" alt="${esc(i.nome)}" loading="lazy" onerror="this.src='favicon.png'"></div><div class="cart-page-item-info"><span class="product-code">Cód. ${esc(i.sku)}</span><h3>${esc(i.nome)}</h3><div class="cart-page-unit">${money(calc.unit)} <span>/ un.</span></div>${i.precoAtacado<precoBase(i)&&i.qtdAtacado>1?`<small class="cart-condition">Atacado a partir de ${i.qtdAtacado} un.</small>`:''}</div><div class="cart-page-item-actions"><button class="cart-page-remove" type="button" onclick="removerItem('${esc(i.sku)}')" aria-label="Remover ${esc(i.nome)}"><i class="fas fa-trash-can"></i></button><div class="cart-page-qty"><button type="button" onclick="alterarQuantidade('${esc(i.sku)}',-1)">−</button><span>${i.qtd}</span><button type="button" onclick="alterarQuantidade('${esc(i.sku)}',1)">+</button></div><strong class="cart-page-subtotal">${money(calc.subtotal)}</strong></div></article>`;
  }).join('');
  $('#cartItemsSummary').textContent=`${itens} ${itens===1?'item':'itens'} em ${carrinho.length} ${carrinho.length===1?'produto':'produtos'}.`;
  $('#summaryItems').textContent=String(itens);$('#summaryProducts').textContent=String(carrinho.length);$('#summaryTotal').textContent=money(total);
}

function alterarQuantidade(sku,delta){
  const item=carrinho.find(i=>String(i.sku)===String(sku));if(!item)return;
  const min=Number(item.qtdMinima)||1;item.qtd+=delta;if(item.qtd<min){removerItem(sku);return}salvarCarrinho();renderCarrinho();
}
function removerItem(sku){carrinho=carrinho.filter(i=>String(i.sku)!==String(sku));salvarCarrinho();renderCarrinho();toast('Produto removido do pedido.')}
function limparCarrinho(){if(!carrinho.length)return;if(!confirm('Deseja remover todos os produtos deste pedido?'))return;carrinho=[];salvarCarrinho();renderCarrinho();toast('Pedido limpo.')}

function finalizarPedido(){
  if(!lojistaLogado){abrirModalLogin();return}if(!carrinho.length){toast('Adicione pelo menos um produto ao pedido.');return}
  const nome=$('#inputNome').value.trim().toUpperCase(),loja=$('#inputLoja').value.trim().toUpperCase(),cidade=$('#inputCidade').value.trim().toUpperCase();
  if(!nome||!loja||!cidade){toast('Preencha comprador, loja e cidade.');return}
  let total=0,msg='*NOVO PEDIDO DE COMPRA - DNORTE*\n=============================\n';msg+=`*Lojista:* ${loja}\n*Comprador:* ${nome}\n*Cidade:* ${cidade}\n`;if(lojistaLogado?.usuario)msg+=`*Usuário:* ${lojistaLogado.usuario}\n`;msg+='=============================\n\n*ITENS SOLICITADOS:*\n';
  carrinho.forEach(i=>{const {unit,subtotal}=calcularItem(i);total+=subtotal;msg+=`- ${i.qtd}x [${i.sku}] ${i.nome} — ${money(unit)}/un — ${money(subtotal)}\n`});
  msg+=`\n*TOTAL ESTIMADO:* ${money(total)}\n`;
  $('#subjectInvisivel').value=`🛒 NOVO PEDIDO RECEBIDO - ${loja}`;$('#lojistaInvisivel').value=loja;$('#compradorInvisivel').value=nome;$('#cidadeInvisivel').value=cidade;$('#totalInvisivel').value=money(total);$('#detalhesInvisivel').value=msg;$('#formPedidoInvisivel').submit();
  window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`,'_blank');
}

function acaoContaHeader(event){event?.stopPropagation();if(!lojistaLogado){abrirModalLogin();return}const menu=$('#accountMenu'),abrir=menu.hidden;menu.hidden=!abrir;$('#btnContaHeader').setAttribute('aria-expanded',String(abrir))}
function fecharMenuConta(){const menu=$('#accountMenu');if(menu)menu.hidden=true;$('#btnContaHeader')?.setAttribute('aria-expanded','false')}

async function executarLogin(){
  const usuario=$('#loginUsuario').value.trim(),senha=$('#loginSenha').value,remember=Boolean($('#loginRemember')?.checked),erro=$('#loginErro');erro.hidden=true;if(!usuario||!senha){erro.textContent='Preencha usuário e senha.';erro.hidden=false;return}
  const btn=$('#btnLogin'),old=btn.innerHTML;btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Entrando...';
  try{await api('/login',{method:'POST',body:JSON.stringify({usuario,senha,remember})});fecharModal('modalLogin');await carregarCarrinho();toast('Acesso liberado. Seu pedido foi carregado.')}catch(e){erro.textContent=e.message;erro.hidden=false}finally{btn.disabled=false;btn.innerHTML=old}
}
async function fazerLogout(btn=null){
  const original=btn?.innerHTML;if(btn){btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Saindo...'}const user=lojistaLogado;try{await api('/logout',{method:'POST',body:'{}'})}catch{}apagarCarrinhoPersistido(user);lojistaLogado=null;produtos=[];carrinho=[];atualizarContaUI();mostrarBloqueado();if(btn){btn.disabled=false;btn.innerHTML=original}toast('Você saiu da Área do Lojista.');
}
async function validarSessaoAtual(){if(!lojistaLogado||validandoSessao||document.hidden)return;validandoSessao=true;try{const data=await api(`/me?t=${Date.now()}`);if(!data.user){lojistaLogado=null;produtos=[];carrinho=[];atualizarContaUI();mostrarBloqueado();toast('Sua sessão terminou. Entre novamente para acessar o pedido.')}}catch{}finally{validandoSessao=false}}

function abrirModalLogin(){fecharMenuConta();if(lojistaLogado)return;$('#loginErro').hidden=true;abrirModal('modalLogin');setTimeout(()=>$('#loginUsuario')?.focus(),50)}
function abrirModal(id){const m=document.getElementById(id);if(!m)return;m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function fecharModal(id){const m=document.getElementById(id);if(!m)return;m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function toast(msg){const el=$('#toast');if(!el)return;el.textContent=msg;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),2600)}
