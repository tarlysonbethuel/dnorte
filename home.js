const API_BASE='/api';
let lojistaLogado=null;
let validandoSessao=false;
const CART_STORAGE_PREFIX='dnorte_cart_v34_';
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

window.addEventListener('DOMContentLoaded',init);

async function init(){
  wireUI();
  atualizarContaUI();
  await carregarSessao();
  verificarSucessoCadastro();
}

function wireUI(){
  $('#mobileMenuBtn')?.addEventListener('click',()=>{
    const nav=$('#navLinks'); nav?.classList.toggle('open');
    $('#mobileMenuBtn')?.setAttribute('aria-expanded',String(nav?.classList.contains('open')));
  });
  $$('#navLinks a').forEach(a=>a.addEventListener('click',()=>$('#navLinks')?.classList.remove('open')));
  $$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)fecharModal(m.id)}));
  window.addEventListener('scroll',()=>{const b=$('#btnTopo');if(b)b.style.display=window.scrollY>700?'block':'none'});
  document.addEventListener('click',e=>{const area=$('#accountArea');if(area&&!area.contains(e.target))fecharMenuConta()});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape')fecharMenuConta();
    if(e.key==='Enter'&&$('#modalLogin')?.classList.contains('open')&&document.activeElement?.id==='loginSenha')executarLogin();
  });
  window.addEventListener('focus',()=>validarSessaoAtual());
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')validarSessaoAtual()});
  $('#inputTelefone')?.addEventListener('input',e=>aplicarMascaraTelefone(e.target));
  $('#inputCpfCnpj')?.addEventListener('input',e=>aplicarMascaraCpfCnpj(e.target));
  $('#inputCpfCnpj')?.addEventListener('blur',e=>validarCpfCnpjBlur(e.target));
}

async function api(path,options={}){
  const r=await fetch(`${API_BASE}${path}`,{credentials:'include',cache:'no-store',headers:{'Content-Type':'application/json','Cache-Control':'no-cache',...(options.headers||{})},...options});
  let data={};try{data=await r.json()}catch{}
  if(!r.ok)throw new Error(data.error||'Não foi possível concluir a operação.');
  return data;
}

async function carregarSessao(){
  try{const data=await api(`/me?t=${Date.now()}`);lojistaLogado=data.user||null}catch{lojistaLogado=null}
  atualizarContaUI();
}

function atualizarContaUI(){
  const ativo=Boolean(lojistaLogado);
  const btn=$('#btnContaHeader'),icon=$('#iconeConta'),dot=$('#accountDot'),chevron=$('#accountChevron');
  if(!btn)return;
  if(ativo){
    const loja=lojistaLogado.loja||'Minha conta';
    const pessoa=lojistaLogado.nomeCliente||lojistaLogado.usuario||'';
    $('#textoBtnLogin').textContent=loja;
    icon.className='fas fa-store'; dot.hidden=false; chevron.hidden=false;
    btn.classList.add('is-authenticated');btn.setAttribute('aria-label',`Conta ativa: ${loja}`);
    $('#accountLoja').textContent=loja;$('#accountPessoa').textContent=pessoa?`Comprador: ${pessoa}`:'Acesso do lojista';
    $$('.catalog-login-cta').forEach(b=>{b.innerHTML='<i class="fas fa-box-open"></i> Abrir meu catálogo';b.onclick=irParaCatalogo});
  }else{
    $('#textoBtnLogin').textContent='Área do Lojista';icon.className='fas fa-lock';dot.hidden=true;chevron.hidden=true;
    btn.classList.remove('is-authenticated');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Entrar na Área do Lojista');
    $$('.catalog-login-cta').forEach(b=>{b.textContent='Entrar agora';b.onclick=abrirModalLogin});
    fecharMenuConta();
  }
}

function chaveCarrinho(user=lojistaLogado){const id=String(user?.usuario||user?.loja||user?.nomeCliente||'').trim().toUpperCase();return id?`${CART_STORAGE_PREFIX}${encodeURIComponent(id)}`:null}
function limparCarrinhoPersistido(user=lojistaLogado){const key=chaveCarrinho(user);if(!key)return;try{localStorage.removeItem(key)}catch{}}

function acaoContaHeader(event){event?.stopPropagation();if(!lojistaLogado){abrirModalLogin();return}const menu=$('#accountMenu');const abrir=menu.hidden;menu.hidden=!abrir;$('#btnContaHeader').setAttribute('aria-expanded',String(abrir))}
function fecharMenuConta(){const menu=$('#accountMenu');if(menu)menu.hidden=true;$('#btnContaHeader')?.setAttribute('aria-expanded','false')}
function irParaCatalogo(){location.href='/catalogo'}

async function executarLogin(){
  const usuario=$('#loginUsuario').value.trim(),senha=$('#loginSenha').value,remember=Boolean($('#loginRemember')?.checked),erro=$('#loginErro');
  erro.hidden=true;if(!usuario||!senha){erro.textContent='Preencha usuário e senha.';erro.hidden=false;return}
  const btn=$('#btnLogin'),old=btn.innerHTML;btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Entrando...';
  try{
    const data=await api('/login',{method:'POST',body:JSON.stringify({usuario,senha,remember})});
    lojistaLogado=data.user||null;
    if(!lojistaLogado)throw new Error('Não foi possível confirmar sua sessão.');
    fecharModal('modalLogin');atualizarContaUI();
    location.href='/catalogo';
  }catch(e){lojistaLogado=null;atualizarContaUI();erro.textContent=e.message;erro.hidden=false}
  finally{btn.disabled=false;btn.innerHTML=old}
}

async function fazerLogout(btn=null){
  const original=btn?.innerHTML;if(btn){btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Saindo...'}
  const usuarioSaindo=lojistaLogado;
  try{await api('/logout',{method:'POST',body:'{}'})}catch{}
  limparCarrinhoPersistido(usuarioSaindo);
  lojistaLogado=null;atualizarContaUI();if(btn){btn.disabled=false;btn.innerHTML=original}toast('Você saiu da Área do Lojista.');
}

async function validarSessaoAtual(){
  if(!lojistaLogado||validandoSessao||document.hidden)return;validandoSessao=true;
  try{const data=await api(`/me?t=${Date.now()}`);if(!data.user){lojistaLogado=null;atualizarContaUI();toast('Sua sessão terminou. Entre novamente para ver os preços.')}else{lojistaLogado=data.user;atualizarContaUI()}}catch{}
  finally{validandoSessao=false}
}

function abrirModalLogin(){fecharMenuConta();if(lojistaLogado){acaoContaHeader();return}$('#loginErro').hidden=true;abrirModal('modalLogin');setTimeout(()=>$('#loginUsuario')?.focus(),50)}
function abrirModalCadastro(){fecharModal('modalLogin');abrirModal('modalCadastro')}
function abrirModal(id){const m=document.getElementById(id);if(!m)return;m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function fecharModal(id){const m=document.getElementById(id);if(!m)return;m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function verificarSucessoCadastro(){const q=new URLSearchParams(location.search);if(q.get('cadastro')==='sucesso'){toast('Pré-cadastro recebido. Nossa equipe entrará em contato.');history.replaceState({},'',location.pathname)}}
function toast(msg){const el=$('#toast');if(!el)return;el.textContent=msg;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),2600)}

function aplicarMascaraTelefone(input){let v=input.value.replace(/\D/g,'').slice(0,11);if(v.length<=2)input.value=v?`(${v}`:'';else if(v.length<=7)input.value=`(${v.slice(0,2)}) ${v.slice(2)}`;else input.value=`(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`}
function aplicarMascaraCpfCnpj(input){let v=input.value.replace(/\D/g,'').slice(0,14);if(v.length<=11){v=v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2')}else{v=v.replace(/^(\d{2})(\d)/,'$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1/$2').replace(/(\d{4})(\d)/,'$1-$2')}input.value=v}
function validarCpfCnpjBlur(input){const v=input.value.replace(/\D/g,''),ok=v.length===11?validarCPF(v):v.length===14?validarCNPJ(v):false,e=$('#erroCpfCnpj');if(!v){input.setCustomValidity('');e.hidden=true;return}input.setCustomValidity(ok?'':'Documento inválido');e.hidden=ok}
function validarCPF(cpf){if(/^(\d)\1{10}$/.test(cpf))return false;let s=0;for(let i=0;i<9;i++)s+=+cpf[i]*(10-i);let d=(s*10)%11;if(d===10)d=0;if(d!==+cpf[9])return false;s=0;for(let i=0;i<10;i++)s+=+cpf[i]*(11-i);d=(s*10)%11;if(d===10)d=0;return d===+cpf[10]}
function validarCNPJ(cnpj){if(/^(\d)\1{13}$/.test(cnpj))return false;const calc=len=>{let s=0,pos=len-7;for(let i=len;i>=1;i--){s+=+cnpj[len-i]*pos--;if(pos<2)pos=9}return s%11<2?0:11-s%11};return calc(12)===+cnpj[12]&&calc(13)===+cnpj[13]}
