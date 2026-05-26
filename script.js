/* =======================================================
   CATÁLOGO AUTOMÁTICO DNORTE 2.0 - SISTEMA MISTO
   VITRINE PÚBLICA (SEM PREÇO) + ÁREA DO LOJISTA COM SENHA
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
// 2. CONTROLE DE SESSÃO E LOGIN (COM CORREÇÃO DE ZEROS)
// =======================================================
async function carregarClientesDoSheets() {
    try {
        const urlClientes = `https://docs.google.com/spreadsheets/d/${ID_PLANILHA}/gviz/tq?sheet=CLIENTES&tqx=out:json`;
        const response = await fetch(urlClientes);
        const text = await response.text();
        const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\);/)[1];
        const data = JSON.parse(jsonString);
        
        clientesCadastrados = [];
        
        // MAPEAMENTO: 0=CLIENTE(A), 1=CNPJ(B), 2=SENHA(C), 3=LOJA(D), 4=HIPER(E)
        data.table.rows.forEach(row => {
            const c = row.c;
            if(!c || !c[1]) return;
            
            const cnpjBruto = c[1].f ? String(c[1].f).trim() : (c[1].v !== null ? String(c[1].v).trim() : '');
            const senhaBruta = c[2].f ? String(c[2].f).trim() : (c[2].v !== null ? String(c[2].v).trim() : '');
            const clienteBruto = c[0].f ? String(c[0].f).trim() : (c[0].v !== null ? String(c[0].v).trim() : '');
            const lojaBruta = c[3].f ? String(c[3].f).trim() : (c[3].v !== null ? String(c[3].v).trim() : 'LOJISTA PARCEIRO');
            const hiperBruto = c[4].f ? String(c[4].f).trim() : (c[4].v !== null ? String(c[4].v).trim() : '');
            
            if (cnpjBruto === '') return;

            clientesCadastrados.push({
                cliente: clienteBruto,
                cnpj: cnpjBruto.replace(/\D/g, ""), // Guarda o CNPJ limpo apenas com números
                senha: senhaBruta,
                loja: lojaBruta,
                hiper: hiperBruto
            });
        });
        console.log("CLIENTES CARREGADOS NA MEMÓRIA:", clientesCadastrados.length);
    } catch (e) {
        console.error("Erro ao carregar banco de clientes. Verifique se a aba está publicada.", e);
    }
}

function abrirModalLogin() {
    document.getElementById("login-erro").style.display = "none";
    document.getElementById("modalLogin").style.display = "flex";
}

function fecharModalLogin(e) {
    if (e.target.id === "modalLogin") document.getElementById("modalLogin").style.display = "none";
}

function executarLogin() {
    const valorDigitadoLimpo = document.getElementById("loginCnpj").value.replace(/\D/g, "");
    const senhaDigitada = document.getElementById("loginSenha").value.trim();
    const divErro = document.getElementById("login-erro");
    
    const clienteEncontrado = clientesCadastrados.find(c => {
        // .padStart protege contra zeros que o Google Planilhas costuma engolir à esquerda
        const cpfCnpjPlanilhaLimpo = String(c.cnpj).replace(/\D/g, "").padStart(valorDigitadoLimpo.length, "0");
        const senhaPlanilhaLimpa = String(c.senha).trim();
        
        return cpfCnpjPlanilhaLimpo === valorDigitadoLimpo && senhaPlanilhaLimpa === senhaDigitada;
    });
    
    if (clienteEncontrado) {
        lojistaLogado = clienteEncontrado;
        localStorage.setItem("dnorte_session", JSON.stringify(clienteEncontrado));
        
        document.getElementById("modalLogin").style.display = "none";
        ajustarInterfaceModoLogado();
        filtrarProdutosFinal(); 
    } else {
        divErro.style.display = "block";
    }
}

function verificarSessaoSalva() {
    const sessaoSalva = localStorage.getItem("dnorte_session");
    if (sessaoSalva) {
        lojistaLogado = JSON.parse(sessaoSalva);
        ajustarInterfaceModoLogado();
    }
}

function ajustarInterfaceModoLogado() {
    if (lojistaLogado) {
        const divAviso = document.getElementById("aviso-cliente-logado");
        if(divAviso) divAviso.style.display = "block";
        
        const spanNome = document.getElementById("nome-loja-logada");
        if(spanNome) spanNome.innerText = lojistaLogado.loja;
        
        const divCarrinho = document.getElementById("carrinho-lateral");
        if(divCarrinho) divCarrinho.style.display = "block";
        
        const inpLoja = document.getElementById("inputLoja");
        if(inpLoja) inpLoja.value = lojistaLogado.loja;
        
        const inpNome = document.getElementById("inputNome");
        if(inpNome) inpNome.value = lojistaLogado.cliente || lojistaLogado.loja;
    }
}

function fazerLogout() {
    localStorage.removeItem("dnorte_session");
    lojistaLogado = null;
    
    const divAviso = document.getElementById("aviso-cliente-logado");
    if(divAviso) divAviso.style.display = "none";
    
    const divCarrinho = document.getElementById("carrinho-lateral");
    if(divCarrinho) divCarrinho.style.display = "none";
    
    const btnZap = document.getElementById("btn-whatsapp");
    if(btnZap) btnZap.style.display = "none";
    
    carrinho = [];
    renderCarrinho();
    filtrarProdutosFinal(); 
}

// =======================================================
// MÁSCARA AUTOMÁTICA PARA CPF E CNPJ
// =======================================================
function mascaraCpfCnpj(input) {
    let v = input.value.replace(/\D/g, ""); 
    if (v.length <= 11) { 
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else { 
        v = v.replace(/^(\d{2})(\d)/, "$1.$2");
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
        v = v.replace(/(\d{4})(\d)/, "$1-$2");
    }
    input.value = v;
}

// =======================================================
// 3. BUSCA AUTOMÁTICA DE PRODUTOS
// =======================================================
async function carregarProdutosDaPlanilha() {
    const divProdutos = document.getElementById("produtos");
    
    try {
        // Vai buscar à aba padrão (Produtos)
        const url = `https://docs.google.com/spreadsheets/d/${ID_PLANILHA}/gviz/tq?tqx=out:json`;
        const response = await fetch(url);
        const text = await response.text();
        const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\);/)[1];
        const data = JSON.parse(jsonString);
        
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
            if(divProdutos) divProdutos.innerHTML = "<p style='grid-column:1/-1;text-align:center;'>⚠️ Nenhum produto encontrado.</p>";
        }
    } catch (error) {
        console.error("Erro nos produtos:", error);
        if(divProdutos) divProdutos.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:red;'>❌ Erro ao carregar base de dados. Verifique a planilha.</p>";
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
        let labelDepto = document.createElement("div");
        labelDepto.innerHTML = "<strong style='color:#03264c; font-size:15px;'><i class='fas fa-building'></i> 1. Filtre por Departamento:</strong>";
        labelDepto.style.marginBottom = "8px";
        wrapper.insertBefore(labelDepto, wrapper.firstChild);

        deptoContainer = document.createElement("div");
        deptoContainer.id = "container-departamentos";
        deptoContainer.className = "botoes-principais";
        deptoContainer.style.marginBottom = "15px";
        deptoContainer.style.borderBottom = "2px solid #eee";
        deptoContainer.style.paddingBottom = "10px";
        wrapper.insertBefore(deptoContainer, labelDepto.nextSibling);
        
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
// 5. MÓDULO INTELIGENTE DE VITRINE E LOGIN
// =======================================================
function filtrarProdutosFinal() {
    const inputBusca = document.getElementById('inputBusca');
    const termo = inputBusca ? inputBusca.value.toLowerCase() : "";
    
    const listaFiltrada = produtos.filter(p => {
        const matchDepto = departamentoAtual === "TODOS" || p.departamento === departamentoAtual;
        const matchCat = categoriaAtual === "TODAS" || p.categoria === categoriaAtual;
        const matchBusca = termo === "" || 
                           p.nome.toLowerCase().includes(termo) || 
                           String(p.sku).includes(termo) || 
                           p.categoria.toLowerCase().includes(termo);
        
        return matchDepto && matchCat && matchBusca;
    });
    
    renderProdutos(listaFiltrada);
}

function filtrarProdutos() { filtrarProdutosFinal(); }

function renderProdutos(lista) {
    const div = document.getElementById("produtos");
    if (!div) return;

    if (lista.length === 0) {
        div.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #888;">Nenhum item localizado.</div>`;
        return;
    }

    const htmlBuffer = lista.map(p => {
        let blocoPrecoEAcao = "";
        
        if (lojistaLogado) {
            blocoPrecoEAcao = `
                <p class="preco-produto">R$ ${p.preco.toFixed(2)}</p>
                <div class="qtd-selector">
                    <button type="button" onclick="alterarQtd('${p.sku}', -1)">-</button>
                    <span id="qtd-${p.sku}">1</span>
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
            <div class="img-prod-wrapper" onclick="abrirModal('${p.sku}')">
                <img src="${p.imagem}" alt="${p.nome}" loading="lazy" onerror="this.src='favicon.png'; this.style.opacity='0.2'">
            </div>
            <h3 title="${p.nome}" onclick="abrirModal('${p.sku}')">${p.nome}</h3>
            <small class="sku-label">Cód: #${p.sku}</small>
            ${blocoPrecoEAcao}
        </div>`;
    }).join('');

    div.innerHTML = htmlBuffer;
}

function solicitarPrecoViaZap(sku, nomeProd) {
    const msg = `Olá! Vi o produto *${nomeProd}* (Cód: #${sku}) na sua Vitrine Virtual e gostaria de saber as tabelas de preço e condições de atacado para a minha loja.`;
    window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`, "_blank");
}

// =======================================================
// 6. GERENCIAMENTO DE PEDIDOS E MODAIS
// =======================================================
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
        btn.innerText = "Adicionado!";
        setTimeout(() => btn.innerText = "Adicionar ao Pedido", 1000);
    }
}

function ajustarQtdDiretoNoCarrinho(sku, mudanca) {
    const index = carrinho.findIndex(i => String(i.sku) === String(sku));
    if (index > -1) {
        carrinho[index].qtd += mudanca;
        if (carrinho[index].qtd < 1) carrinho.splice(index, 1);
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
        total += i.preco * i.qtd;
        totalItens += i.qtd;
        div.innerHTML += `
        <div class="item-carrinho-box">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <strong style="max-width:80%;">${i.nome}</strong>
                <span>x${i.qtd}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                <span style="color:#fb7815; font-weight:bold;">R$ ${(i.preco * i.qtd).toFixed(2)}</span>
                <div style="display:flex; gap:5px;">
                    <button onclick="ajustarQtdDiretoNoCarrinho('${i.sku}', -1)">-</button>
                    <button onclick="ajustarQtdDiretoNoCarrinho('${i.sku}', 1)">+</button>
                </div>
            </div>
        </div>`;
    });

    if(divTotal) divTotal.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
    
    if(btnMobile && lojistaLogado) {
        btnMobile.style.display = "block";
        btnMobile.innerHTML = `<i class="fas fa-shopping-basket"></i> Pedido (${totalItens})`;
    }
}

function abrirModal(sku) {
    const p = produtos.find(prod => String(prod.sku) === String(sku));
    if(!p) return;
    document.getElementById("modalImg").src = p.imagem;
    document.getElementById("modalNome").innerText = p.nome;
    
    const pPreco = document.getElementById("modalPreco");
    const pAcoes = document.getElementById("modalAcoes");
    
    if (lojistaLogado) {
        pPreco.innerText = `R$ ${p.preco.toFixed(2)}`;
        pPreco.style.color = "#fb7815";
        pAcoes.innerHTML = `<button class="btn-add" style="width:100%; padding:15px;" onclick="adicionarNoModal('${p.sku}')">ADICIONAR AO PEDIDO</button>`;
    } else {
        pPreco.innerHTML = `<i class="fas fa-lock"></i> Valores visíveis apenas para lojistas parceiros.`;
        pPreco.style.color = "#888";
        pAcoes.innerHTML = `<button class="btn-solicitar-preco" style="width:100%; padding:15px;" onclick="solicitarPrecoViaZap('${p.sku}', '${p.nome}')">Consultar via WhatsApp <i class="fab fa-whatsapp"></i></button>`;
    }
    
    document.getElementById("modalProduto").style.display = "flex";
}

function fecharModal(e) {
    if (e === true || e.target.id === "modalProduto") document.getElementById("modalProduto").style.display = "none";
}

function adicionarNoModal(sku) { adicionar(sku); fecharModal(true); }
function abrirModalMobile() { document.querySelector('.carrinho-area').scrollIntoView({ behavior: 'smooth' }); }

// =======================================================
// 7. FINALIZAÇÃO DO PEDIDO
// =======================================================
function finalizarPedido() {
    if (carrinho.length === 0) { alert("Carrinho vazio!"); return; }
    
    const nome = document.getElementById("inputNome").value.toUpperCase();
    const loja = document.getElementById("inputLoja").value.toUpperCase();
    const city = document.getElementById("inputCidade").value.toUpperCase();
    
    if(!nome || !loja || !city) { alert("Por favor, preencha todos os campos do cabeçalho do pedido!"); return; }

    let msg = `*NOVO PEDIDO DE COMPRA - DNORTE*\n`;
    msg += `=============================\n`;
    msg += `👤 *Lojista:* ${loja}\n`;
    msg += `🙋‍♂️ *Comprador:* ${nome}\n`;
    msg += `📍 *Cidade:* ${city}\n`;
    
    if (lojistaLogado) {
        msg += `🆔 *CNPJ/CPF:* ${lojistaLogado.cnpj}\n`;
        if(lojistaLogado.hiper) msg += `📊 *Cód. Hiper:* ${lojistaLogado.hiper}\n`;
    }
    
    msg += `=============================\n\n`;
    msg += `📦 *ITENS SOLICITADOS:*\n`;
    
    let totalZap = 0;
    carrinho.forEach(i => { 
        msg += `▪️ ${i.qtd}x ${i.nome} (Cód: #${i.sku})\n`; 
        totalZap += i.preco * i.qtd; 
    });
    
    msg += `\n-----------------------------\n`;
    msg += `💰 *TOTAL DO PEDIDO: R$ ${totalZap.toFixed(2)}*`;

    window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`, "_blank");
}