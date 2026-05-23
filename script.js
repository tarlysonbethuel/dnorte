/* =======================================================
   CATÁLOGO AUTOMÁTICO - DNORTE DISTRIBUIDORA
   SISTEMA DE DEPARTAMENTOS E CATEGORIAS EM CASCATA
   ======================================================= */

// 1. CONFIGURAÇÕES PRINCIPAIS
const WHATSAPP_LOJA = "5569999107161"; 
const ID_PLANILHA = "1oneVF4MfT-sQJx-Sa7wfr0AjnHQpZ6zgGZuSaelER7c"; 

let carrinho = [];
let produtos = []; 

// Controles de Filtros Atuais
let departamentoAtual = "TODOS";
let categoriaAtual = "TODAS";

// Gera o código do pedido único no formato: CA-XXXX
let numAleatorio = Math.floor(Math.random() * 9999) + 1;
let numeroPedido = "CA-" + String(numAleatorio).padStart(4, '0');

document.addEventListener("DOMContentLoaded", () => {
    carregarProdutosDaPlanilha();
});

// =======================================================
// 2. BUSCA AUTOMÁTICA DE DADOS (API)
// =======================================================
async function carregarProdutosDaPlanilha() {
    const divProdutos = document.getElementById("produtos");
    divProdutos.innerHTML = "<p style='grid-column:1/-1;text-align:center; padding: 50px; font-size: 18px;'><i class='fas fa-spinner fa-spin'></i> Carregando estoque ao vivo da DNorte...</p>";
    
    try {
        const url = `https://docs.google.com/spreadsheets/d/${ID_PLANILHA}/gviz/tq?tqx=out:json`;
        const response = await fetch(url);
        const text = await response.text();
        
        const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\);/)[1];
        const data = JSON.parse(jsonString);
        
        // Mapeamento exato das suas colunas
        let idxCodigo = 0, idxProduto = 1, idxCategoria = 2, idxDepartamento = 3, idxFoto = 5, idxSituacao = 6, idxPreco = 7;
        
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
            
            let preco = 0;
            if (c[idxPreco] && c[idxPreco].v !== null) {
                preco = parseFloat(String(c[idxPreco].v).replace(',', '.'));
                if (isNaN(preco)) preco = 0;
            }
            
            let imagem = "";
            if (c[idxFoto] && c[idxFoto].v !== null) {
                let fotoPath = String(c[idxFoto].v);
                let filename = fotoPath.split('\\').pop().split('/').pop(); 
                imagem = `imagens_produtos/${filename}`; 
            } else {
                imagem = "favicon.png"; 
            }
            
            produtos.push({ sku, nome, departamento, categoria, preco, imagem });
        });
        
        if (produtos.length > 0) {
            construirFiltros();
            filtrarProdutosFinal();
        } else {
            divProdutos.innerHTML = "<p style='grid-column:1/-1;text-align:center;'>⚠️ Nenhum produto encontrado com a situação 'ATIVO'.</p>";
        }
        
    } catch (error) {
        console.error(error);
        divProdutos.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:red; font-weight:bold;'>❌ Erro ao conectar com o Google Planilhas.</p>";
    }
}

// =======================================================
// 3. MENU DINÂMICO (DEPARTAMENTOS E CATEGORIAS)
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
        let labelDepto = document.createElement("div");
        labelDepto.innerHTML = "<strong style='color:#03264c; font-size:16px;'><i class='fas fa-building'></i> 1. Escolha o Departamento:</strong>";
        labelDepto.style.width = "100%";
        labelDepto.style.marginBottom = "8px";
        wrapper.insertBefore(labelDepto, wrapper.firstChild);

        deptoContainer = document.createElement("div");
        deptoContainer.id = "container-departamentos";
        deptoContainer.className = "botoes-principais";
        deptoContainer.style.marginBottom = "20px";
        deptoContainer.style.borderBottom = "2px solid #eee";
        deptoContainer.style.paddingBottom = "15px";
        wrapper.insertBefore(deptoContainer, labelDepto.nextSibling);
        
        let labelCat = document.createElement("div");
        labelCat.innerHTML = "<strong style='color:#fb7815; font-size:16px;'><i class='fas fa-tags'></i> 2. Filtre por Categoria:</strong>";
        labelCat.style.width = "100%";
        labelCat.style.marginBottom = "8px";
        wrapper.insertBefore(labelCat, document.getElementById("botoes-principais"));
    }

    renderizarDepartamentos();
}

function renderizarDepartamentos() {
    const container = document.getElementById("container-departamentos");
    if(!container) return;
    container.innerHTML = "";
    
    const btnTodos = document.createElement("button");
    btnTodos.className = "btn-categoria" + (departamentoAtual === "TODOS" ? " ativo" : "");
    btnTodos.innerText = "TODOS OS DEPARTAMENTOS";
    btnTodos.onclick = () => selecionarDepartamento("TODOS");
    container.appendChild(btnTodos);
    
    const departamentos = [...new Set(produtos.map(p => p.departamento))].sort();
    
    departamentos.forEach(dep => {
        if (!dep || dep === "TODOS") return;
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

// Gerenciador de categorias menores
function renderizarCategorias() {
    const containerPrincipal = document.getElementById("botoes-principais");
    const containerExtra = document.getElementById("lista-botoes-extra");
    if(!containerPrincipal || !containerExtra) return;
    
    containerPrincipal.innerHTML = "";
    containerExtra.innerHTML = "";
    
    const prodsDoDepto = departamentoAtual === "TODOS" ? produtos : produtos.filter(p => p.departamento === departamentoAtual);
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

        resto.forEach(cat => {
            criarBotaoCategoria(cat, containerExtra);
        });
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

// =======================================================
// 4. VITRINE DE PRODUTOS E BUSCA
// =======================================================
function filtrarProdutosFinal() {
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    
    const listaFiltrada = produtos.filter(p => {
        const matchDepto = departamentoAtual === "TODOS" || p.departamento === departamentoAtual;
        const matchCat = categoriaAtual === "TODAS" || p.categoria === categoriaAtual;
        const matchBusca = termo === "" || 
                           p.nome.toLowerCase().includes(termo) || 
                           String(p.sku).includes(termo) || 
                           p.categoria.toLowerCase().includes(termo) || 
                           p.departamento.toLowerCase().includes(termo);
        
        return matchDepto && matchCat && matchBusca;
    });
    
    renderProdutos(listaFiltrada);
}

function filtrarProdutos() {
    filtrarProdutosFinal();
}

function renderProdutos(lista) {
    const div = document.getElementById("produtos");
    if (!div) return;

    if (lista.length === 0) {
        div.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #888;">Nenhum produto encontrado.</div>`;
        return;
    }

    const htmlBuffer = lista.map(p => {
        return `
        <div class="produto">
            <div style="height: 160px; display: flex; align-items: center; justify-content: center; cursor: pointer;" onclick="abrirModal('${p.sku}')">
                <img src="${p.imagem}" alt="${p.nome}" loading="lazy" style="max-height: 100%; max-width: 100%;" onerror="this.src='favicon.png'; this.style.opacity='0.2'">
            </div>
            <h3 title="${p.nome}" onclick="abrirModal('${p.sku}')" style="cursor:pointer">${p.nome}</h3>
            <p>R$ ${p.preco.toFixed(2)}</p>
            <div class="qtd-selector">
                <button type="button" onclick="alterarQtd('${p.sku}', -1)">-</button>
                <span id="qtd-${p.sku}">1</span>
                <button type="button" onclick="alterarQtd('${p.sku}', 1)">+</button>
            </div>
            <button type="button" class="btn-add" onclick="adicionar('${p.sku}')">Adicionar</button>
        </div>`;
    }).join('');

    div.innerHTML = htmlBuffer;
}

// =======================================================
// 5. GERENCIAMENTO DO CARRINHO E POPUPS
// =======================================================
function ajustarQtdDiretoNoCarrinho(sku, mudanca) {
    const index = carrinho.findIndex(i => String(i.sku) === String(sku));
    if (index > -1) {
        carrinho[index].qtd += mudanca;
        if (carrinho[index].qtd < 1) {
            carrinho.splice(index, 1);
        }
        renderCarrinho();
    }
}

function alterarQtd(sku, mudanca) {
    const span = document.getElementById(`qtd-${sku}`);
    if(span) {
        let novaQtd = parseInt(span.innerText) + mudanca;
        if(novaQtd < 1) novaQtd = 1;
        span.innerText = novaQtd;
    }
}

function adicionar(sku) {
    const p = produtos.find(prod => String(prod.sku) === String(sku));
    if (!p) return;
    
    const span = document.getElementById(`qtd-${sku}`);
    const qtd = span ? parseInt(span.innerText) : 1;
    
    const index = carrinho.findIndex(i => String(i.sku) === String(sku));
    if (index > -1) carrinho[index].qtd += qtd;
    else carrinho.push({ ...p, qtd: qtd });
    
    renderCarrinho();
    if(span) span.innerText = "1"; 
    
    const btn = event.target;
    if(btn && btn.classList.contains('btn-add')) {
        const txtOriginal = btn.innerText;
        btn.innerText = "OK!";
        setTimeout(() => btn.innerText = txtOriginal, 1000);
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
        total += i.preco * i.qtd;
        totalItens += i.qtd;
        div.innerHTML += `
        <div style="border-bottom:1px solid #eee; padding:8px 0; font-size:13px; display:flex; flex-direction:column; gap:4px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px;">
                <strong style="color:#222; max-width:80%;">${i.nome}</strong>
                <span style="color:#666; font-weight:bold; white-space:nowrap;">x${i.qtd}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="color:#fb7815; font-weight:bold;">R$ ${(i.preco * i.qtd).toFixed(2)}</span>
                <div style="display:flex; gap:5px; align-items:center;">
                    <button onclick="ajustarQtdDiretoNoCarrinho('${i.sku}', -1)" style="padding:2px 8px; background:#ddd; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">-</button>
                    <button onclick="ajustarQtdDiretoNoCarrinho('${i.sku}', 1)" style="padding:2px 8px; background:#ddd; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">+</button>
                    <a href="#" onclick="remover('${i.sku}')" style="color:#d9534f; font-weight:bold; text-decoration:none; margin-left:10px; font-size:11px;">Excluir</a>
                </div>
            </div>
        </div>`;
    });

    if(divTotal) divTotal.innerHTML = `<h3 style="text-align:right; color:#03264c; margin-top:15px; font-size:18px;">Total: R$ ${total.toFixed(2)}</h3>`;
    
    if(btnMobile) {
        btnMobile.style.display = "block";
        btnMobile.innerHTML = `<i class="fas fa-check"></i> Ver Carrinho (${totalItens})`;
    }
}

function remover(sku) {
    const index = carrinho.findIndex(i => String(i.sku) === String(sku));
    if (index > -1) carrinho.splice(index, 1);
    renderCarrinho();
}

function abrirModal(sku) {
    const p = produtos.find(prod => String(prod.sku) === String(sku));
    if(!p) return;
    document.getElementById("modalImg").src = p.imagem;
    document.getElementById("modalNome").innerText = p.nome;
    document.getElementById("modalPreco").innerText = `R$ ${p.preco.toFixed(2)}`;
    document.getElementById("modalAcoes").innerHTML = `<button class="btn-add" style="background:#fb7815; color:white; padding:15px; border:none; border-radius:6px; font-weight:bold; cursor:pointer; width:100%;" onclick="adicionarNoModal('${p.sku}')">ADICIONAR AO PEDIDO</button>`;
    document.getElementById("modalProduto").style.display = "flex";
}

function fecharModal(e) {
    if (e === true || e.target.id === "modalProduto") document.getElementById("modalProduto").style.display = "none";
}

function adicionarNoModal(sku) { adicionar(sku); fecharModal(true); }

function abrirModalMobile() { document.querySelector('.carrinho-area').scrollIntoView({ behavior: 'smooth' }); }

// =======================================================
// 6. DISPARAR PEDIDO EXCLUSIVO VIA WHATSAPP (PDF REMOVIDO)
// =======================================================
function finalizarPedido() {
    if (carrinho.length === 0) { alert("Carrinho vazio!"); return; }
    
    const nome = document.getElementById("inputNome").value.toUpperCase();
    const loja = document.getElementById("inputLoja").value.toUpperCase();
    const city = document.getElementById("inputCidade").value.toUpperCase();
    
    if(!nome || !loja || !city) { alert("Por favor, preencha o Nome, Nome da Loja e sua Cidade!"); return; }

    // --- MENSAGEM DO WHATSAPP ---
    let msg = "*PEDIDO: " + numeroPedido + "*\n";
    msg += "----------------\n";
    msg += "👤 *Cliente:* " + nome + "\n";
    msg += "🏠 *Loja:* " + loja + "\n"; 
    msg += "📍 *Cidade:* " + city + "\n";
    msg += "----------------\n*ITENS SOLICITADOS:*\n";
    
    let totalZap = 0;
    carrinho.forEach(i => { 
        msg += i.qtd + "x " + i.nome + "\n"; 
        totalZap += i.preco * i.qtd; 
    });
    
    msg += "----------------\n💰 *TOTAL DA COMPRA: R$ " + totalZap.toFixed(2) + "*";

    const urlZap = "https://wa.me/" + WHATSAPP_LOJA + "?text=" + encodeURIComponent(msg);
    window.open(urlZap, "_blank");
}