const WHATSAPP_LOJA = '5569999107161';
const API_BASE = '/api';

let produtos = [];
let carrinho = [];
let lojistaLogado = null;
let catalogoAutenticado = false;
let departamentoAtual = 'TODOS';
let categoriaAtual = 'TODAS';
let validandoSessao = false;

const CART_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const CART_STORAGE_PREFIX = 'dnorte_cart_v34_';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const money = (n) => Number(n || 0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const esc = (v='') => String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

window.addEventListener('DOMContentLoaded', init);

async function init(){
  wireUI();
  aplicarEstadoPublico();
  await carregarProdutos().catch(()=>{});
  aplicarURL();
  verificarSucessoCadastro();
}

function wireUI(){
  $('#inputBusca').addEventListener('input', filtrarProdutos);
  $('#selectOrdenacao').addEventListener('change', filtrarProdutos);
  $('#selectDepartamentoMobile')?.addEventListener('change',e=>selecionarDepartamento(e.target.value));
  $('#selectCategoriaMobile')?.addEventListener('change',e=>selecionarCategoria(e.target.value));
  $('#mobileMenuBtn').addEventListener('click',()=>{
    const nav=$('#navLinks'); nav.classList.toggle('open');
    $('#mobileMenuBtn').setAttribute('aria-expanded',nav.classList.contains('open'));
  });
  $$('#navLinks a').forEach(a=>a.addEventListener('click',()=>$('#navLinks').classList.remove('open')));
  $$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m) fecharModal(m.id)}));
  const atualizarScroll=()=>{
    $('#btnTopo').style.display=window.scrollY>700?'block':'none';
    atualizarToolbarSticky();
  };
  window.addEventListener('scroll',atualizarScroll,{passive:true});
  window.addEventListener('resize',atualizarToolbarSticky);
  setTimeout(atualizarToolbarSticky,0);
  document.addEventListener('click',e=>{
    const area=$('#accountArea');
    if(area&&!area.contains(e.target)) fecharMenuConta();
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') fecharMenuConta();
    if(e.key==='Enter'&&$('#modalLogin')?.classList.contains('open')&&document.activeElement?.id==='loginSenha') executarLogin();
  });
  window.addEventListener('focus',()=>validarSessaoAtual());
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible') validarSessaoAtual()});
  $('#inputTelefone').addEventListener('input',e=>aplicarMascaraTelefone(e.target));
  $('#inputCpfCnpj').addEventListener('input',e=>aplicarMascaraCpfCnpj(e.target));
  $('#inputCpfCnpj').addEventListener('blur',e=>validarCpfCnpjBlur(e.target));
}

async function api(path, options={}){
  const r=await fetch(`${API_BASE}${path}`,{
    credentials:'include',
    cache:'no-store',
    headers:{'Content-Type':'application/json','Cache-Control':'no-cache',...(options.headers||{})},
    ...options
  });
  let data={}; try{data=await r.json()}catch{}
  if(!r.ok) throw new Error(data.error||'Não foi possível concluir a operação.');
  return data;
}

function sessaoAtiva(){
  return Boolean(catalogoAutenticado&&lojistaLogado);
}

function atualizarToolbarSticky(){
  const toolbar=$('.catalog-toolbar-sticky');
  const sentinel=$('#toolbarSentinel');
  if(!toolbar||!sentinel)return;
  const topo=window.innerWidth<=680?64:74;
  toolbar.classList.toggle('is-stuck',sentinel.getBoundingClientRect().top<=topo);
}

function identificadorCarrinho(user=lojistaLogado){
  const id=String(user?.usuario||user?.loja||user?.nomeCliente||'').trim().toUpperCase();
  return id?encodeURIComponent(id):null;
}
function chaveCarrinho(user=lojistaLogado){
  const id=identificadorCarrinho(user);
  return id?`${CART_STORAGE_PREFIX}${id}`:null;
}
function salvarCarrinhoPersistido(){
  if(!sessaoAtiva())return;
  const key=chaveCarrinho();
  if(!key)return;
  const payload={expiresAt:Date.now()+CART_TTL_MS,items:carrinho.map(i=>({sku:String(i.sku),qtd:Number(i.qtd)||1}))};
  try{localStorage.setItem(key,JSON.stringify(payload))}catch{}
}
function restaurarCarrinhoPersistido(){
  if(!sessaoAtiva())return;
  const key=chaveCarrinho();
  if(!key)return;
  try{
    const raw=localStorage.getItem(key);
    if(!raw){carrinho=[];renderCarrinho();return}
    const data=JSON.parse(raw);
    if(!data?.expiresAt||Date.now()>data.expiresAt||!Array.isArray(data.items)){localStorage.removeItem(key);carrinho=[];renderCarrinho();return}
    carrinho=data.items.map(item=>{
      const p=produtos.find(x=>String(x.sku)===String(item.sku));
      if(!p||p.situacao==='ESGOTADO'||!Number.isFinite(Number(p.precoVarejo)))return null;
      return {...p,qtd:Math.max(Number(p.qtdMinima)||1,Number(item.qtd)||1)};
    }).filter(Boolean);
    renderCarrinho();
  }catch{carrinho=[];renderCarrinho()}
}
function limparCarrinhoPersistido(user=lojistaLogado){
  const key=chaveCarrinho(user);
  if(!key)return;
  try{localStorage.removeItem(key)}catch{}
}

function aplicarEstadoPublico(){
  lojistaLogado=null;
  catalogoAutenticado=false;
  fecharMenuConta();
  atualizarSessaoUI();
}

function atualizarSessaoUI(){
  const ativo=sessaoAtiva();
  const btn=$('#btnContaHeader');
  const icon=$('#iconeConta');
  const dot=$('#accountDot');
  const chevron=$('#accountChevron');

  if(ativo){
    const loja=lojistaLogado.loja||'Minha conta';
    const pessoa=lojistaLogado.nomeCliente||lojistaLogado.usuario||'';
    $('#textoBtnLogin').textContent=loja;
    icon.className='fas fa-store';
    dot.hidden=false; chevron.hidden=false;
    btn.classList.add('is-authenticated');
    btn.setAttribute('aria-label',`Conta ativa: ${loja}`);
    $('#accountLoja').textContent=loja;
    $('#accountPessoa').textContent=pessoa?`Comprador: ${pessoa}`:'Acesso do lojista';
    $('#btnCarrinhoMobile').hidden=false;
    const shortcut=$('#catalogLoginShortcut'); if(shortcut) shortcut.hidden=true;
    $('#tituloCatalogo').textContent=`Olá${pessoa?', '+pessoa:''}. O que sua loja precisa repor hoje?`;
    $('#subtituloCatalogo').textContent='Seus preços, ofertas e condições de quantidade estão liberados para esta sessão.';
  }else{
    $('#textoBtnLogin').textContent='Área do Lojista';
    icon.className='fas fa-lock';
    dot.hidden=true; chevron.hidden=true;
    btn.classList.remove('is-authenticated');
    btn.setAttribute('aria-expanded','false');
    btn.setAttribute('aria-label','Entrar na Área do Lojista');
    $('#btnCarrinhoMobile').hidden=true;
    const shortcut=$('#catalogLoginShortcut'); if(shortcut) shortcut.hidden=false;
    $('#tituloCatalogo').textContent='Encontre o que sua loja precisa';
    $('#subtituloCatalogo').textContent='Consulte produtos e disponibilidade. Preços são exclusivos para lojistas autenticados.';
  }
  atualizarOrdenacaoPorPreco(ativo);
}

function atualizarOrdenacaoPorPreco(ativo){
  const select=$('#selectOrdenacao');
  if(!select)return;
  ['menor-preco','maior-preco'].forEach(v=>{const o=select.querySelector(`option[value="${v}"]`);if(o)o.disabled=!ativo});
  if(!ativo&&['menor-preco','maior-preco'].includes(select.value))select.value='a-z';
}

function preencherCliente(){ /* Dados do cliente agora são exibidos e editados na página /carrinho. */ }

async function executarLogin(){
  const usuario=$('#loginUsuario').value.trim();
  const senha=$('#loginSenha').value;
  const remember=Boolean($('#loginRemember')?.checked);
  const erro=$('#loginErro'); erro.hidden=true;
  if(!usuario||!senha){erro.textContent='Preencha usuário e senha.';erro.hidden=false;return}
  const btn=$('#btnLogin'); const old=btn.innerHTML; btn.disabled=true; btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Entrando...';
  try{
    await api('/login',{method:'POST',body:JSON.stringify({usuario,senha,remember})});
    fecharModal('modalLogin');
    await carregarProdutos(true);
    if(!sessaoAtiva()) throw new Error('O login foi recebido, mas a sessão não pôde ser confirmada. Tente novamente.');
    $('#loginSenha').value='';
    toast(`Acesso liberado para ${lojistaLogado.loja||lojistaLogado.nomeCliente}.`);
  }catch(e){
    aplicarEstadoPublico();
    erro.textContent=e.message;erro.hidden=false;
    if(!$('#modalLogin').classList.contains('open')) abrirModal('modalLogin');
  }finally{btn.disabled=false;btn.innerHTML=old}
}

async function fazerLogout(btn=null){
  const original=btn?.innerHTML;
  if(btn){btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Saindo...'}
  const usuarioSaindo=lojistaLogado;
  try{await api('/logout',{method:'POST',body:'{}'})}catch{}
  limparCarrinhoPersistido(usuarioSaindo);
  carrinho=[];
  aplicarEstadoPublico();
  renderCarrinho();
  try{await carregarProdutos(true)}catch{}
  if(btn){btn.disabled=false;btn.innerHTML=original}
  toast('Você saiu da Área do Lojista. Os preços foram bloqueados.');
}

async function carregarProdutos(fresh=false){
  $('#catalogStatus').textContent='Carregando catálogo...';
  try{
    const sufixo=fresh?`?t=${Date.now()}`:'';
    const data=await api(`/products${sufixo}`);
    produtos=data.products||[];
    catalogoAutenticado=Boolean(data.authenticated&&data.user);
    lojistaLogado=catalogoAutenticado?data.user:null;
    atualizarSessaoUI();
    if(catalogoAutenticado)restaurarCarrinhoPersistido();
    else{carrinho=[];renderCarrinho()}
    construirFiltros();
    filtrarProdutos();
    return data;
  }catch(e){
    aplicarEstadoPublico();
    $('#catalogStatus').textContent='Não foi possível carregar o catálogo.';
    $('#produtos').innerHTML=`<div class="empty-cart" style="grid-column:1/-1">${esc(e.message)}<br><small>Confira a conexão e as variáveis de ambiente da Vercel.</small></div>`;
    throw e;
  }
}

async function validarSessaoAtual(){
  if(!sessaoAtiva()||validandoSessao||document.hidden)return;
  validandoSessao=true;
  try{
    const data=await api('/me');
    if(!data.user){
      carrinho=[];
      aplicarEstadoPublico();
      renderCarrinho();
      await carregarProdutos(true).catch(()=>{});
      toast('Sua sessão terminou. Entre novamente para ver os preços.');
    }
  }catch{}
  finally{validandoSessao=false}
}

function acaoContaHeader(event){
  event?.stopPropagation();
  if(!sessaoAtiva()){abrirModalLogin();return}
  const menu=$('#accountMenu');
  const abrir=menu.hidden;
  menu.hidden=!abrir;
  $('#btnContaHeader').setAttribute('aria-expanded',String(abrir));
}

function fecharMenuConta(){
  const menu=$('#accountMenu');
  if(menu)menu.hidden=true;
  const btn=$('#btnContaHeader');
  if(btn)btn.setAttribute('aria-expanded','false');
}

function irParaCatalogo(){
  fecharMenuConta();
  $('#navLinks').classList.remove('open');
  document.getElementById('catalogoTopo').scrollIntoView({behavior:'smooth'});
}

function construirFiltros(){
  const deps=[...new Set(produtos.map(p=>p.departamento).filter(Boolean))].sort();
  $('#departamentos').innerHTML=[
    `<button class="filter-btn offer ${departamentoAtual==='OFERTAS'?'active':''}" onclick="selecionarDepartamento('OFERTAS')"><i class="fas fa-fire"></i> Ofertas</button>`,
    `<button class="filter-btn ${departamentoAtual==='TODOS'?'active':''}" onclick="selecionarDepartamento('TODOS')">Todos</button>`,
    ...deps.map(d=>`<button class="filter-btn ${departamentoAtual===d?'active':''}" onclick='selecionarDepartamento(${JSON.stringify(d)})'>${esc(d)}</button>`)
  ].join('');
  const depMobile=$('#selectDepartamentoMobile');
  if(depMobile)depMobile.innerHTML=[
    `<option value="OFERTAS" ${departamentoAtual==='OFERTAS'?'selected':''}>Ofertas</option>`,
    `<option value="TODOS" ${departamentoAtual==='TODOS'?'selected':''}>Todos os departamentos</option>`,
    ...deps.map(d=>`<option value="${esc(d)}" ${departamentoAtual===d?'selected':''}>${esc(d)}</option>`)
  ].join('');
  renderCategorias();
}

function renderCategorias(){
  let base=produtos;
  if(departamentoAtual==='OFERTAS') base=produtos.filter(p=>p.precoOferta>0&&p.precoOferta<p.precoVarejo);
  else if(departamentoAtual!=='TODOS') base=produtos.filter(p=>p.departamento===departamentoAtual);
  const cats=[...new Set(base.map(p=>p.categoria).filter(Boolean))].sort();
  if(categoriaAtual!=='TODAS'&&!cats.includes(categoriaAtual))categoriaAtual='TODAS';
  $('#categorias').innerHTML=[`<button class="filter-btn ${categoriaAtual==='TODAS'?'active':''}" onclick="selecionarCategoria('TODAS')">Todas</button>`,...cats.map(c=>`<button class="filter-btn ${categoriaAtual===c?'active':''}" onclick='selecionarCategoria(${JSON.stringify(c)})'>${esc(c)}</button>`)].join('');
  const catMobile=$('#selectCategoriaMobile');
  if(catMobile)catMobile.innerHTML=[`<option value="TODAS" ${categoriaAtual==='TODAS'?'selected':''}>Todas as categorias</option>`,...cats.map(c=>`<option value="${esc(c)}" ${categoriaAtual===c?'selected':''}>${esc(c)}</option>`)].join('');
}

function selecionarDepartamento(dep){departamentoAtual=dep;categoriaAtual='TODAS';construirFiltros();filtrarProdutos()}
function selecionarCategoria(cat){categoriaAtual=cat;renderCategorias();filtrarProdutos()}

function filtrarProdutos(){
  const termo=$('#inputBusca').value.toLowerCase().trim(); const ord=$('#selectOrdenacao').value;
  let lista=produtos.filter(p=>{
    const dep=departamentoAtual==='TODOS'||(departamentoAtual==='OFERTAS'?(p.precoOferta>0&&p.precoOferta<p.precoVarejo):p.departamento===departamentoAtual);
    const cat=categoriaAtual==='TODAS'||p.categoria===categoriaAtual;
    const busca=!termo||[p.nome,p.sku,p.categoria,p.departamento].some(v=>String(v||'').toLowerCase().includes(termo));
    return dep&&cat&&busca;
  });
  lista.sort((a,b)=>{
    if(a.situacao==='ESGOTADO'&&b.situacao!=='ESGOTADO')return 1;if(b.situacao==='ESGOTADO'&&a.situacao!=='ESGOTADO')return -1;
    const pa=precoBase(a),pb=precoBase(b);
    if(ord==='z-a')return b.nome.localeCompare(a.nome);if(ord==='menor-preco')return pa-pb;if(ord==='maior-preco')return pb-pa;if(ord==='codigo')return String(a.sku).localeCompare(String(b.sku),undefined,{numeric:true});return a.nome.localeCompare(b.nome);
  });
  renderProdutos(lista);
  $('#catalogStatus').textContent=`${lista.length} produto${lista.length===1?'':'s'} encontrado${lista.length===1?'':'s'}`;
}

function precoBase(p){return p.precoOferta>0&&p.precoOferta<p.precoVarejo?p.precoOferta:(p.precoVarejo||0)}

function renderProdutos(lista){
  if(!lista.length){$('#produtos').innerHTML='<div class="empty-cart" style="grid-column:1/-1">Nenhum produto encontrado com esses filtros.</div>';return}
  $('#produtos').innerHTML=lista.map(p=>{
    const out=p.situacao==='ESGOTADO';
    const hasPrices=catalogoAutenticado&&Number.isFinite(Number(p.precoVarejo));
    let badge='';
    if(out)badge='<span class="badge badge-out">ESGOTADO</span>';
    else if(hasPrices&&p.precoOferta>0&&p.precoOferta<p.precoVarejo){const pct=Math.round((1-p.precoOferta/p.precoVarejo)*100);badge=`<span class="badge badge-sale">-${pct}%</span>`}
    let price='';
    if(hasPrices){
      const base=precoBase(p);
      price=`<div class="price-area">${p.precoOferta>0&&p.precoOferta<p.precoVarejo?`<div class="price-old">${money(p.precoVarejo)}</div>`:''}<div class="price-main">${money(base)}</div>`;
      if(p.precoAtacado<base&&p.qtdAtacado>1)price+=`<div class="wholesale-pill">📦 ${p.qtdAtacado}+ un: ${money(p.precoAtacado)}</div>`;
      if(p.qtdMinima>1)price+=`<div class="minimum-pill">Venda mínima: ${p.qtdMinima} un.</div>`;
      if(out)price+=`<button class="product-action out" disabled>Sem estoque</button>`;
      else price+=`<div class="qty-row"><button onclick="alterarQtd('${esc(p.sku)}',-1)">−</button><span id="qtd-${esc(p.sku)}">${p.qtdMinima||1}</span><button onclick="alterarQtd('${esc(p.sku)}',1)">+</button></div><button class="product-action" onclick="adicionar('${esc(p.sku)}',this)">Adicionar ao pedido</button>`;
      price+='</div>';
    }else{
      price=`<div class="price-area"><div class="locked-price"><i class="fas fa-lock"></i> Preço exclusivo para lojistas</div>${out?'<button class="product-action out" disabled>Indisponível</button>':`<button class="product-action locked" onclick='solicitarPrecoViaZap(${JSON.stringify(p.sku)},${JSON.stringify(p.nome)})'>Consultar atacado</button>`}</div>`;
    }
    return `<article class="produto${out?' produto-esgotado':''}"><div class="product-image" onclick='abrirModalProduto(${JSON.stringify(p.sku)})'>${badge}<img src="${esc(p.imagem||'favicon.png')}" alt="${esc(p.nome)}" loading="lazy" onerror="this.src='favicon.png';this.style.opacity='.2'"></div><h3 onclick='abrirModalProduto(${JSON.stringify(p.sku)})'>${esc(p.nome)}</h3><span class="product-code">Cód. ${esc(p.sku)}</span>${price}</article>`;
  }).join('');
}

function alterarQtd(sku,delta){const p=produtos.find(x=>String(x.sku)===String(sku));const el=document.getElementById(`qtd-${sku}`);if(!p||!el)return;el.textContent=Math.max(p.qtdMinima||1,Number(el.textContent)+delta)}
function adicionar(sku,btn){const p=produtos.find(x=>String(x.sku)===String(sku));if(!p||!lojistaLogado||!catalogoAutenticado){toast('Sua sessão precisa estar ativa para adicionar produtos.');return;}const el=document.getElementById(`qtd-${sku}`);const q=el?Number(el.textContent):(p.qtdMinima||1);const idx=carrinho.findIndex(i=>String(i.sku)===String(sku));if(idx>=0)carrinho[idx].qtd+=q;else carrinho.push({...p,qtd:q});if(el)el.textContent=p.qtdMinima||1;renderCarrinho();salvarCarrinhoPersistido();if(btn){const t=btn.textContent;btn.textContent='Adicionado ✓';setTimeout(()=>btn.textContent=t,900)}}
function ajustarQtdCarrinho(sku,d){const i=carrinho.findIndex(x=>String(x.sku)===String(sku));if(i<0)return;carrinho[i].qtd+=d;if(carrinho[i].qtd<(carrinho[i].qtdMinima||1))carrinho.splice(i,1);renderCarrinho();salvarCarrinhoPersistido()}

function calcularItem(i){const base=precoBase(i);const unit=i.qtd>=i.qtdAtacado&&i.precoAtacado<base?i.precoAtacado:base;return{unit,subtotal:unit*i.qtd}}
function removerDoCarrinho(sku){carrinho=carrinho.filter(i=>String(i.sku)!==String(sku));renderCarrinho();salvarCarrinhoPersistido()}
function renderCarrinho(){
  const itens=carrinho.reduce((total,item)=>total+(Number(item.qtd)||0),0);
  const texto=$('#floatingCartText');
  if(texto) texto.textContent=itens?`Pedido (${itens})`:'Pedido';
}

function toggleCarrinhoMobile(){
  if(!sessaoAtiva()){abrirModalLogin();return;}
  location.href='/carrinho';
}

function finalizarPedido(){
  if(!carrinho.length){toast('Adicione pelo menos um produto ao pedido.');return}
  const nome=$('#inputNome').value.trim().toUpperCase(),loja=$('#inputLoja').value.trim().toUpperCase(),cidade=$('#inputCidade').value.trim().toUpperCase();
  if(!nome||!loja||!cidade){toast('Preencha comprador, loja e cidade.');return}
  let total=0;let msg='*NOVO PEDIDO DE COMPRA - DNORTE*\n=============================\n';msg+=`*Lojista:* ${loja}\n*Comprador:* ${nome}\n*Cidade:* ${cidade}\n`;if(lojistaLogado?.usuario)msg+=`*Usuário:* ${lojistaLogado.usuario}\n`;msg+='=============================\n\n*ITENS SOLICITADOS:*\n';
  carrinho.forEach(i=>{const {unit,subtotal}=calcularItem(i);total+=subtotal;msg+=`- ${i.qtd}x [${i.sku}] ${i.nome} — ${money(unit)}/un — ${money(subtotal)}\n`});
  msg+=`\n*TOTAL ESTIMADO:* ${money(total)}\n`;
  $('#subjectInvisivel').value=`🛒 NOVO PEDIDO RECEBIDO - ${loja}`;$('#lojistaInvisivel').value=loja;$('#compradorInvisivel').value=nome;$('#cidadeInvisivel').value=cidade;$('#totalInvisivel').value=money(total);$('#detalhesInvisivel').value=msg;$('#formPedidoInvisivel').submit();
  window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`,'_blank');
}

function solicitarPrecoViaZap(sku,nome){const msg=`Olá! Vi o produto *${nome}* (Cód. ${sku}) no catálogo da DNorte e gostaria de conhecer as condições de atacado.`;window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`,'_blank')}

function abrirModalProduto(sku){
  const p=produtos.find(x=>String(x.sku)===String(sku));if(!p)return;
  $('#modalImg').src=p.imagem||'favicon.png';$('#modalNome').textContent=p.nome;$('#modalCodigo').textContent=`Cód. ${p.sku}`;
  const has=catalogoAutenticado&&Number.isFinite(Number(p.precoVarejo));
  if(has){const base=precoBase(p);$('#modalPreco').innerHTML=`<div class="modal-price-block">${p.precoOferta>0&&p.precoOferta<p.precoVarejo?`<div class="price-old">${money(p.precoVarejo)}</div>`:''}<div class="price-main">${money(base)}</div>${p.precoAtacado<base?`<div class="wholesale-pill">📦 ${p.qtdAtacado}+ un: ${money(p.precoAtacado)}</div>`:''}${p.qtdMinima>1?`<div class="minimum-pill">Venda mínima: ${p.qtdMinima} un.</div>`:''}</div>`;
    $('#modalAcoes').innerHTML=`<div class="modal-actions">${p.situacao==='ESGOTADO'?'<button class="btn product-action out" disabled>Sem estoque</button>':`<button class="btn btn-primary" onclick="adicionar('${esc(p.sku)}',this);fecharModalProduto()">Adicionar ao pedido</button>`}<button class="btn btn-secondary" onclick="copiarLinkProduto('${esc(p.sku)}')"><i class="fas fa-link"></i> Copiar link</button></div>`;
  }else{$('#modalPreco').innerHTML='<div class="locked-price"><i class="fas fa-lock"></i> Valores exclusivos para lojistas autenticados.</div>';$('#modalAcoes').innerHTML=`<div class="modal-actions"><button class="btn btn-primary" onclick='solicitarPrecoViaZap(${JSON.stringify(p.sku)},${JSON.stringify(p.nome)})'><i class="fab fa-whatsapp"></i> Consultar atacado</button><button class="btn btn-secondary" onclick="copiarLinkProduto('${esc(p.sku)}')"><i class="fas fa-link"></i> Copiar link</button></div>`}
  abrirModal('modalProduto');
}
function fecharModalProduto(){fecharModal('modalProduto');history.replaceState({},'',location.pathname)}

function abrirModalLogin(){
  fecharMenuConta();
  if(sessaoAtiva()){acaoContaHeader();return}
  $('#loginErro').hidden=true;
  abrirModal('modalLogin');
  setTimeout(()=>$('#loginUsuario')?.focus(),50);
}
function abrirModalCadastro(){fecharModal('modalLogin');abrirModal('modalCadastro')}
function abrirModal(id){const m=document.getElementById(id);m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function fecharModal(id){const m=document.getElementById(id);if(!m)return;m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}

async function copiarLinkProduto(sku){const u=new URL('/catalogo',location.origin);u.searchParams.set('sku',sku);await navigator.clipboard.writeText(u.toString());toast('Link do produto copiado.')}
async function copiarLinkFiltroAtual(){const u=new URL('/catalogo',location.origin);if(departamentoAtual!=='TODOS')u.searchParams.set('dep',departamentoAtual);if(categoriaAtual!=='TODAS')u.searchParams.set('cat',categoriaAtual);await navigator.clipboard.writeText(u.toString());toast('Link da seleção copiado.')}
function aplicarURL(){const q=new URLSearchParams(location.search);const dep=q.get('dep'),cat=q.get('cat'),sku=q.get('sku');if(dep){departamentoAtual=dep;categoriaAtual=cat||'TODAS';construirFiltros();filtrarProdutos()}if(sku)setTimeout(()=>{abrirModalProduto(sku);document.getElementById('catalogoTopo').scrollIntoView({behavior:'smooth'})},300)}
function verificarSucessoCadastro(){const q=new URLSearchParams(location.search);if(q.get('cadastro')==='sucesso'){toast('Pré-cadastro recebido. Nossa equipe entrará em contato.');history.replaceState({},'',location.pathname)}}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),2600)}

function aplicarMascaraTelefone(input){let v=input.value.replace(/\D/g,'').slice(0,11);if(v.length<=2)input.value=v?`(${v}`:'';else if(v.length<=7)input.value=`(${v.slice(0,2)}) ${v.slice(2)}`;else input.value=`(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`}
function aplicarMascaraCpfCnpj(input){let v=input.value.replace(/\D/g,'').slice(0,14);if(v.length<=11){v=v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2')}else{v=v.replace(/^(\d{2})(\d)/,'$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1/$2').replace(/(\d{4})(\d)/,'$1-$2')}input.value=v}
function validarCpfCnpjBlur(input){const v=input.value.replace(/\D/g,'');const ok=v.length===11?validarCPF(v):v.length===14?validarCNPJ(v):false;const e=$('#erroCpfCnpj');if(!v){input.setCustomValidity('');e.hidden=true;return}input.setCustomValidity(ok?'':'Documento inválido');e.hidden=ok}
function validarCPF(cpf){if(/^(\d)\1{10}$/.test(cpf))return false;let s=0;for(let i=0;i<9;i++)s+=+cpf[i]*(10-i);let d=(s*10)%11;if(d===10)d=0;if(d!==+cpf[9])return false;s=0;for(let i=0;i<10;i++)s+=+cpf[i]*(11-i);d=(s*10)%11;if(d===10)d=0;return d===+cpf[10]}
function validarCNPJ(cnpj){if(/^(\d)\1{13}$/.test(cnpj))return false;const calc=len=>{let s=0,pos=len-7;for(let i=len;i>=1;i--){s+=+cnpj[len-i]*pos--;if(pos<2)pos=9}return s%11<2?0:11-s%11};return calc(12)===+cnpj[12]&&calc(13)===+cnpj[13]}
