/* =======================================================
   CATÁLOGO AUTOMÁTICO DNORTE 2.0 - SISTEMA MISTO
   VITRINE + LINKS + REGRAS: MÍNIMO NORMAL (L) E MÍNIMO OFERTA (M)
   ======================================================= */

const WHATSAPP_LOJA = "5569999107161"; 
const ID_PLANILHA = "1oneVF4MfT-sQJx-Sa7wfr0AjnHQpZ6zgGZuSaelER7c"; 

let carrinho = [];
let produtos = []; 
let clientesCadastrados = [];
let lojistaLogado = null; 

let departamentoAtual = "TODOS";
let categoriaAtual = "TODAS";

let numAleatorio = Math.floor(Math.random() * 9999) + 1;
let numeroPedido = "CA-" + String(numAleatorio).padStart(4, '0');

document.addEventListener("DOMContentLoaded", () => {
    verificarSessaoSalva();
    carregarClientesDoSheets();
    carregarProdutosDaPlanilha();
});

// =======================================================
// 0. SISTEMA DE ALERTAS PREMIUM
// =======================================================
function mostrarAlerta(titulo, mensagem, tipo = 'aviso') {
    const alertaAntigo = document.getElementById('modalAlertaSistema');
    if (alertaAntigo) alertaAntigo.remove();

    let cor = 'var(--dnorte-orange)';
    let icone = 'fas fa-exclamation-triangle';

    if (tipo === 'sucesso') { cor = '#25D366'; icone = 'fas fa-check-circle'; } 
    else if (tipo === 'erro') { cor = '#e53e3e'; icone = 'fas fa-times-circle'; }

    const modal = document.createElement('div');
    modal.id = 'modalAlertaSistema';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(3, 38, 76, 0.8)';
    modal.style.zIndex = '9999';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.backdropFilter = 'blur(5px)';

    modal.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 12px; text-align: center; max-width: 400px; width: 90%; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
            <i class="${icone}" style="font-size: 55px; color: ${cor}; margin-bottom: 20px;"></i>
            <h3 style="color: var(--dnorte-blue); font-size: 24px; margin-bottom: 10px;">${titulo}</h3>
            <p style="color: #64748b; font-size: 16px; margin-bottom: 25px;">${mensagem}</p>
            <button onclick="document.getElementById('modalAlertaSistema').remove()" style="background: ${cor}; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer; width: 100%; transition: 0.3s;">Entendido</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// =======================================================
// 1. VERIFICAÇÃO DE SESSÃO E LOGOUT
// =======================================================
function verificarSessaoSalva() {
    const salvo = localStorage.getItem("dnorte_lojista");
    if (salvo) {
        lojistaLogado = JSON.parse(salvo);
        const aviso = document.getElementById("aviso-cliente-logado");
        const spanNome = document.getElementById("nome-loja-logada");
        if (aviso && spanNome) {
            spanNome.innerText = lojistaLogado.loja || lojistaLogado.usuario;
            aviso.style.display = "block";
        }
    }
}

function fazerLogout() {
    localStorage.removeItem("dnorte_lojista");
    lojistaLogado = null;
    location.reload();
}

function abrirModalLogin() {
    if (lojistaLogado) {
        mostrarAlerta("Acesso Confirmado!", `A sua sessão já está ativa como:<br><strong style="color: var(--dnorte-blue); font-size: 18px;">${lojistaLogado.loja || lojistaLogado.usuario}</strong>`, "sucesso");
        return;
    }
    const modal = document.getElementById('modalLogin');
    if (modal) modal.style.display = 'flex';
}

function fecharModalLogin(event) {
    if (event.target.id === 'modalLogin') {
        document.getElementById('modalLogin').style.display = 'none';
    }
}

// =======================================================
// 2. CONTROLE DE LOGIN
// =======================================================
async function carregarClientesDoSheets() {
    try {
        const urlClientes = `https://docs.google.com/spreadsheets/d/${ID_PLANILHA}/gviz/tq?sheet=CLIENTES&tqx=out:json`;
        const response = await fetch(urlClientes);
        const text = await response.text();
        const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\);/)[1];
        const data = JSON.parse(jsonString);

        clientesCadastrados = [];
        data.table.rows.forEach(row => {
            const c = row.c;
            if (!c || !c[0] || c[0].v === null) return;
            const usuario = String(c[0].v).trim().toUpperCase();
            const senha = c[1] && c[1].v !== null ? String(c[1].v).trim() : '';
            const loja = c[2] && c[2].v !== null ? String(c[2].v).trim() : 'Cliente VIP';
            clientesCadastrados.push({ usuario, senha, loja });
        });
    } catch (error) { console.error("Erro ao carregar clientes:", error); }
}

function executarLogin() {
    const inputUsuario = document.getElementById("loginUsuario").value.trim().toUpperCase();
    const inputSenha = document.getElementById("loginSenha").value.trim();
    const divErro = document.getElementById("login-erro");

    if (!inputUsuario || !inputSenha) {
        divErro.innerText = "❌ Preencha o Usuário e a Senha.";
        divErro.style.display = "block"; return;
    }

    const clienteEncontrado = clientesCadastrados.find(c => c.usuario === inputUsuario && c.senha === inputSenha);

    if (clienteEncontrado) {
        lojistaLogado = clienteEncontrado;
        divErro.style.display = "none";
        localStorage.setItem("dnorte_lojista", JSON.stringify(lojistaLogado));
        
        const loginBox = document.querySelector('.login-box');
        loginBox.innerHTML = `
            <div style="text-align: center; padding: 20px 10px;">
                <i class="fas fa-check-circle" style="font-size: 65px; color: #25D366; margin-bottom: 20px;"></i>
                <h3 style="color: var(--dnorte-blue); font-size: 26px; margin-bottom: 10px;">Acesso Liberado!</h3>
                <p style="font-size: 18px; color: #333; font-weight: bold; margin-bottom: 5px;">Bem-vindo(a), ${clienteEncontrado.loja}</p>
                <p style="color: #64748b; font-size: 15px; margin-bottom: 25px;">Os preços estão prontos para você.</p>
                <p style="color: var(--dnorte-orange); font-size: 14px; font-weight: bold;"><i class="fas fa-spinner fa-spin"></i> Carregando o seu catálogo...</p>
            </div>
        `;
        setTimeout(() => { location.reload(); }, 2000);
    } else {
        divErro.innerText = "❌ Usuário ou Senha incorretos. Tente novamente.";
        divErro.style.display = "block";
    }
}

// =======================================================
// 3. BUSCA AUTOMÁTICA DE PRODUTOS E REGRAS DE MÍNIMO
// =======================================================
async function carregarProdutosDaPlanilha() {
    const divProdutos = document.getElementById("produtos");
    try {
        const nomeDaAba = "Produtos"; 
        const url = `https://docs.google.com/spreadsheets/d/${ID_PLANILHA}/gviz/tq?sheet=${nomeDaAba}&tqx=out:json`;
        const response = await fetch(url);
        const text = await response.text();
        
        if (!text.includes("google.visualization.Query.setResponse")) {
            if(divProdutos) divProdutos.innerHTML = `<p style='text-align:center;color:red; font-weight:bold; font-size: 18px; padding: 40px;'>❌ O Google bloqueou a leitura.</p>`;
            return; 
        }

        const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\);/)[1];
        const data = JSON.parse(jsonString);
        
        // ÍNDICES DAS COLUNAS ATUALIZADOS
        let idxCodigo = 0, idxProduto = 1, idxCategoria = 2, idxDepartamento = 3, idxFoto = 5, idxSituacao = 6;
        let idxPrecoVarejo = 7, idxPrecoAtacado = 8, idxQtdMinimaAtacado = 9, idxPrecoOferta = 10;
        let idxQtdMinimaVenda = 11;  // <--- Coluna L (Mínimo Diário/Normal)
        let idxQtdMinimaOferta = 12; // <--- Coluna M (Mínimo de Oferta)
        
        produtos = [];
        
        data.table.rows.forEach(row => {
            const c = row.c;
            if (!c || !c[idxProduto] || c[idxProduto].v === null) return; 
            const situacao = c[idxSituacao] && c[idxSituacao].v ? String(c[idxSituacao].v).toUpperCase().trim() : 'ATIVO';
            if (situacao !== 'ATIVO') return; 
            
            const sku = c[idxCodigo] && c[idxCodigo].v !== null ? String(c[idxCodigo].v).split('.')[0] : '';
            const nome = c[idxProduto].v;
            const departamento = c[idxDepartamento] && c[idxDepartamento].v !== null ? String(c[idxDepartamento].v).trim().toUpperCase() : 'GERAL';
            const categoria = c[idxCategoria] && c[idxCategoria].v !== null ? String(c[idxCategoria].v).trim().toUpperCase() : 'DIVERSOS';
            
            // --- PREÇOS ---
            let precoVarejo = c[idxPrecoVarejo] && c[idxPrecoVarejo].v !== null ? parseFloat(String(c[idxPrecoVarejo].v).replace(',', '.')) : 0;
            if (isNaN(precoVarejo)) precoVarejo = 0;

            let precoAtacado = precoVarejo; 
            if (c[idxPrecoAtacado] && c[idxPrecoAtacado].v !== null) {
                let valAtacado = parseFloat(String(c[idxPrecoAtacado].v).replace(',', '.'));
                if (!isNaN(valAtacado) && valAtacado > 0) precoAtacado = valAtacado;
            }

            let precoOferta = 0;
            if (c[idxPrecoOferta] && c[idxPrecoOferta].v !== null) {
                let valOferta = parseFloat(String(c[idxPrecoOferta].v).replace(',', '.'));
                if (!isNaN(valOferta) && valOferta > 0) precoOferta = valOferta;
            }

            // --- REGRAS DE QUANTIDADE ---
            // 1. Coluna J: Qtd para ativar Atacado
            let qtdAtacado = 1;
            if (c[idxQtdMinimaAtacado] && c[idxQtdMinimaAtacado].v !== null && c[idxQtdMinimaAtacado].v !== "") {
                qtdAtacado = parseInt(c[idxQtdMinimaAtacado].v);
                if (isNaN(qtdAtacado) || qtdAtacado < 1) qtdAtacado = 1;
            }
            if (precoAtacado < precoVarejo && qtdAtacado === 1) qtdAtacado = 5; 

            // 2. Coluna L: Venda Mínima Normal
            let qtdMinimaNormal = 1;
            if (c[idxQtdMinimaVenda] && c[idxQtdMinimaVenda].v !== null && c[idxQtdMinimaVenda].v !== "") {
                qtdMinimaNormal = parseInt(c[idxQtdMinimaVenda].v);
                if (isNaN(qtdMinimaNormal) || qtdMinimaNormal < 1) qtdMinimaNormal = 1;
            }

            // 3. Coluna M: Venda Mínima de Oferta
            let qtdMinimaOferta = 1;
            if (c[idxQtdMinimaOferta] && c[idxQtdMinimaOferta].v !== null && c[idxQtdMinimaOferta].v !== "") {
                qtdMinimaOferta = parseInt(c[idxQtdMinimaOferta].v);
                if (isNaN(qtdMinimaOferta) || qtdMinimaOferta < 1) qtdMinimaOferta = 1;
            }

            // --- LÓGICA MESTRA DE TRAVA DE QUANTIDADE ---
            // A quantidade mínima exigida muda se o produto está ou não em oferta!
            let qtdMinimaFinal = qtdMinimaNormal;
            if (precoOferta > 0 && precoOferta < precoVarejo) {
                // Se está em oferta, a regra da Coluna M assume o controle
                qtdMinimaFinal = qtdMinimaOferta > 1 ? qtdMinimaOferta : qtdMinimaNormal;
            }
            
            let imagem = c[idxFoto] && c[idxFoto].v !== null && String(c[idxFoto].v).trim() !== "" ? String(c[idxFoto].v).trim() : "favicon.png";
            
            produtos.push({ 
                sku, nome, departamento, categoria, 
                precoVarejo, precoAtacado, qtdAtacado, 
                qtdMinima: qtdMinimaFinal, // A qtdMinima salva será a decidida pela nossa regra acima
                precoOferta, imagem 
            });
        });
        
        if (produtos.length > 0) {
            construirFiltros();
            filtrarProdutosFinal();
            verificarFiltrosEProdutoNaURL(); 
        } else {
            if(divProdutos) divProdutos.innerHTML = "<p style='text-align:center;'>⚠️ Nenhum produto encontrado nesta aba.</p>";
        }
    } catch (error) { console.error("Erro:", error); }
}

// =======================================================
// MÓDULO: DETECTAR LINKS DIRETOS (PRODUTO E CATEGORIAS)
// =======================================================
function verificarFiltrosEProdutoNaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const skuNaUrl = urlParams.get('sku'); 
    const depNaUrl = urlParams.get('dep'); 
    const catNaUrl = urlParams.get('cat'); 
    
    if (skuNaUrl) {
        setTimeout(() => {
            abrirModal(skuNaUrl);
            document.getElementById('vitrine-ancora').scrollIntoView({ behavior: 'smooth' });
        }, 500); 
    } 
    else if (depNaUrl || catNaUrl) {
        if (depNaUrl) departamentoAtual = depNaUrl;
        if (catNaUrl) categoriaAtual = catNaUrl;
        
        setTimeout(() => {
            renderizarDepartamentos(); 
            filtrarProdutosFinal(); 
            document.getElementById('vitrine-ancora').scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }
}

function copiarLinkProduto(sku) {
    const linkDireto = `${window.location.origin}${window.location.pathname}?sku=${sku}`;
    navigator.clipboard.writeText(linkDireto).then(() => {
        mostrarAlerta("Link Copiado!", "O link do produto foi copiado com sucesso. Agora é só colar na conversa com o cliente.", "sucesso");
    }).catch(err => {
        mostrarAlerta("Oops!", "Ocorreu um erro ao copiar o link. O seu navegador pode ter bloqueado a ação.", "erro");
    });
}

function copiarLinkFiltroAtual() {
    let url = `${window.location.origin}${window.location.pathname}`;
    let params = [];
    
    if (departamentoAtual !== "TODOS") {
        params.push(`dep=${encodeURIComponent(departamentoAtual)}`);
    }
    if (categoriaAtual !== "TODAS") {
        params.push(`cat=${encodeURIComponent(categoriaAtual)}`);
    }
    
    if (params.length > 0) {
        url += "?" + params.join("&");
        navigator.clipboard.writeText(url).then(() => {
            mostrarAlerta("Link Copiado!", `O link direto para o departamento/categoria que você está a ver foi copiado. Envie para o seu cliente!`, "sucesso");
        }).catch(err => {
            mostrarAlerta("Oops!", "Erro ao copiar o link da categoria.", "erro");
        });
    } else {
        navigator.clipboard.writeText(url).then(() => {
            mostrarAlerta("Catálogo Copiado!", "Como você está na visão geral, copiamos o link do catálogo completo.", "sucesso");
        });
    }
}

// =======================================================
// 4. MENU DINÂMICO DE FILTROS E BUSCA
// =======================================================
function alternarMenuCategorias() { 
    const menu = document.getElementById("menu-extra");
    const btnVerMais = document.getElementById("btn-ver-mais-cat");
    if (!menu) return;
    if (menu.style.display === "none") {
        menu.style.display = "block";
        if(btnVerMais) btnVerMais.innerHTML = '<i class="fas fa-minus"></i> MENOS';
    } else {
        menu.style.display = "none";
        if(btnVerMais) btnVerMais.innerHTML = '<i class="fas fa-plus"></i> MAIS CATEGORIAS';
    }
}

function construirFiltros() { 
    const wrapper = document.querySelector(".menu-categorias-wrapper");
    if (!wrapper) return;
    let deptoContainer = document.getElementById("container-departamentos");
    
    if (!deptoContainer) {
        let headerDepartamentos = document.createElement("div");
        headerDepartamentos.style.display = "flex";
        headerDepartamentos.style.justifyContent = "space-between";
        headerDepartamentos.style.alignItems = "center";
        headerDepartamentos.style.marginBottom = "10px";
        headerDepartamentos.style.flexWrap = "wrap";
        headerDepartamentos.style.gap = "10px";

        let labelDepto = document.createElement("div");
        labelDepto.innerHTML = "<strong style='color:#03264c; font-size:15px;'><i class='fas fa-building'></i> 1. Filtre por Departamento:</strong>";
        
        let btnShare = document.createElement("button");
        btnShare.innerHTML = "<i class='fas fa-link'></i> Copiar Link desta Categoria";
        btnShare.style.background = "var(--dnorte-orange)";
        btnShare.style.color = "white";
        btnShare.style.border = "none";
        btnShare.style.padding = "8px 12px";
        btnShare.style.borderRadius = "6px";
        btnShare.style.cursor = "pointer";
        btnShare.style.fontWeight = "bold";
        btnShare.style.fontSize = "13px";
        btnShare.style.transition = "0.3s";
        btnShare.onmouseover = function() { this.style.background = "#e0680d"; }
        btnShare.onmouseout = function() { this.style.background = "var(--dnorte-orange)"; }
        btnShare.onclick = copiarLinkFiltroAtual; 

        headerDepartamentos.appendChild(labelDepto);
        headerDepartamentos.appendChild(btnShare);
        
        wrapper.insertBefore(headerDepartamentos, wrapper.firstChild);
        
        deptoContainer = document.createElement("div");
        deptoContainer.id = "container-departamentos";
        deptoContainer.className = "botoes-principais";
        deptoContainer.style.marginBottom = "15px";
        deptoContainer.style.borderBottom = "2px solid #eee";
        deptoContainer.style.paddingBottom = "10px";
        wrapper.insertBefore(deptoContainer, headerDepartamentos.nextSibling);
        
        let labelCat = document.createElement("div");
        labelCat.innerHTML = "<strong style='color:#fb7815; font-size:15px;'><i class='fas fa-tags'></i> 2. Sub-Categoria:</strong>";
        labelCat.style.marginBottom = "8px";
        wrapper.insertBefore(labelCat, document.getElementById("botoes-principais"));
    }
    renderizarDepartamentos();
}

function renderizarDepartamentos() { 
    const container = document.getElementById("container-departamentos");
    if(!container) return;
    container.innerHTML = "";

    const btnOfertas = document.createElement("button");
    btnOfertas.className = "btn-categoria btn-ofertas" + (departamentoAtual === "OFERTAS" ? " ativo" : "");
    btnOfertas.innerHTML = "<i class='fas fa-fire'></i> SUPER OFERTAS";
    btnOfertas.onclick = () => selecionarDepartamento("OFERTAS");
    container.appendChild(btnOfertas);
    
    const btnTodos = document.createElement("button");
    btnTodos.className = "btn-categoria" + (departamentoAtual === "TODOS" ? " ativo" : "");
    btnTodos.innerText = "TODOS";
    btnTodos.onclick = () => selecionarDepartamento("TODOS");
    container.appendChild(btnTodos);
    
    const departamentos = [...new Set(produtos.map(p => p.departamento))].sort();
    departamentos.forEach(dep => {
        if (!dep || dep === "TODOS" || dep === "OFERTAS") return;
        const btn = document.createElement("button");
        btn.className = "btn-categoria" + (departamentoAtual === dep ? " ativo" : "");
        btn.innerText = dep;
        btn.onclick = () => selecionarDepartamento(dep);
        container.appendChild(btn);
    });
    renderizarCategorias();
}

function selecionarDepartamento(dep) {
    departamentoAtual = dep;
    categoriaAtual = "TODAS"; 
    renderizarDepartamentos();
    filtrarProdutosFinal();
}

function renderizarCategorias() { 
    const containerPrincipal = document.getElementById("botoes-principais");
    const containerExtra = document.getElementById("lista-botoes-extra");
    if(!containerPrincipal || !containerExtra) return;
    containerPrincipal.innerHTML = "";
    containerExtra.innerHTML = "";
    
    let prodsDoDepto = produtos;
    if (departamentoAtual === "OFERTAS") {
        prodsDoDepto = produtos.filter(p => p.precoOferta > 0 && p.precoOferta < p.precoVarejo);
    } else if (departamentoAtual !== "TODOS") {
        prodsDoDepto = produtos.filter(p => p.departamento === departamentoAtual);
    }
    
    const categorias = [...new Set(prodsDoDepto.map(p => p.categoria))].sort();
    
    const btnTodas = document.createElement("button");
    btnTodas.className = "btn-categoria" + (categoriaAtual === "TODAS" ? " ativo" : "");
    btnTodas.innerText = "TODAS";
    btnTodas.onclick = () => selecionarCategoria("TODAS");
    containerPrincipal.appendChild(btnTodas);
    
    const destaque = categorias.slice(0, 4);
    const resto = categorias.slice(4);
    
    destaque.forEach(cat => {
        if(!cat || cat === "TODAS") return;
        criarBotaoCategoria(cat, containerPrincipal);
    });
    if (resto.length > 0) {
        const btnVerMais = document.createElement("button");
        btnVerMais.id = "btn-ver-mais-cat";
        btnVerMais.className = "btn-categoria btn-ver-mais";
        btnVerMais.innerHTML = '<i class="fas fa-plus"></i> MAIS CATEGORIAS';
        btnVerMais.onclick = alternarMenuCategorias;
        containerPrincipal.appendChild(btnVerMais);
        resto.forEach(cat => { criarBotaoCategoria(cat, containerExtra); });
    } else {
        const menu = document.getElementById("menu-extra");
        if(menu) menu.style.display = "none";
    }
}

function criarBotaoCategoria(cat, local) {
    const btn = document.createElement("button");
    btn.className = "btn-categoria" + (categoriaAtual === cat ? " ativo" : "");
    btn.innerText = cat;
    btn.onclick = () => {
        selecionarCategoria(cat);
        if (local.id === "lista-botoes-extra") alternarMenuCategorias();
    };
    local.appendChild(btn);
}

function selecionarCategoria(cat) {
    categoriaAtual = cat;
    renderizarCategorias();
    filtrarProdutosFinal();
}

function filtrarProdutos() { filtrarProdutosFinal(); }

function filtrarProdutosFinal() {
    const inputBusca = document.getElementById('inputBusca');
    const termo = inputBusca ? inputBusca.value.toLowerCase() : "";
    
    const listaFiltrada = produtos.filter(p => {
        let matchDepto = false;
        if (departamentoAtual === "TODOS") {
            matchDepto = true;
        } else if (departamentoAtual === "OFERTAS") {
            matchDepto = (p.precoOferta > 0 && p.precoOferta < p.precoVarejo);
        } else {
            matchDepto = (p.departamento === departamentoAtual);
        }
        
        const matchCat = categoriaAtual === "TODAS" || p.categoria === categoriaAtual;
        const matchBusca = termo === "" || p.nome.toLowerCase().includes(termo) || String(p.sku).includes(termo) || p.categoria.toLowerCase().includes(termo);
        return matchDepto && matchCat && matchBusca;
    });
    renderizarProdutos(listaFiltrada);
}

// =======================================================
// 5. RENDERIZAÇÃO DE PRODUTOS
// =======================================================
function renderizarProdutos(lista) {
    const divProdutos = document.getElementById("produtos");
    const carrinhoArea = document.getElementById("carrinho-lateral");
    const btnMobile = document.getElementById("btn-whatsapp");

    if(!divProdutos) return;

    if (lista.length === 0) {
        divProdutos.innerHTML = "<div style='grid-column: 1 / -1; text-align: center; padding: 40px; color: #888;'>Nenhum item localizado.</div>";
        return;
    }

    if (lojistaLogado) {
        if(carrinhoArea) carrinhoArea.style.display = "block";
        if(btnMobile) btnMobile.style.display = "block";
    } else {
        if(carrinhoArea) carrinhoArea.style.display = "none";
        if(btnMobile) btnMobile.style.display = "none";
    }

    const htmlBuffer = lista.map(p => {
        let blocoPrecoEAcao = "";
        let seloAtacadoTopo = ""; 
        let seloDescontoHtml = ""; 
        
        if (lojistaLogado) {
            let htmlPreco = `<p class="preco-produto">R$ ${p.precoVarejo.toFixed(2).replace('.', ',')}</p>`;
            let precoBaseAtual = p.precoVarejo;

            if (p.precoOferta > 0 && p.precoOferta < p.precoVarejo) {
                precoBaseAtual = p.precoOferta;
                let porcentagemDesconto = Math.round(((p.precoVarejo - p.precoOferta) / p.precoVarejo) * 100);
                seloDescontoHtml = `<div class="selo-desconto">-${porcentagemDesconto}%</div>`;

                htmlPreco = `
                <p class="preco-produto" style="line-height: 1.1;">
                    <span style="text-decoration: line-through; color: #94a3b8; font-size: 13px;">R$ ${p.precoVarejo.toFixed(2).replace('.', ',')}</span><br>
                    <span style="color: #e53e3e;">R$ ${p.precoOferta.toFixed(2).replace('.', ',')}</span>
                </p>`;
            }

            if (p.precoAtacado < precoBaseAtual && p.qtdAtacado > 1) {
                seloAtacadoTopo = `
                <div style="background-color: #e6f4ea; border: 1px solid #28a745; color: #28a745; text-align: center; padding: 6px; font-size: 11px; font-weight: 800; border-radius: 8px; margin-bottom: 12px; width: 100%;">
                    📦 ATACADO: R$ ${p.precoAtacado.toFixed(2).replace('.',',')} (${p.qtdAtacado}+ un)
                </div>`;
            }

            let avisoQtdMinima = "";
            if (p.qtdMinima > 1) {
                avisoQtdMinima = `<div style="font-size: 11px; color: #e53e3e; font-weight: bold; background: #fff5f5; border: 1px solid #fed7d7; padding: 4px; border-radius: 4px; margin-bottom: 8px;">⚠️ Venda Mínima: ${p.qtdMinima} un.</div>`;
            }

            blocoPrecoEAcao = `
                ${htmlPreco}
                ${avisoQtdMinima}
                <div class="qtd-selector">
                    <button type="button" onclick="alterarQtd('${p.sku}', -1)">-</button>
                    <span id="qtd-${p.sku}">${p.qtdMinima}</span>
                    <button type="button" onclick="alterarQtd('${p.sku}', 1)">+</button>
                </div>
                <button type="button" class="btn-add" onclick="adicionar('${p.sku}')">Adicionar ao Pedido</button>
            `;
        } else {
            blocoPrecoEAcao = `
                <p class="aviso-preco-vitrine"><i class="fas fa-lock"></i> Preço restrito a lojistas</p>
                <button type="button" class="btn-solicitar-preco" onclick="solicitarPrecoViaZap('${p.sku}', '${p.nome}')">Consultar Atacado <i class="fab fa-whatsapp"></i></button>
            `;
        }

        return `
        <div class="produto">
            ${seloAtacadoTopo}
            <div class="img-prod-wrapper" onclick="abrirModal('${p.sku}')">
                ${seloDescontoHtml} 
                <img src="${p.imagem}" alt="${p.nome}" loading="lazy" onerror="this.src='favicon.png'; this.style.opacity='0.2'">
            </div>
            <h3 title="${p.nome}" onclick="abrirModal('${p.sku}')">${p.nome}</h3>
            <small class="sku-label">Cód: #${p.sku}</small>
            ${blocoPrecoEAcao}
        </div>`;
    }).join('');

    divProdutos.innerHTML = htmlBuffer;
}

function solicitarPrecoViaZap(sku, nomeProd) {
    const msg = `Olá! Vi o produto *${nomeProd}* (Cód: #${sku}) na sua Vitrine Virtual e gostaria de saber as tabelas de preço e condições de atacado para a minha loja.`;
    window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`, "_blank");
}

// =======================================================
// 6. MODAL DO PRODUTO E GESTÃO DO CARRINHO (BLOQUEIOS)
// =======================================================
function abrirModal(sku) {
    const p = produtos.find(prod => String(prod.sku) === String(sku));
    if(!p) return;
    document.getElementById("modalImg").src = p.imagem;
    document.getElementById("modalNome").innerText = p.nome;
    
    const pPreco = document.getElementById("modalPreco");
    const pAcoes = document.getElementById("modalAcoes");
    
    const btnCompartilharHTML = `<button onclick="copiarLinkProduto('${p.sku}')" style="width:100%; padding:12px; background:transparent; border:2px solid #03264c; color:#03264c; border-radius:8px; cursor:pointer; font-weight:bold; margin-top: 10px; transition: 0.3s;" onmouseover="this.style.background='#03264c'; this.style.color='white';" onmouseout="this.style.background='transparent'; this.style.color='#03264c';"><i class="fas fa-link"></i> Copiar Link do Produto</button>`;
    
    if (lojistaLogado) {
        let precoBaseAtual = p.precoVarejo;
        let textoPreco = `Varejo: R$ ${p.precoVarejo.toFixed(2).replace('.', ',')}`;
        
        if (p.precoOferta > 0 && p.precoOferta < p.precoVarejo) {
            precoBaseAtual = p.precoOferta;
            let porcentagemDesconto = Math.round(((p.precoVarejo - p.precoOferta) / p.precoVarejo) * 100);
            
            textoPreco = `<span style="text-decoration:line-through; color:#94a3b8; font-size:14px;">Varejo: R$ ${p.precoVarejo.toFixed(2).replace('.', ',')}</span><br>
                          <span style="color:#e53e3e;">🔥 Oferta: R$ ${p.precoOferta.toFixed(2).replace('.', ',')} <span style="font-size: 14px;">(-${porcentagemDesconto}%)</span></span>`;
        }

        if(p.precoAtacado < precoBaseAtual) {
            textoPreco += `<br><span style="color:#28a745; font-size:16px;">📦 Atacado (${p.qtdAtacado}+ un): R$ ${p.precoAtacado.toFixed(2).replace('.', ',')}</span>`;
        }
        
        if (p.qtdMinima > 1) {
            textoPreco += `<br><span style="color:#e53e3e; font-size:14px; font-weight:bold; display:inline-block; margin-top:8px;">⚠️ Venda Mínima: ${p.qtdMinima} unidades</span>`;
        }

        pPreco.innerHTML = textoPreco;
        pPreco.style.color = "#fb7815";
        pAcoes.innerHTML = `
            <button class="btn-add" style="width:100%; padding:15px;" onclick="adicionarNoModal('${p.sku}')">ADICIONAR AO PEDIDO</button>
            ${btnCompartilharHTML}
        `;
    } else {
        pPreco.innerHTML = `<i class="fas fa-lock"></i> Valores visíveis apenas para lojistas parceiros.`;
        pPreco.style.color = "#888";
        pAcoes.innerHTML = `
            <button class="btn-solicitar-preco" style="width:100%; padding:15px;" onclick="solicitarPrecoViaZap('${p.sku}', '${p.nome}')">Consultar via WhatsApp <i class="fab fa-whatsapp"></i></button>
            ${btnCompartilharHTML}
        `;
    }
    
    document.getElementById("modalProduto").style.display = "flex";
}

function fecharModal(force = false, event = null) {
    if (force || (event && event.target.id === "modalProduto")) {
        document.getElementById("modalProduto").style.display = "none";
        const urlLimpa = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, urlLimpa);
    }
}

function adicionarNoModal(sku) { adicionar(sku); fecharModal(true); }

function alterarQtd(sku, mudanca) {
    const p = produtos.find(prod => String(prod.sku) === String(sku));
    if (!p) return;
    
    const span = document.getElementById(`qtd-${sku}`);
    if(span) {
        let novaQtd = parseInt(span.innerText) + mudanca;
        
        // --- TRAVA DE SEGURANÇA: Não baixa da qtdMinima calculada ---
        if(novaQtd < p.qtdMinima) {
            novaQtd = p.qtdMinima;
        }
        
        span.innerText = novaQtd;
    }
}

function adicionar(sku) {
    const p = produtos.find(prod => String(prod.sku) === String(sku));
    if (!p) return;
    
    const span = document.getElementById(`qtd-${sku}`);
    const qtd = span ? parseInt(span.innerText) : p.qtdMinima;
    
    const index = carrinho.findIndex(i => String(i.sku) === String(sku));
    if (index > -1) carrinho[index].qtd += qtd;
    else carrinho.push({ ...p, qtd: qtd });
    
    renderCarrinho();
    
    if(span) span.innerText = p.qtdMinima; 
    
    const btn = event.target;
    if(btn && btn.classList.contains('btn-add')) {
        btn.innerText = "Adicionado!";
        setTimeout(() => btn.innerText = "Adicionar ao Pedido", 1000);
    }
}

function ajustarQtdDiretoNoCarrinho(sku, mudanca) {
    const index = carrinho.findIndex(i => String(i.sku) === String(sku));
    if (index > -1) {
        const item = carrinho[index];
        item.qtd += mudanca;
        
        if (item.qtd < item.qtdMinima) {
            carrinho.splice(index, 1);
        }
        renderCarrinho();
    }
}

function renderCarrinho() {
    const div = document.getElementById("itensCarrinho");
    const divTotal = document.getElementById("total");
    const btnMobile = document.getElementById("btn-whatsapp");
    
    if(!div) return;
    div.innerHTML = "";
    let total = 0;
    let totalItens = 0;

    if (carrinho.length === 0) {
        div.innerHTML = "<p class='carrinho-vazio'>Seu carrinho está vazio.</p>";
        if(btnMobile) btnMobile.style.display = "none";
        if(divTotal) divTotal.innerHTML = "";
        return;
    }

    carrinho.forEach(i => {
        let precoBase = (i.precoOferta > 0 && i.precoOferta < i.precoVarejo) ? i.precoOferta : i.precoVarejo;
        let precoAtivo = (i.qtd >= i.qtdAtacado && i.precoAtacado < precoBase) ? i.precoAtacado : precoBase;
        
        const subtotal = precoAtivo * i.qtd;
        total += subtotal;
        totalItens += i.qtd;

        let badgePromocao = "";
        if (i.qtd >= i.qtdAtacado && i.precoAtacado < precoBase) {
            badgePromocao = `<span style="color:#28a745; font-size:10px; margin-left:5px;">(Atacado)</span>`;
        } else if (i.precoOferta > 0 && i.precoOferta < i.precoVarejo) {
            badgePromocao = `<span style="color:#e53e3e; font-size:10px; margin-left:5px;">(Oferta)</span>`;
        }

        div.innerHTML += `
        <div class="item-carrinho-box">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <strong style="max-width:80%;">${i.nome} ${badgePromocao}</strong>
                <span>x${i.qtd}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                <span style="color:#fb7815; font-weight:bold;">R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
                <div style="display:flex; gap:5px;">
                    <button onclick="ajustarQtdDiretoNoCarrinho('${i.sku}', -1)">-</button>
                    <button onclick="ajustarQtdDiretoNoCarrinho('${i.sku}', 1)">+</button>
                </div>
            </div>
        </div>`;
    });

    if(divTotal) divTotal.innerHTML = `<h3>Total: R$ ${total.toFixed(2).replace('.', ',')}</h3>`;
    
    if(btnMobile && lojistaLogado) {
        btnMobile.style.display = "block";
        btnMobile.innerHTML = `<i class="fas fa-shopping-basket"></i> Pedido (${totalItens})`;
    }
}

function abrirModalMobile() { 
    const carrinhoArea = document.querySelector('.carrinho-area');
    if (carrinhoArea) {
        carrinhoArea.classList.toggle('mostrar-mobile');
    }
}

// =======================================================
// 7. FINALIZAÇÃO DO PEDIDO
// =======================================================
function finalizarPedido() {
    if (carrinho.length === 0) { 
        mostrarAlerta("Carrinho Vazio", "Adicione pelo menos um produto ao seu pedido antes de finalizar.", "aviso");
        return; 
    }
    
    const nome = document.getElementById("inputNome").value.toUpperCase();
    const loja = document.getElementById("inputLoja").value.toUpperCase();
    const city = document.getElementById("inputCidade").value.toUpperCase();
    
    if(!nome || !loja || !city) { 
        mostrarAlerta("Atenção", "Por favor, preencha todos os campos do cabeçalho (Nome, Loja e Cidade) para enviar o pedido.", "aviso");
        return; 
    }

    let msg = `*NOVO PEDIDO DE COMPRA - DNORTE*\n`;
    msg += `=============================\n`;
    msg += `*Lojista:* ${loja}\n`;
    msg += `*Comprador:* ${nome}\n`;
    msg += `*Cidade:* ${city}\n`;
    if (lojistaLogado) msg += `*Usuário:* ${lojistaLogado.usuario}\n`;
    msg += `=============================\n\n`;
    msg += `*ITENS SOLICITADOS:*\n`;
    
    let totalZap = 0;
    carrinho.forEach(i => {
        let precoBase = (i.precoOferta > 0 && i.precoOferta < i.precoVarejo) ? i.precoOferta : i.precoVarejo;
        let precoAtivo = (i.qtd >= i.qtdAtacado && i.precoAtacado < precoBase) ? i.precoAtacado : precoBase;
        const subtotal = precoAtivo * i.qtd;

        let infoPromocao = "";
        if (i.qtd >= i.qtdAtacado && i.precoAtacado < precoBase) infoPromocao = " *(Atacado)*";
        else if (i.precoOferta > 0 && i.precoOferta < i.precoVarejo) infoPromocao = " *(Oferta)*";

        msg += `- ${i.qtd}x [${i.sku}] ${i.nome} - R$ ${subtotal.toFixed(2)}${infoPromocao}\n`;
        totalZap += subtotal;
    });
    
    msg += `\n*TOTAL ESTIMADO:* R$ ${totalZap.toFixed(2)}\n`;
    window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`, '_blank');
}

// =======================================================
// 8. BOTÃO FLUTUANTE: VOLTAR AOS FILTROS
// =======================================================
window.addEventListener('scroll', function() {
    const btnTopo = document.getElementById('btn-voltar-topo');
    if (btnTopo) {
        if (window.scrollY > 600) btnTopo.style.display = 'block';
        else btnTopo.style.display = 'none';
    }
});

function voltarAosFiltros() {
    const ancora = document.getElementById('vitrine-ancora');
    if (ancora) ancora.scrollIntoView({ behavior: 'smooth' });
}