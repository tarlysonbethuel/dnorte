/* =======================================================
   CATÁLOGO AUTOMÁTICO DNORTE 2.0 - SISTEMA MISTO
   VITRINE PÚBLICA + PREÇO DINÂMICO INDIVIDUAL (VAREJO/ATACADO)
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
        alert("Você já está logado como: " + (lojistaLogado.loja || lojistaLogado.usuario));
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
// 2. CONTROLE DE LOGIN (USUÁRIO E SENHA)
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
    } catch (error) {
        console.error("Erro ao carregar clientes:", error);
    }
}

function executarLogin() {
    const inputUsuario = document.getElementById("loginUsuario").value.trim().toUpperCase();
    const inputSenha = document.getElementById("loginSenha").value.trim();
    const divErro = document.getElementById("login-erro");

    if (!inputUsuario || !inputSenha) {
        divErro.innerText = "❌ Preencha o Usuário e a Senha.";
        divErro.style.display = "block";
        return;
    }

    const clienteEncontrado = clientesCadastrados.find(c => c.usuario === inputUsuario && c.senha === inputSenha);

    if (clienteEncontrado) {
        lojistaLogado = clienteEncontrado;
        divErro.style.display = "none";
        
        localStorage.setItem("dnorte_lojista", JSON.stringify(lojistaLogado));
        
        alert(`Bem-vindo, ${clienteEncontrado.loja}! Preços liberados com sucesso.`);
        location.reload(); 
    } else {
        divErro.innerText = "❌ Usuário ou Senha incorretos. Tente novamente.";
        divErro.style.display = "block";
    }
}

// =======================================================
// 3. BUSCA AUTOMÁTICA DE PRODUTOS (COM ATACADO DINÂMICO)
// =======================================================
async function carregarProdutosDaPlanilha() {
    const divProdutos = document.getElementById("produtos");
    try {
        const nomeDaAba = "Produtos"; 
        const url = `https://docs.google.com/spreadsheets/d/${ID_PLANILHA}/gviz/tq?sheet=${nomeDaAba}&tqx=out:json`;
        const response = await fetch(url);
        const text = await response.text();
        
        if (!text.includes("google.visualization.Query.setResponse")) {
            console.error("Erro do Google:", text);
            if(divProdutos) divProdutos.innerHTML = `<p style='text-align:center;color:red; font-weight:bold; font-size: 18px; padding: 40px;'>❌ O Google bloqueou a leitura.</p>`;
            return; 
        }

        const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\);/)[1];
        const data = JSON.parse(jsonString);
        
        // MAPEAMENTO DAS COLUNAS: 
        // 7(H)=Varejo | 8(I)=Atacado | 9(J)=Qtd Mínima
        let idxCodigo = 0, idxProduto = 1, idxCategoria = 2, idxDepartamento = 3, idxFoto = 5, idxSituacao = 6, idxPrecoVarejo = 7, idxPrecoAtacado = 8, idxQtdMinima = 9; 
        
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
            
            // PREÇO VAREJO
            let precoVarejo = 0;
            if (c[idxPrecoVarejo] && c[idxPrecoVarejo].v !== null) {
                precoVarejo = parseFloat(String(c[idxPrecoVarejo].v).replace(',', '.'));
                if (isNaN(precoVarejo)) precoVarejo = 0;
            }

            // PREÇO ATACADO
            let precoAtacado = precoVarejo; 
            if (c[idxPrecoAtacado] && c[idxPrecoAtacado].v !== null) {
                let valAtacado = parseFloat(String(c[idxPrecoAtacado].v).replace(',', '.'));
                if (!isNaN(valAtacado) && valAtacado > 0) precoAtacado = valAtacado;
            }

            // QUANTIDADE MÍNIMA (Coluna J)
            let qtdMinima = 1;
            if (c[idxQtdMinima] && c[idxQtdMinima].v !== null && c[idxQtdMinima].v !== "") {
                qtdMinima = parseInt(c[idxQtdMinima].v);
                if (isNaN(qtdMinima) || qtdMinima < 1) qtdMinima = 1;
            }
            
            // Se o produto tem desconto de atacado, mas a coluna J está vazia, o sistema protege e coloca 5 como padrão!
            if (precoAtacado < precoVarejo && qtdMinima === 1) {
                qtdMinima = 5;
            }
            
            let imagem = "favicon.png";
            if (c[idxFoto] && c[idxFoto].v !== null && String(c[idxFoto].v).trim() !== "") {
                imagem = String(c[idxFoto].v).trim(); 
            }
            
            produtos.push({ sku, nome, departamento, categoria, precoVarejo, precoAtacado, qtdMinima, imagem });
        });
        
        if (produtos.length > 0) {
            construirFiltros();
            filtrarProdutosFinal();
        } else {
            if(divProdutos) divProdutos.innerHTML = "<p style='text-align:center;'>⚠️ Nenhum produto encontrado nesta aba.</p>";
        }
    } catch (error) {
        console.error("Erro:", error);
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
        const matchDepto = departamentoAtual === "TODOS" || p.departamento === departamentoAtual;
        const matchCat = categoriaAtual === "TODAS" || p.categoria === categoriaAtual;
        const matchBusca = termo === "" || p.nome.toLowerCase().includes(termo) || String(p.sku).includes(termo) || p.categoria.toLowerCase().includes(termo);
        return matchDepto && matchCat && matchBusca;
    });
    renderizarProdutos(listaFiltrada);
}

// =======================================================
// 5. RENDERIZAÇÃO DE PRODUTOS (COM ETIQUETA DE DESCONTO)
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
        let seloAtacadoTopo = ""; // ETIQUETA VISUAL NO TOPO DO PRODUTO
        
        if (lojistaLogado) {
            // Se tiver desconto de atacado, criamos a etiqueta bonita que fica logo acima da foto!
            if (p.precoAtacado < p.precoVarejo && p.qtdMinima > 1) {
                seloAtacadoTopo = `
                <div style="background-color: #e6f4ea; border: 1px solid #28a745; color: #28a745; text-align: center; padding: 6px; font-size: 11px; font-weight: 800; border-radius: 8px; margin-bottom: 12px; width: 100%;">
                    🔥 ATACADO: R$ ${p.precoAtacado.toFixed(2).replace('.',',')} (${p.qtdMinima}+ un)
                </div>`;
            }

            blocoPrecoEAcao = `
                <p class="preco-produto">R$ ${p.precoVarejo.toFixed(2).replace('.', ',')}</p>
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
            ${seloAtacadoTopo}
            <div class="img-prod-wrapper" onclick="abrirModal('${p.sku}')">
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
// 6. MODAL DO PRODUTO E GESTÃO DO CARRINHO
// =======================================================
function abrirModal(sku) {
    const p = produtos.find(prod => String(prod.sku) === String(sku));
    if(!p) return;
    document.getElementById("modalImg").src = p.imagem;
    document.getElementById("modalNome").innerText = p.nome;
    
    const pPreco = document.getElementById("modalPreco");
    const pAcoes = document.getElementById("modalAcoes");
    
    if (lojistaLogado) {
        let textoPreco = `Varejo: R$ ${p.precoVarejo.toFixed(2).replace('.', ',')}`;
        if(p.precoAtacado < p.precoVarejo) {
            textoPreco += `<br><span style="color:#28a745; font-size:16px;">🔥 Atacado (${p.qtdMinima}+ un): R$ ${p.precoAtacado.toFixed(2).replace('.', ',')}</span>`;
        }

        pPreco.innerHTML = textoPreco;
        pPreco.style.color = "#fb7815";
        pAcoes.innerHTML = `<button class="btn-add" style="width:100%; padding:15px;" onclick="adicionarNoModal('${p.sku}')">ADICIONAR AO PEDIDO</button>`;
    } else {
        pPreco.innerHTML = `<i class="fas fa-lock"></i> Valores visíveis apenas para lojistas parceiros.`;
        pPreco.style.color = "#888";
        pAcoes.innerHTML = `<button class="btn-solicitar-preco" style="width:100%; padding:15px;" onclick="solicitarPrecoViaZap('${p.sku}', '${p.nome}')">Consultar via WhatsApp <i class="fab fa-whatsapp"></i></button>`;
    }
    
    document.getElementById("modalProduto").style.display = "flex";
}

function fecharModal(force = false, event = null) {
    if (force || (event && event.target.id === "modalProduto")) {
        document.getElementById("modalProduto").style.display = "none";
    }
}

function adicionarNoModal(sku) { adicionar(sku); fecharModal(true); }

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
        // MÁGICA: DECIDE O PREÇO BASEADO NA QUANTIDADE MÍNIMA INDIVIDUAL DO PRODUTO!
        const precoAtivo = i.qtd >= i.qtdMinima ? i.precoAtacado : i.precoVarejo;
        const subtotal = precoAtivo * i.qtd;
        
        total += subtotal;
        totalItens += i.qtd;

        let badgePromocao = i.qtd >= i.qtdMinima && i.precoAtacado < i.precoVarejo 
                            ? `<span style="color:#28a745; font-size:10px; margin-left:5px;">(Atacado Aplicado)</span>` 
                            : '';

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
// 7. FINALIZAÇÃO DO PEDIDO (WHATSAPP)
// =======================================================
function finalizarPedido() {
    if (carrinho.length === 0) { alert("Carrinho vazio!"); return; }
    
    const nome = document.getElementById("inputNome").value.toUpperCase();
    const loja = document.getElementById("inputLoja").value.toUpperCase();
    const city = document.getElementById("inputCidade").value.toUpperCase();
    
    if(!nome || !loja || !city) { alert("Por favor, preencha todos os campos do cabeçalho do pedido!"); return; }

    let msg = `*NOVO PEDIDO DE COMPRA - DNORTE*\n`;
    msg += `=============================\n`;
    msg += `*Lojista:* ${loja}\n`;
    msg += `*Comprador:* ${nome}\n`;
    msg += `*Cidade:* ${city}\n`;
    
    if (lojistaLogado) {
        msg += `*Usuário:* ${lojistaLogado.usuario}\n`;
    }
    
    msg += `=============================\n\n`;
    msg += `*ITENS SOLICITADOS:*\n`;
    
    let totalZap = 0;
    carrinho.forEach(i => {
        // Usa o preço ativo (atacado ou varejo) para o WhatsApp
        const precoAtivo = i.qtd >= i.qtdMinima ? i.precoAtacado : i.precoVarejo;
        const subtotal = precoAtivo * i.qtd;
        const infoAtacado = i.qtd >= i.qtdMinima && i.precoAtacado < i.precoVarejo ? " *(Preço Atacado)*" : "";

        msg += `- ${i.qtd}x [${i.sku}] ${i.nome} - R$ ${subtotal.toFixed(2)}${infoAtacado}\n`;
        totalZap += subtotal;
    });
    
    msg += `\n*TOTAL ESTIMADO:* R$ ${totalZap.toFixed(2)}\n`;
    
    const url = `https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}