# DNorte Distribuidora — Catálogo V3.5

A V3.5 mantém a home institucional em `/`, o catálogo em `/catalogo` e passa a ter uma página dedicada ao pedido em `/carrinho`.

## Novidades da V3.5

- Nova página **Meu Pedido / Carrinho** para desktop e mobile.
- O botão flutuante de Pedido no catálogo agora abre `/carrinho`.
- O catálogo deixa de exibir o carrinho lateral/modal; a grade de produtos ganha mais espaço.
- Carrinho persistente por lojista no mesmo dispositivo por até 7 dias.
- O navegador salva apenas SKU e quantidade; preços e condições são relidos da API ao abrir o carrinho.
- Página do carrinho permite alterar quantidades, remover itens, limpar o pedido, continuar comprando e enviar pelo WhatsApp.
- Imagens dos produtos refinadas no mobile para priorizar a visualização completa do item (`object-fit: contain`).
- Hero da home atualizado para: **“Tudo o que seu negócio precisa, com atendimento próximo e mais praticidade na reposição.”**
- Removido **“ATACADO • VARIEDADES • JARU/RO”** do hero.
- Ícones das seis categorias da home alternam laranja e azul para dar mais ritmo visual.

## Sessão do lojista

- Sem marcar **“Manter acesso neste dispositivo”**: sessão normal, com token de até 12 horas.
- Marcando **“Manter acesso neste dispositivo”**: sessão persistente por até 7 dias.
- O carrinho local tem validade de até 7 dias e só é restaurado para a conta correspondente.
- Ao fazer logout explicitamente, o carrinho daquela conta é removido do dispositivo.

## Variáveis de ambiente

- `DNORTE_SHEET_ID`
- `SESSION_SECRET`

Configure em Development, Preview e Production na Vercel.

## Teste local

```powershell
vercel.cmd dev
```

Abra:

- `http://localhost:3000/`
- `http://localhost:3000/catalogo`
- `http://localhost:3000/carrinho`

## Testes recomendados

1. Conferir o hero e as cores alternadas dos ícones na home.
2. Abrir o catálogo no mobile e validar a visualização completa das imagens.
3. Fazer login e adicionar produtos ao pedido.
4. Abrir `/carrinho`, alterar quantidades e remover itens.
5. Voltar ao catálogo, adicionar mais produtos e retornar ao carrinho.
6. Recarregar e reabrir o navegador com “Manter acesso” marcado para validar a persistência.
7. Enviar o pedido pelo WhatsApp.
8. Fazer logout e confirmar que o carrinho local daquela conta é apagado.
