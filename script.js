/* CATÁLOGO DIGITAL - DNORTE DISTRIBUIDORA
   Arquivo: script.js (Versão Otimizada - Ultra Rápida)
*/

// --- 1. LISTA DE PRODUTOS ---
// 👇 COLE AQUI A LISTA DO SEU ARQUIVO DE TEXTO (AQUELA QUE GERAMOS COM OS CÓDIGOS REAIS)
const produtos = [
  {
    "sku": "3541",
    "nome": "ABRAÇADEIRA DE METAL 1/2 C/ BORBOLETA PACOTES C/ 100 PÇ 3151",
    "preco": 83,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b849e03f-9734-4728-b650-ec4d25d7ee6d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3540",
    "nome": "ABRAÇADEIRA DE METAL 3/4 - PACOTES COM 100 PEÇAS - FBG- 3150",
    "preco": 92,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/00919c82-fcc2-4357-88c2-ccd5db81c93a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3542",
    "nome": "ABRAÇADEIRA DE METAL 3/4 C/ BORBOLETA PACOTES C/ 100 PÇ 3153",
    "preco": 112.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a7852f4d-a679-4450-bda0-525bb05f23a6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3539",
    "nome": "ABRAÇADEIRA DE METAL 5/8 -PACOTES COM 100 PEÇAS - FBG - 3149",
    "preco": 83,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f1593d3a-e2ba-448c-9633-debb3290df3a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3538",
    "nome": "ABRAÇADEIRA DE METAL1/2 - PACOTES COM 100 PEÇAS - FBG- 3148",
    "preco": 65,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/97ec65de-7150-4d1e-8369-f8dc4113d3f8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3358",
    "nome": "ADAPTADOR BLUETOOTH P2",
    "preco": 8.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/74c78886-17d8-48d6-a1d1-d08298b120a6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3377",
    "nome": "ADAPTADOR BLUETOOTH USB BT118 DONGLE",
    "preco": 8.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c68d433c-5b8f-4a50-afce-dc5f150783eb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3652",
    "nome": "ADAPTADOR PLUG - TOMADA - BOB ESPONJA - MP - PACOTE COM 25UN",
    "preco": 85,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ea2d3046-47bb-426c-8868-08047243124c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3653",
    "nome": "ADAPTADOR PLUG - TOMADA - BOB ESPONJA - PACOTE COM 25UN",
    "preco": 38.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0a0efc27-d9df-4872-8cf5-3197699cd153/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3660",
    "nome": "ADAPTADOR TOMADA E PLUG UNIVERSAL",
    "preco": 13.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7133af20-c6d5-4073-8151-9d97d792d441/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3658",
    "nome": "ADAPTADOR TOMADA T - PACOTE COM 25 UN",
    "preco": 85,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b425a911-8c57-41fa-ae6e-83f1c289d18e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3645",
    "nome": "ADAPTADOR TOMADA T BANDEIRA - PACOTE COM 25 UN",
    "preco": 38.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/159ab73c-f837-4cd4-af74-8c6f2f19185e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3646",
    "nome": "ADAPTADOR TOMADA T CUBO - PACOTE COM 10 UN",
    "preco": 30.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3379c336-caf8-4faf-9c33-3174e38e4ee4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3656",
    "nome": "ADAPTADOR TOMADA T RETO",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c44e063e-0da6-499a-98a9-493e77b30020/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3659",
    "nome": "ADAPTADOR TOMADA UNIVERSAL",
    "preco": 4.25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4aefbc4b-361f-4ed5-b7f5-b812da5f5981/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3382",
    "nome": "ADAPTADOR WIFI 802.IN 1200MBPS",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7430b257-a787-4ad6-9a08-8daba0fee5ca/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3548",
    "nome": "AFIADOR DE FACAS 20CM - ZUN0217",
    "preco": 8.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4818b905-da88-4bbf-b79d-d4ca0ecf5a74/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3551",
    "nome": "AFIADOR DE FACAS COM CABO - ZU1761",
    "preco": 13.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/27252fae-a6c4-4be9-bdb8-06e383eac50b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3679",
    "nome": "ANIMAIS DO MUNDO - BOX COM 4 ANIMAIS",
    "preco": 10.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f6a27a7f-e2a8-4cf4-9e19-1e388f631a5c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3122",
    "nome": "ANTENA COELHO - FBG-120",
    "preco": 8.2,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/718008e2-7904-4fee-a8d0-5469db2a875f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3123",
    "nome": "ANTENA DIGITAL - FBG-4760",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/405e1e74-c8ad-4c04-86c8-cde192df12b9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3121",
    "nome": "ANTENA VARETA - FBG-860",
    "preco": 6.2,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8afa6ab2-0b36-4420-9957-5ed34fbc8313/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3602",
    "nome": "APARADOR DE CABELOS PROFISSIONAL H MASTON - LFJ06",
    "preco": 67.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e7984d9c-95be-41c4-ae98-a6a9b76addf5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3487",
    "nome": "APARELHO DE BARBEAR INOX RETRO",
    "preco": 54,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fc873287-3f16-4d7d-a674-c1a420efaa59/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3412",
    "nome": "BALANÇA DE OUSO DOMESTICO 10KG - SF-400",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3843c60e-e93c-4693-8f82-138de2d08a85/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3484",
    "nome": "BALANÇA DIGITAL DE PRECISÃO 300G - ON-BL706",
    "preco": 24.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c1cfc17b-4abb-4f25-8a81-31a2ace950c0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3663",
    "nome": "BARBEADOR DESCARTAVEL 3 LAMINAS - CT COM 24 UN - AL-11014",
    "preco": 30,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9e0b94b2-b56c-40aa-a31d-e66582277ac8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3664",
    "nome": "BARBERADOR DESCARTAVEL 2 LAMINAS - CT COM 24 UN - AL-11014",
    "preco": 24,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ed45ce50-765a-4492-8c96-e8c2f481bb9a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3246",
    "nome": "BATERIA 1620 FLEX - FX-CR1620-3V",
    "preco": 16,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d5693ed3-fa15-4391-9f64-e15beeffa07b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3727",
    "nome": "BATERIA 2016 - MAXELL - CR2016",
    "preco": 18,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8a985254-81a0-4a7b-a199-c28865df4814/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3726",
    "nome": "BATERIA 2016 - MAXIMIDIA - CR2016",
    "preco": 15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/26309ada-3243-4596-8527-ef5085c8f78a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3386",
    "nome": "BATERIA 2032 ALFACEL LITHIUM 3V - 20 CARTELA COM 2",
    "preco": 68.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5230f002-515f-4f6f-a44d-5793b3c89ab4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3044",
    "nome": "BATERIA 2032 MAXMIDIA - MAX - CR2032",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/924b9a1c-bedb-442b-b7d8-03b667c791aa/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3231",
    "nome": "BATERIA 23A 12V - MAXMIDIA - MAX-23A",
    "preco": 16.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c380ec32-c6d4-4a00-b789-48725f448a42/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3058",
    "nome": "BATERIA 27A - MAXMIDIA - MAX-27A",
    "preco": 16.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6b489c82-37ea-4ff1-aadf-aacb968a5062/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3711",
    "nome": "BATERIA 364 -MAXELL - CARTELA COM 20 UN",
    "preco": 50,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d63180d9-8ee5-47d5-93ce-6a07acd3d3e3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3724",
    "nome": "BATERIA 364 ENERGIXER - CARTELA COM 5 UN",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/76197e87-e4ce-4b4c-871b-0d695515dd1f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3079",
    "nome": "BATERIA 364/363 - ENERGIZER - CARTELA C/ 20 UN",
    "preco": 60,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3939ab5e-9b5a-4a2f-9dee-38c74942c112/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3082",
    "nome": "BATERIA 370/371 - ENERGIZER - COM 10 UN",
    "preco": 45,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/27095169-f31b-4051-96fc-9a5038c6e04a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3080",
    "nome": "BATERIA 377/376 ENERGIZER COM 20 UN",
    "preco": 60,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4f3359b2-d3a3-44a9-98dd-4172972f7832/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3140",
    "nome": "BATERIA 379 - ENERGIZER - COM 5 UN",
    "preco": 67,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/53737f8f-8eba-48f3-b9a0-1cfb7c19626b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3081",
    "nome": "BATERIA 395/399 - ENERGIZER - COM 10 UN",
    "preco": 67,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8bd0a6ec-47ae-4edb-9643-101b8a2e70fa/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3350",
    "nome": "BATERIA ALFACELL 2032 - CARTELA COM 5 UN",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0c18c176-2208-4e45-92cb-6957bfa0fa45/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3553",
    "nome": "BATERIA ALFACELL ALCALINA 23A 12V - CARTELA C/ 5UN - 23AC5",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6273605f-ebef-46c9-9774-3e8f9aa7ff12/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3554",
    "nome": "BATERIA ALFACELL ALCALINA 27A 12V - CARTELA C/ 5 UN - 27AC5",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/217c053f-c0a2-4fea-b230-edcd57a72c69/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3062",
    "nome": "BATERIA ALFACELL COMUM 9V - CAIXA",
    "preco": 38,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3647e230-3795-44ef-8b44-69bd9cba787f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3555",
    "nome": "BATERIA ALFACELL COMUM 9V - CARTELA - 6F221B",
    "preco": 48,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f3f4eca8-6a4a-4762-aabe-51f8a8a6b38b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3725",
    "nome": "BATERIA EXTRA POWER A13 CART COM 6 UNIDADES",
    "preco": 19.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0ab398c7-a3aa-45f4-a7ea-fad38deccca2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3493",
    "nome": "BATERIA EXTRA POWER A312 CART COM 6 UNIDADES",
    "preco": 19.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fd7c7f4f-c6d4-466d-a46e-57cf78eef277/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3142",
    "nome": "BATERIA G10 / LR1130",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8b7ba084-ecee-48a0-b59a-6c001b50d631/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3141",
    "nome": "BATERIA G8 /LR1220 - MAXMIDA - CARTELA C/ 10 UN - MAX-AG8",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a38743a1-87c0-4850-86a1-ba990acb9668/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3245",
    "nome": "BATERIA GIMEX 2032",
    "preco": 16,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5a1a2d90-47b9-4717-b287-68d56e9f6b15/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3495",
    "nome": "BATERIA GIMEX AG10 CART. C/10",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ed4c3a34-c25f-4779-addc-da1c2508a98e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3061",
    "nome": "BATERIA LR44 / G13 - MAXMIDIA - MAX-AG13",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a3144315-74c7-4d5c-9f74-9c2438fdc84e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3491",
    "nome": "BATERIA MAXELL CR 1220 CART. COM 5 UN",
    "preco": 30,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0809b150-d82c-4f35-8859-a115784f5a37/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3494",
    "nome": "BATERIA MAXMIDIA AG3 COM 10 UN",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a983796d-a8a2-4e18-88f6-8f633c509276/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3762",
    "nome": "BATERIA MURATA 364 SR621SW",
    "preco": 2.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/373b2eab-8b05-4879-927a-46f136aefba6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3760",
    "nome": "BATERIA MURATA 371 SR920SW",
    "preco": 5.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9cde6cc8-aabf-4bf5-9c00-b87efc87a8ca/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3761",
    "nome": "BATERIA MURATA 377 SR626SW",
    "preco": 2.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e8fb01eb-bd67-41d7-941a-da62a3b02334/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3759",
    "nome": "BATERIA MURATA 3V 2025 - CARTALA COM 5 UN",
    "preco": 3,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/afa4235b-93ee-4781-a61e-af04eb31ac44/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3060",
    "nome": "BATERIA P/ LANTERNA 2.500MAH",
    "preco": 7.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9e5f49a0-fe5b-4049-8cef-03b4af94ca14/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3326",
    "nome": "BATERIA RECARREGÁVEL 12000MAH 4.2V - GRANDE",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fa4c8bd8-ed24-4e4a-bc8a-cc8834dee853/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3324",
    "nome": "BATERIA RECARREGÁVEL 3000MAH 3.7V - PEQUENA",
    "preco": 7.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/33147100-17f9-400a-919f-b8be4902bd5f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3325",
    "nome": "BATERIA RECARREGÁVEL 9800MAH 4.2V",
    "preco": 7.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/08193553-1c16-4e27-b9ae-cc972e17f2b0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3657",
    "nome": "BOCAL DE LAMPADA COM RABICHO - UN",
    "preco": 2.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/18d1ee11-5b92-4e6e-be08-223d0d1f847c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3730",
    "nome": "BOLA DE FUTEBOL - IM43020",
    "preco": 27.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cb114f7b-cbe7-4ee3-afcd-52f9996c9548/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3747",
    "nome": "BOLA DE FUTEBOL - TAM. 5 - YS - 37010",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c140f09d-ccc9-4b38-a5b5-6ba563528e99/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3669",
    "nome": "BOLA DE FUTEBOL - TAM. OFICIAL 05 - QKDB05 - FOGUETE - AZUL",
    "preco": 18.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9484b638-0168-4705-bdb6-f01fae18557a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3504",
    "nome": "BOLA DE FUTEBOL DIAMOND - QBS05",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c9acf914-6003-4006-951b-34bdeafce949/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3503",
    "nome": "BOLA DE FUTEBOL KIDS - QKD02",
    "preco": 13.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b4cf76e8-c6dd-4e63-86dc-9e726e3098ff/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3670",
    "nome": "BOLA DE FUTEBOL KIDS - QKDB02 - FOGUETE - BRANCO",
    "preco": 13.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d18d02d5-8efb-4128-9cc5-cf637f7c26fd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3749",
    "nome": "BOLA DE FUTEBOL STAR - TAM. 5 - YS - 37203",
    "preco": 19.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4de0cb87-78a7-49fd-b790-63f3ab20c580/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3505",
    "nome": "BOLA DE VOLEI - QDV05-ESP",
    "preco": 24.25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f2734add-b07e-4722-bdfc-0867f7e96ad0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3746",
    "nome": "BOLA DE VOLEIBOL - YS - 37009",
    "preco": 26,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cac5b073-2aea-4cba-866e-0b65c8f4b29f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3533",
    "nome": "BOLA FUTEBOL - QBS05-ESCUDO",
    "preco": 25.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1c6bd7f5-2253-484e-ae74-4610da65ccb8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3535",
    "nome": "BOLA FUTEBOL - QBS05-HACKER",
    "preco": 25.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e04bdc71-1b83-470f-817a-f83430218b96/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3534",
    "nome": "BOLA FUTEBOL KIDS -QKD02-EST",
    "preco": 13.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/58cbedd7-bd0d-41be-bd9f-e9374cad0a5a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3550",
    "nome": "BOLA PINGO DE LEITE N 8 - XC980",
    "preco": 58.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/897fc09e-fe45-47de-9954-e611d270325a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3532",
    "nome": "BOLA VÔLEI - QDV05-AZBVE",
    "preco": 25.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3020af66-4882-4436-b21e-e81aa7fb1688/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3515",
    "nome": "BOLSA FEMININA PEQUENA COURO SINTÉTICO",
    "preco": 19.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fce36dbf-18e8-4224-ac08-721e86e06d31/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3483",
    "nome": "BOLSA MALA DE VIAGEM - TAMANHO - 48*29*20 CM - KMAQ-717",
    "preco": 39.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/72621fca-4010-406e-9479-5d5035b187ec/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3530",
    "nome": "BOMBA DE AR - FBG - 3040",
    "preco": 20.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/57d018bd-f9e0-4d8c-b9bf-f7319f77a3f2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3728",
    "nome": "BOMBA DE AR MANUAL KAPBOM - GRANDE - KA-1115",
    "preco": 47.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8facd6d0-b7af-4c08-9aa1-e34627827645/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3378",
    "nome": "BOMBA ELÉTRICA DE ÁGUA KAPBOM - KA-C10",
    "preco": 23.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/13ec4236-1d57-438a-b74d-b551cac007dc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3042",
    "nome": "CABO 3RCA-3RCA (DVD) 1,8M - FBG-202103",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2173f7e9-8e6b-4ab8-9867-88051b974863/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3136",
    "nome": "CABO 3RCA / 3RCA (DVD) LIVSTAR CNN-S11",
    "preco": 4.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/73356b12-6944-43ea-ad7d-297281a43fc6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3137",
    "nome": "CABO 3RCA / 3RCA REFORÇADO AZUL 2M FBG - 915",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/dfe99337-fa1f-4aab-a1dc-1867f3e3d03e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3314",
    "nome": "CABO ADAPTADOR AV COMPONENTE 5 RCA - P1 / P2",
    "preco": 15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/756ca0e9-c1bb-4c9d-b054-328cd5c43add/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3320",
    "nome": "CABO DE FORÇA - ENERGIA - TRIPOLAR - FBG - 988",
    "preco": 8.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/70abfa28-f2d8-40b7-a610-5917de161215/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3321",
    "nome": "CABO FORÇA - ENERGIA - NOTEBOOK - FBG - 991",
    "preco": 9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5cc1fc9c-a1cd-454b-8e39-8a18e8bca9ae/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3315",
    "nome": "CABO FORÇA - ENERGIA - RADIO - FBG-1.8MTR",
    "preco": 5.1,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1d4d3799-713a-47cd-b1b4-70d6c2f00f92/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3379",
    "nome": "CABO HDMI 1 METRO KAPBOM",
    "preco": 10.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f6ace902-123d-47d4-bb1a-5457ed515701/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3138",
    "nome": "CABO HDMI 2M FBG - 990",
    "preco": 13.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3776046f-4c6a-40e4-933c-611ca76f2f29/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3612",
    "nome": "CABO HDMI ACHATADO 1.5M - GRASEP - F-D-4K02 1.5M",
    "preco": 9.4,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ca3bbb10-34b8-4498-8d77-ee588a698007/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3352",
    "nome": "CABO HDMI CORDÃO 1.8M FBG - 979",
    "preco": 13.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/51f53e72-9f9f-410c-a09a-4f20bd5e6afd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3365",
    "nome": "CABO HDMI TOMATE 2M 4K - MHD - 4022",
    "preco": 15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5d364840-0517-4d7a-94b2-fd0211ab11c8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3359",
    "nome": "CABO OTG V8",
    "preco": 5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/39fc9f92-6005-49ae-8f2f-0cdf63e7a026/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3353",
    "nome": "CABO OTG TIPO-C KAPBOM",
    "preco": 5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c3522183-3976-47c0-a817-e14dc76352cc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3133",
    "nome": "CABO P2 / P10 1.8M - MAXMIDIA - MAX-30857-9",
    "preco": 7.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a132cee8-ec3f-40fd-a4c1-aa599c3cf8e7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3134",
    "nome": "CABO P2 / P2 FBG - 2338",
    "preco": 3.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7430eba6-61d5-474c-9758-97a4217ec292/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3135",
    "nome": "CABO P2+3RCA FBG - 315",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a4966acd-aa74-4ab9-aed8-ff4f43c61929/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3573",
    "nome": "CABO PARA TRANSFERENCIA DE CARGA DE BATERIA 1000AM - 3100",
    "preco": 41.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f51fae21-4a53-4e0c-abd2-6413e1346180/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3261",
    "nome": "CABO TIPOC / IPHONE 3A H-MASTON - H98-5",
    "preco": 14,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a2e27e82-bf4a-4da9-90aa-6bf4aeaa1fbd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3260",
    "nome": "CABO TIPOC / TIPOC H-MASTON - XT22",
    "preco": 14,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ac28697c-c333-4891-b9c9-6a38dc23b1bc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3590",
    "nome": "CABO USB IPHONE 3.1A - IT-BLUE - LE-849P",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9356ec57-747d-46b0-9527-3f190ae97baf/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3597",
    "nome": "CABO USB IPHONE 4.8A - H MASTON - H135-2",
    "preco": 11,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ecf8d3b5-10cd-4090-afbe-4d9ea294b18f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3351",
    "nome": "CABO USB IPHONE 4.8A - HMASTON - HB01-2",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/58e62b97-d836-4bba-bfd8-cad58656916b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3373",
    "nome": "CABO USB IPHONE HMASTON - H142-2",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ec3ce014-b49e-4f63-abea-5253bb33eb09/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3105",
    "nome": "CABO USB LIGHTNIN HMASTON 2 M - 4.8A - H136-2",
    "preco": 16,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/39f09aee-72f8-4260-a0bb-375d617221a8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3102",
    "nome": "CABO USB LIGHTNIN HMASTON 4.8A - 1000MM - H102-2",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6b883c95-87c9-421f-bacf-967aefbf2323/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3251",
    "nome": "CABO USB TIPO 4.8A HMASTON - HB01-3",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f203bcac-5170-43ff-b2cc-02f3ae9fa971/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3589",
    "nome": "CABO USB TIPO C 3.1A - IT-BLUE - LE-849C",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9c330d9a-ce73-4a00-acdc-1bf03d1c1495/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3598",
    "nome": "CABO USB TIPO C 4.8A - H MASTON - H135-3",
    "preco": 5.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5ec3c95d-5725-42f6-8fb3-e813e5408a16/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3374",
    "nome": "CABO USB TIPO C HMASTON - H142-3",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/729ae32a-1d2e-42f3-ba14-74dc1e8fdda2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3106",
    "nome": "CABO USB TIPO C HMASTON 2M - 4.8A - H136-3",
    "preco": 16,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7c8f7e19-e3f7-4676-abe5-2dd2600b651c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3103",
    "nome": "CABO USB TIPO C HMASTON 4.8A - 1000MM - H102-3",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6f987db3-40ad-427e-b186-028a676bcd6a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3259",
    "nome": "CABO USB TIPOC / IPHONE 6A HMASTON - SJX04",
    "preco": 14,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/87cec146-ce78-48a9-91c1-e09c50b3fe69/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3252",
    "nome": "CABO USB V8 4.8A HMASTON - HB01-1",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7f374856-5f56-462e-9bb5-a86cef378316/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3372",
    "nome": "CABO USB V8 HMASTON - H142-1",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9d896afa-4056-4efd-b657-ccaae1c86317/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3104",
    "nome": "CABO USB V8 HMASTON 2 M - 4.8A - H136-1",
    "preco": 16,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2157243d-484e-4a07-84f8-f6e552ef9d2a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3101",
    "nome": "CABO USB V8 HMASTON 4.8A - 1000MM - H102-1",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/20cbf16a-9702-4e8f-a2c7-c52a11f5a977/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3238",
    "nome": "CALCULADORA 12 DIG FBG - 837B-12",
    "preco": 28,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/50121467-0f47-497d-8e1f-4d0e9897b6a4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3401",
    "nome": "CALCULADORA 12 DIG FBG - 837C-12",
    "preco": 21.4,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9c105c8c-675c-451f-a41f-c7ecea20bba8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3546",
    "nome": "CALCULADORA 12 DIG FBG - FBG - 9136D",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cee071c0-d3a3-4d15-85b8-346c2bee5c9b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3237",
    "nome": "CALCULADORA CIENTÍFICA - FBG-82MS-A",
    "preco": 19.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2c6797cd-849c-4ddd-8f82-9649fb43624b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3757",
    "nome": "CALCULADORA FBG 100B 12 DIGITOS - FBG-100B-12",
    "preco": 16,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9d89fcfd-7ebf-4bc3-9452-6c48b63d98e3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3543",
    "nome": "CALCULADORA GRANDE 12 DIG FBG - 838B-12",
    "preco": 28.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d78390a1-b0da-45b6-ba69-36b8407d78ec/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3708",
    "nome": "CALCULADORA MÉDIA 8 DÍGITOS - FBG - 3181A-8",
    "preco": 15.3,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/829a0eb8-b6c2-4460-964f-62085abdae45/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3139",
    "nome": "CALCULADORA PEQUENA C/ CORDÃO FBG - 8961",
    "preco": 9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4e80ce93-2c89-4b7f-812e-5313744f2891/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3233",
    "nome": "CALCULADORA PEQUENA FBG- 402",
    "preco": 7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/78a5b55d-d25f-4a92-a6c3-a9028db8b268/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3223",
    "nome": "CÂMERA IP WIFI ÍPEGA - KP-CA156",
    "preco": 205,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6739a33c-ab33-459e-913b-3779836621ad/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3531",
    "nome": "CANIVETE MULTIUSO - FBG - 3141",
    "preco": 15.65,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/76e10121-354a-44eb-ba51-25a25bd9dd7b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3668",
    "nome": "CAPA DE CHUVA MOTOQUEIRO COM FAIXA REFLETIVA BRANCA - CM58",
    "preco": 56.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0f577c4b-7894-4477-bbfe-dff7230cad67/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3688",
    "nome": "CAPA DE CHUVA PARA MOTOQUEIRO TAMANHO GG",
    "preco": 48.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9aa4f7a2-b639-46e4-91a1-e5dcaf2a4294/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3327",
    "nome": "CARREGADOR DE BATERIA",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/01f5fd18-b856-49ba-886b-d2bc2e35af18/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3584",
    "nome": "CARREGADOR DE PILHA MOX MO-CP51",
    "preco": 67.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d3f873d4-e4d0-48d7-a18c-1d6aaf23e1ef/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3578",
    "nome": "CARREGADOR DE PILHAS AA, AAA E 9V PLUGUE - KNUP - KP - 512",
    "preco": 31.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b9d1a542-f491-459b-bc81-4365c6c63f35/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3262",
    "nome": "CARREGADOR FONTE VEICULAR 9.A 40W HMASTON - S18-4",
    "preco": 26.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7ee18ea6-0cfa-4a76-8bfd-2adf9a2d2446/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3253",
    "nome": "CARREGADOR IPHONE 48W 9.1A HMASTON - Y41-2",
    "preco": 29.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/94690914-8bed-4bd5-918d-987fa8687ebf/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3108",
    "nome": "CARREGADOR IPHONE 5.1A 25W - H MASTON - Y24-2",
    "preco": 16.2,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/aec7bd19-ef75-427e-b8cb-202cc6373c45/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3109",
    "nome": "CARREGADOR TIPO C 3.1A 15W - H MASTON - Y18-3",
    "preco": 13.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/be15074b-66bf-4769-b12d-8ca7fcec91f1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3254",
    "nome": "CARREGADOR TIPO C 48W 9.1A HMASTON - Y41 - TIPO C",
    "preco": 33,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9d50fb99-00d9-4037-8cdd-24a3163abe7b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3069",
    "nome": "CARREGADOR TIPO-C 5.1A 25W - H MASTON - Y24-3",
    "preco": 16.2,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/00e57f81-3d20-4697-8ce9-2ec560ab0e6e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3067",
    "nome": "CARREGADOR V8 3.1A 15W - H MASTON - Y18-1",
    "preco": 13.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bb3953ee-372e-40aa-a9b1-e27e84511980/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3255",
    "nome": "CARREGADOR V8 48W 9.1A H_MASTON - Y41 - V8",
    "preco": 29.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3ffa3ffb-ce27-48b5-9b1f-85c444886f4f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3068",
    "nome": "CARREGADOR V8 5.1A 25W - H MASTON - Y24-1",
    "preco": 16.2,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8074b60d-fb1f-435d-a007-681f6cb00ee7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3336",
    "nome": "CARREGADOR VEICULAR 3.6A C/ CABO V8 MAXMIDIA - MAX-622CAR",
    "preco": 18.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4870eab1-ca19-4e0b-8671-fd8fe076cbef/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3599",
    "nome": "CARREGADOR VEICULAR 35W H MASTON - L12-4",
    "preco": 14,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/86098442-884d-469c-a67a-8e9d8edef2c4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3604",
    "nome": "CARREGADOR VEICULAR 4.8A H MASTON - L11-4",
    "preco": 11,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bb45aaeb-7b68-4569-88fd-cbb071c5769a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3675",
    "nome": "CARRINHO - CARRO RADICAL FRICÇÃO GIRA 360",
    "preco": 5.95,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9fa579f1-655f-48dc-b613-aff49055745b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3677",
    "nome": "CARRINHO - SPORT CAR RACING - ART BRINK -ZEIN - ZF1505B",
    "preco": 6.1,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/118a682d-370a-49e2-9cd5-5febd493e799/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3676",
    "nome": "CARRINHO - SUPER CARRO SPORT - 4 PEÇAS - ZB748",
    "preco": 7.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9307ca5c-7001-4a2b-9873-08412831f3c0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3741",
    "nome": "CARRINHOS - CARRO ESPORTE FRICÇÃO 11CM - ZBN0465",
    "preco": 6.1,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/70a3d3f4-b614-4d44-9c00-aeda202d33c1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3736",
    "nome": "CARRINHOS - MINI CARROS - FRICÇÃO - ZB672",
    "preco": 13.45,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e54218d0-5632-429c-a0f7-c46b0a4a3ff6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3449",
    "nome": "CARTÃO DE MEMÓRIA 16GB C10 + LEITOR USB 2X1 - MC162",
    "preco": 30.76,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/08b3dcb1-ec86-4b0f-9064-ced830d8ef81/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3450",
    "nome": "CARTÃO DE MEMÓRIA 32GB C10 + LEITOR USB 2X1 - MC163",
    "preco": 42.32,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7e42ff52-98d7-4b95-a176-403f9691f66c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3451",
    "nome": "CARTÃO DE MEMÓRIA 64GB C10 + LEITOR USB 2X1 - MC164",
    "preco": 58,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/33cd2aa1-4145-4b69-ac1f-20e6026e10e5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3552",
    "nome": "CAVALO PULA PULA - BS1407",
    "preco": 54,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c2ecc2d2-cab1-4085-8846-b785d2b4f95b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3544",
    "nome": "CHAVE MULTIFUNCIONAL HIDRAULICA - FBG - 3154",
    "preco": 18.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c18d93ba-c22d-4772-9456-e508e87fca21/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3623",
    "nome": "CHAVEIRO - CAVALINHO - METAL - CARTELA COM 12 UN",
    "preco": 51,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9b565679-3743-4105-937e-1a05afa788ac/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3617",
    "nome": "CHAVEIRO - CORINO - CARRO - 12 UN",
    "preco": 3.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/74dfb35d-1446-493d-9392-5c5989039595/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3621",
    "nome": "CHAVEIRO - CORINO PRETO - CARTELA COM 12 UN - 7153",
    "preco": 51,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/29ba7323-e97f-44b0-b06b-712a74c35535/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3622",
    "nome": "CHAVEIRO - CORINO PRETO E MARROM - CARTELA COM 12 UN - 9630",
    "preco": 36,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d4d0a157-ac6a-4d0e-9647-9f3ff801db08/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3638",
    "nome": "CHAVEIRO - CORUJA - CARTELA COM 12 UN - 1186",
    "preco": 24,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e3ae514f-c541-476d-b290-b97630e73117/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3639",
    "nome": "CHAVEIRO - DRAGÃO - CARTELA COM 12 UN - 1180",
    "preco": 24,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2e399ddf-8aba-4493-a982-83af03f32039/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3619",
    "nome": "CHAVEIRO - METAL - CARRO - 12 UN",
    "preco": 2.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/dfc4cf69-1d41-441e-bda1-49e9d17ff278/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3618",
    "nome": "CHAVEIRO - METAL - FUTEBOL",
    "preco": 51,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0ee03688-8a86-40c6-aa91-880ea1b1c017/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3633",
    "nome": "CHAVEIRO - PONIE - CARTELA COM 12UN - 6845",
    "preco": 36,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/95198ed6-a2f4-4bde-8fd7-3af7178a020f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3625",
    "nome": "CHAVEIRO - QUADRADO - METAL - 6837",
    "preco": 82,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/57c09680-06d8-4eab-913d-99651ea73922/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3640",
    "nome": "CHAVEIRO - URSO - CARTELA COM 12 UN -1175",
    "preco": 24,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9b277efb-74eb-47da-a018-1a63e4bddcba/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3744",
    "nome": "CINTO ADULTO EM POLIESTER SORTIDO - YS - 27535",
    "preco": 210,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/76e3b68c-bc49-40cd-9ec0-d72c99d59680/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3743",
    "nome": "CINTO ADULTO EM POLIPROPILENO SORTIDO - YS - 27533",
    "preco": 170,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a1737349-ae6a-4cb1-8e86-cf7eef890b05/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3745",
    "nome": "CINTO INFANTIL EM POLIESTER E ALGODAO SORTIDO - YS - 32148",
    "preco": 195,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/835e3eb5-8862-4907-a33b-088ebc6efa7f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3691",
    "nome": "CINTO SINTETICO MASCULINO - CF2258-LDC",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6f8032fb-e6ac-48bb-9f12-0d13ce3bbedf/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3692",
    "nome": "CINTO SINTETICO MASCULINO - CF6137 - LICHA",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b84f43ea-83b1-4fbf-a6c1-27491b0c1c93/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3693",
    "nome": "CINTO SINTETICO MASCULINO - CF6237 - MAD",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0dd51554-a6da-44cc-a0b6-4b214d32c4ac/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3694",
    "nome": "CODINHA PARA ÓCULOS - PACOTE COM 12 UN",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bcc08837-2646-4195-ba83-a5a375f8311d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3729",
    "nome": "COLA INSTANTÂNIA ALFACELL 20G - VISCOSIDADE ALTA - AL- 53020 - CAIXA COM 12 UN",
    "preco": 91.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2c2131a1-51be-4f5a-bdaa-891befd1ae61/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3678",
    "nome": "COLEÇÃO VEICULOS MILITAR - 4 PEÇAS",
    "preco": 9.15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/be46a950-aa29-41d1-8d56-2e7da41378cd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3684",
    "nome": "COLHER DE SERVIR SILICONE CLASS - LINHA PRIME - ZEIN",
    "preco": 9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6f72de08-5567-4c05-9a2d-f498f41032c3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3687",
    "nome": "COLHER MULTIUSO SILICONE CLASS - LINHA PRIME - ZEIN",
    "preco": 9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/92d78f3e-16b1-4a81-abd6-6a5447a12514/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3686",
    "nome": "CONCHA SILICONE CLASS - LINHA PRIME - ZEIN",
    "preco": 9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/35fc598b-06ab-435a-835d-9507d8d0d2a7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3125",
    "nome": "CONJUNTO PARA CHURRASCO STARHOUSE COLOCR - BS0093",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/761217ee-b78d-4851-8e62-7f73cd8d2a45/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3015",
    "nome": "CONTOLE TV SAMSUNG LCD/LED - FBG - 7031",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8b073d58-0e4b-4143-8cba-e217fb91d3c3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3029",
    "nome": "CONTROLE RECEPTOR AZAMERICA S1001 / S1005 - FBG - 7476",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b0744588-5c56-4d8a-a749-0cb0214a9dea/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3016",
    "nome": "CONTROLE TV SEMP TOSHIBA LED - FBG - 7064",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/63c6bfc7-eea6-48d0-9f7a-43f0ed12bf48/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3752",
    "nome": "CONTROLE AR CONDICIONADO AGRATTO - FBG - 9101",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6228fc9d-5a1a-40db-9b93-1396db702edb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3150",
    "nome": "CONTROLE AR CONDICIONADO CARRIER FBG - 7070",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ec1372d2-4578-4103-b987-a18aed3a9700/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3151",
    "nome": "CONTROLE AR CONDICIONADO CARRIER FBG - 8013",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0bb95b1b-9561-40bb-82c0-e6004e83cc8c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3152",
    "nome": "CONTROLE AR CONDICIONADO CARRIER FBG - 8069",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/94e8d9cb-75b3-41c2-ac52-80894da4cd32/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3696",
    "nome": "CONTROLE AR CONDICIONADO CONSUL - FBG - 7047",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b8095edb-a8d5-4660-949d-3b16a04ab80b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3368",
    "nome": "CONTROLE AR CONDICIONADO CONSUL FBG - 9018",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/aace8c41-19a7-436c-b232-caa426122788/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3148",
    "nome": "CONTROLE AR CONDICIONADO ELETROLUX FBG - 7071",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ea45a142-f89a-415e-9ca1-d04ae556b958/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3144",
    "nome": "CONTROLE AR CONDICIONADO ELGIN FBG - 8012",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a435457b-57e7-486a-b7d2-6f5ef83c7576/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3227",
    "nome": "CONTROLE AR CONDICIONADO ELGIN FBG - 9104",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/30a24614-f5d6-4e7c-aa64-1c1eafd95314/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3230",
    "nome": "CONTROLE AR CONDICIONADO ELGIN FBG - 9122",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c3036155-052a-4d72-8b3f-9d4ae34e0e83/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3400",
    "nome": "CONTROLE AR CONDICIONADO ELGIN FBG - 9202",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9cac322a-b9c1-4572-a8c3-83172d749217/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3375",
    "nome": "CONTROLE AR CONDICIONADO GREE - FBG - 9060",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cc0648fb-595d-4efd-a72f-11d36f29544f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3147",
    "nome": "CONTROLE AR CONDICIONADO GREE FBG - 9050",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/09550bba-858c-49d3-9798-49ca17d16567/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3146",
    "nome": "CONTROLE AR CONDICIONADO GREE FBG - 9070",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/21d2550b-670a-49d3-b624-f8977b5a09aa/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3699",
    "nome": "CONTROLE AR CONDICIONADO GREE SPLIT - FBG - 8066",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5fda3045-1b06-4205-8c61-f71e88ecfe78/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3525",
    "nome": "CONTROLE AR CONDICIONADO KOMECO FBG - 8020",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/edf0c01b-d1bd-48ed-b6b4-fc3e56ecb544/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3560",
    "nome": "CONTROLE AR CONDICIONADO LG - QUENTE / FRIO - FBG - 8080",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/26bcea9a-b126-435f-8dc0-d3856e57d0ba/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3143",
    "nome": "CONTROLE AR CONDICIONADO LG FBG - 7477",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3d49d78d-20e2-404f-b334-a2214c1dbf92/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3526",
    "nome": "CONTROLE AR CONDICIONADO MIDEA SPLIT FBG - 9069",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d97f7189-e3dd-4dda-aabe-f7307c5efc63/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3563",
    "nome": "CONTROLE AR CONDICIONADO PHILCO - FBG - 9086",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0523c7b6-19d6-48e2-a700-6ae8f9669a5e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3564",
    "nome": "CONTROLE AR CONDICIONADO PHILCO - FBG - 9102",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e987ad7a-0df6-4822-87f8-beb71de667c7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3561",
    "nome": "CONTROLE AR CONDICIONADO PHILCO FBG - 9022",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/43395a42-d123-4dd9-a801-34d61ca316b1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3565",
    "nome": "CONTROLE AR CONDICIONADO SAMSUNG - FBG - 9162",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/367544d1-350a-4d42-bf71-fe45b87edead/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3145",
    "nome": "CONTROLE AR CONDICIONADO SAMSUNG FBG - 7068",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6ee5eddb-1f8a-4b6d-8229-6b9e3c041fcb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3369",
    "nome": "CONTROLE AR CONDICIONADO SAMSUNG FBG - 9030",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1d2f3811-37f9-4a3b-808a-02502c4789ba/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3527",
    "nome": "CONTROLE AR CONDICIONADO SPRINGER MIDEA - FBG - 9309",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fae5c45f-2329-46a5-b99d-e121493c4758/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3536",
    "nome": "CONTROLE AR CONDICIONADO TCL - FBG - 9187",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0dae8552-e748-4d06-b9f3-a7bb61336b22/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3367",
    "nome": "CONTROLE AR CONDICIONADO YORK - KOMECO - FBG - 9010",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e29a7d11-800f-4c6b-b33b-071990030029/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3153",
    "nome": "CONTROLE AR CONDICIONADO YORK FBG - 7069",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/08c61853-dffa-48ae-9852-7ce9c9548f45/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3228",
    "nome": "CONTROLE AR-CONDICIONADO ELGIN FBG - 9066",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ad0cdb48-df76-4010-8458-cce53531aa88/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3229",
    "nome": "CONTROLE AR-CONDICIONADO LG - FBG - 9103",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/24ffbb07-17f4-481e-b853-a4707a9c08a0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3004",
    "nome": "CONTROLE AR-CONDICIONADO LG SMILE - FBG - 9008",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e0d80c52-6527-42e2-ac8d-cbfa361c8177/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3154",
    "nome": "CONTROLE AR-CONDICIONADO MIDEA FBG - 9020",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4c86553b-e362-4650-b57f-283ed582ec42/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3155",
    "nome": "CONTROLE AR-CONDICIONADO SPRINGER MIDEA FBG - 8063",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5c6e04b0-cf49-4a8f-88ff-a8e4935bce82/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3753",
    "nome": "CONTROLE AR-CONDICIONADO YORK - FBG - 9213",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/494876c1-78a2-4906-b48d-cf531c7138a9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3218",
    "nome": "CONTROLE CONVERSOR DIGITAL CENTURY FITBOX FBG - 9024",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/10a47050-d3f8-4064-aa94-5aaa74f4d129/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3221",
    "nome": "CONTROLE CONVERSOR DIGITAL VISIONTEC VT7500 - FBG - 9014",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fcff1cab-0877-4242-a199-6862b69d3543/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3161",
    "nome": "CONTROLE DVD AMVOX FBG-7658 / MC-7658",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e512094d-75aa-4e4c-85d7-853ddd9f38b7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3156",
    "nome": "CONTROLE DVD BRITANIA FAMA 3 FBG-7558 / REM-8034",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7cec45eb-2991-4c1b-a58e-4e29a284fa37/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3157",
    "nome": "CONTROLE DVD LG FBG-7556 / REM8036",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/91a5c5d1-bd49-45c4-88de-f3b9104a549a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3158",
    "nome": "CONTROLE DVD MONDIAL FBG-7400 / REM-8038",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1e4fbc66-1eb0-40d5-99de-9b0640c71cb1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3159",
    "nome": "CONTROLE DVD PHILIPS FBG - 7223",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cbf3770c-a906-472c-b1e8-3d3acf54938b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3160",
    "nome": "CONTROLE DVD PHILIPS FBG-7805 / REM-8037",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/baf8b3ca-d0c5-45cd-9d84-cb07d26c00e7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3702",
    "nome": "CONTROLE LG SMART COM IVI - FBG - 9093",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/48642719-b581-463c-9ab6-500b4cb85353/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3701",
    "nome": "CONTROLE PHILCO SMART - FBG - 9004",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f6106d8f-135b-4eff-b290-45162b41c49b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3040",
    "nome": "CONTROLE PLAYSTATION 2 SACO - FBG - PS005",
    "preco": 27.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c0737241-167b-4a4c-a3db-87bb05a6bc35/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3490",
    "nome": "CONTROLE RECEP FREESKY MAX HD / EAGLE FBG - 9052",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/114a3eb9-e788-4e7e-a839-c511a89f922a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3700",
    "nome": "CONTROLE RECEPTOR ALPHASAT - FBG - 8074",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a1752a14-9da8-4a3a-8e77-5f0407e77770/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3038",
    "nome": "CONTROLE RECEPTOR AZAMERICA BEATS - FBG - 9041",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/872cf12c-439f-474e-9b4a-5b27bb94654d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3406",
    "nome": "CONTROLE RECEPTOR AZAMERICA BEATS GX PRO - FBG - 9149",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bd3c6e0b-9f2c-46e2-8d86-37f6da740aa6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3313",
    "nome": "CONTROLE RECEPTOR AZAMERICA F92 PLUS - FBG - 9223",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4ca754d4-6632-4115-af76-8eb1ef9655ed/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3213",
    "nome": "CONTROLE RECEPTOR AZAMERICA F94 - FBG - 8048 / SKY - 8048",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1f71fa09-932c-4848-81b9-edef4ebfedff/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3212",
    "nome": "CONTROLE RECEPTOR AZAMERICA S 1007 - FBG - 7084",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6235a4ee-56ab-4018-ab4c-66d07b8c1c11/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3030",
    "nome": "CONTROLE RECEPTOR AZAMERICA S2010 - FBG - 8018",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bbe87cba-b2ea-4f8a-8bdf-74cb96522c72/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3306",
    "nome": "CONTROLE RECEPTOR AZAMÉRICA S2015 - FBG - 9152",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/188cb14e-94f1-4209-be56-81b71f38ec8d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3028",
    "nome": "CONTROLE RECEPTOR AZMARECIA S1009 - FBG - 7081",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6c817fd5-3a68-4673-b0a4-c0efdbbb7265/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3219",
    "nome": "CONTROLE RECEPTOR BEDIN SAT - FBG - 9033",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/febcb8aa-7e4f-4d63-a783-c0e8d295ef64/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3562",
    "nome": "CONTROLE RECEPTOR BTV - FBG - 9035",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6c6d1ef3-64bc-4a15-8ec1-8a8c25464ee1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3023",
    "nome": "CONTROLE RECEPTOR CENTURY B2 - FBG - 7030",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cf037b49-88e8-4d47-8c46-881d7c8c7a13/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3024",
    "nome": "CONTROLE RECEPTOR CENTURY B3 / B4 - FBG - 8086",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cd9bda80-078a-4953-a39e-ff7472098ebc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3407",
    "nome": "CONTROLE RECEPTOR CENTURY B5 - FBG - 9300",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/36720d82-2a65-42f0-801a-1d88c6aaae73/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3217",
    "nome": "CONTROLE RECEPTOR CENTURY MIDIA BOX B1 - FBG - 7029",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9c0f23af-b434-4ddf-bfce-8b0200fddc6b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3025",
    "nome": "CONTROLE RECEPTOR CENTURY NANO BOX FBG - 7085",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d300898b-bb4c-4e2a-a845-47c490f73cb9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3022",
    "nome": "CONTROLE RECEPTOR CENTURY SUPER COLOR FBG -S236",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0abf187c-be70-403c-8b8e-7aeff2ccf5b1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3206",
    "nome": "CONTROLE RECEPTOR CINEBOX - FBG - 7500",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cb3e5a8f-56a8-4515-9325-9f94994cbcd7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3034",
    "nome": "CONTROLE RECEPTOR CRONOS / BEDIN - FBG - 7920",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fc8b14de-88cf-4094-a9cb-8942b49e0a18/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3292",
    "nome": "CONTROLE RECEPTOR DUOSAT JOY HD - FBG - 9046",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8b2bf26f-1290-4ff7-89a2-ef1ddf61127e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3293",
    "nome": "CONTROLE RECEPTOR DUOSAT PRODIGY HD NANO - FBG - 9047",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a66ba193-22a5-404a-8861-8739669b890d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3280",
    "nome": "CONTROLE RECEPTOR DUOSAT TREND HD - FBG - 7491",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/07265516-762e-4a6a-9e99-dd6e0627bfc3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3289",
    "nome": "CONTROLE RECEPTOR DUOSAT WAVE - FBG-8083",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cd4789ed-14a2-404c-ad95-3b7a75290519/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3275",
    "nome": "CONTROLE RECEPTOR FREESKY - FBG - 7023",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/93728ef8-069a-493f-b838-42521db85d8c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3208",
    "nome": "CONTROLE RECEPTOR FREESKY - FBG - 7079",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7ee06481-c410-4b1e-a9ba-72bfe55abe44/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3039",
    "nome": "CONTROLE RECEPTOR FREESKY TRIPO X - FBG - 9000",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d8973e56-879b-49a0-b532-dd236925dac7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3035",
    "nome": "CONTROLE RECEPTOR GLOBALSAT - FBG - 7975",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2a5b31dc-2be4-4883-b1c4-d32e40015f01/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3291",
    "nome": "CONTROLE RECEPTOR GLOBALSAT GS-130 - GS-260 - FBG - 9025",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/77b2bb89-6e33-441e-ab64-120ac4ac59c1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3214",
    "nome": "CONTROLE RECEPTOR MEGA BOX - FBG - 7020",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a8be34e2-8248-448b-b802-ffc776c73d32/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3207",
    "nome": "CONTROLE RECEPTOR NAZABOX - FBG - 7021",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/01731e02-79b8-4259-b827-30ef1d717562/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3205",
    "nome": "CONTROLE RECEPTOR OI TV ELSYS - FBG - 7014",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ac3e2796-90fa-4261-988f-be290888bccd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3222",
    "nome": "CONTROLE RECEPTOR ORBISAT - FBG - 7913",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/61af73ba-2f5e-46d1-b104-99e49ca5019f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3216",
    "nome": "CONTROLE RECEPTOR TOCOM LINK FESTA HD - FBG - 8002",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/eeeb85da-49e1-4f12-b430-354379f54500/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3215",
    "nome": "CONTROLE RECEPTOR TOCOM NET - FBG - 7077",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/958939a6-b814-45a1-9763-15ce8dcb4f71/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3209",
    "nome": "CONTROLE RECEPTOR TOCOMBOX - FBG - 7075",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d9f9086e-d6fc-4310-ab3b-6aab771a066f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3027",
    "nome": "CONTROLE RECEPTOR TOCOMBOX - FBG - 8028",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f2d8efe1-dd85-4e39-8de5-f39b88c195a9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3210",
    "nome": "CONTROLE RECEPTOR TOCOMSAT - FBG - 8021",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bf310220-f501-4dbe-b306-0e65e8de5325/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3026",
    "nome": "CONTROLE RECEPTOR TOCOMSAT COMBATE - FBG - 7028",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/95f00da1-ff3b-4243-bdd2-b204365ea61c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3211",
    "nome": "CONTROLE RECEPTOR TOCOMSAT FESTA HD FBG - 8038",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/33492b3a-7253-43ec-a90b-2b106fc716bc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3226",
    "nome": "CONTROLE RECEPTOR UNIVERSAL MULT III - FBG - 8019",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8d160a73-8bd4-4b06-b4e2-286272d6ba7b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3037",
    "nome": "CONTROLE RECEPTOR VISIONSAT - FBG - 9037",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7134a464-b764-445b-a89a-69a1a26009ae/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3031",
    "nome": "CONTROLE RECEPTOR VISIONTEC VT1000 - FBG - 7324",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/415aec52-8aca-4607-99fd-1ff771308cd9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3032",
    "nome": "CONTROLE RECEPTOR VISIONTEC VT1000 - FBG - 7900",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bfdaa549-3fb6-4984-ac21-aa524e927ccb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3220",
    "nome": "CONTROLE RECEPTOR VISIONTEC VT4000A - VT5000 - LE - 7566",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9091a7d4-abda-44dc-87e0-91aa96ac0e2b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3528",
    "nome": "CONTROLE RECEPTOR VIVENSES - FBG - 9314",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cb8697f0-eee4-46ab-9427-08128be585ac/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3033",
    "nome": "CONTROLE RECPETOR AZBOX BRAVISSIMO - FBG-7419",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9a07d807-bd2c-40f2-bd72-0582786ba669/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3507",
    "nome": "CONTROLE REMOTO AR-CONDICIONADO MIDEA - KOMECO - FBG - 7050",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1f6c0b9b-a93c-4206-b604-699049feaaeb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3703",
    "nome": "CONTROLE SAMSUNG SMART 4K - FBG -9110",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0b30bb64-10c1-4d7e-83bf-6d70a4f5f80e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3698",
    "nome": "CONTROLE TOSHIBA LCD - FBG - 8025",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d19fa4e6-65e7-414a-acde-3d84cc9f60df/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3697",
    "nome": "CONTROLE TOSHIBA LCD STI - FBG - 7446",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d7dc1365-1403-4352-9df3-ffc84a893ab8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3707",
    "nome": "CONTROLE TV AIWA SMART - FBG - 9310",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/08c44c05-f3f3-4e06-8502-324385c5e883/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3172",
    "nome": "CONTROLE TV AOC LCD FBG - 7099",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4d99c540-ad96-4fbd-b29c-bab2886f3669/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3175",
    "nome": "CONTROLE TV AOC LED FBG - 7056",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/493fc310-f04a-42a6-82e4-b10e4c6ca280/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3173",
    "nome": "CONTROLE TV AOC LED FBG - 7942",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1e244bb8-876c-4a0f-946a-46ab03ba9015/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3286",
    "nome": "CONTROLE TV AOC LED FBG - 8014",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8cc26fe2-ae3a-4247-bbdf-5ad4c47c8730/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3005",
    "nome": "CONTROLE TV AOC SMART C/ NETFLIX - FBG - 8050",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5d213f1a-37dd-407a-9797-8d9a8a8f00c9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3006",
    "nome": "CONTROLE TV AOC SMART C/ NETFLIX E YOUTUBE - FBG - 9061",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/031b7d26-1e08-4933-8f02-e59939226a75/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3007",
    "nome": "CONTROLE TV AOC SMART ROKU - FBG - 9091",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e0ac4234-e2d6-4aa0-83c0-77bac9db396f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3307",
    "nome": "CONTROLE TV BOX - A5X - A96X -FBG - 9155",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/68b265e3-b6c4-46bc-bb79-2cdb0b065d87/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3021",
    "nome": "CONTROLE TV BOX - FBG - 9006",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/679fbe04-d01a-495c-9507-71f0196cbdb6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3298",
    "nome": "CONTROLE TV BOX AQUARIO - FBG - 9123",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f51a1933-21d9-4b63-85b1-35015371c4e7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3036",
    "nome": "CONTROLE TV BOX AQUARIO 4K - FBG - 9072",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c0d48c85-fd4b-4ef9-9ac7-691d340ebe8e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3758",
    "nome": "CONTROLE TV BOX FIRE STICK - FBG - 9339",
    "preco": 29.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c9a2558c-faff-4285-a945-fe8ffdef638b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3304",
    "nome": "CONTROLE TV BOX INFOKIT - FBG 9144",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ff59bdb5-ae1a-4662-96a0-6ee04be0776c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3303",
    "nome": "CONTROLE TV BOX ROKU - FBG - 9142",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f8a4206d-e732-4280-ae51-af05a1fe4832/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3294",
    "nome": "CONTROLE TV BOX TX2 - TX3 - TX4 - TX5 - TX6 - FBG - 9051",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0d1d9ec0-eef1-4d45-ab93-58a5b5e7541f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3187",
    "nome": "CONTROLE TV BUSTER LCD - CRS - 7072 / FBG - 7062",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/44526ea3-63b9-4430-b2f9-14c42f0ddee4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3224",
    "nome": "CONTROLE TV BUSTER LCD - FBG - 7963",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7e273a98-3eb0-487b-9731-f542e7699f82/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3225",
    "nome": "CONTROLE TV BUSTER LCD - FBG - 7982 / CRS - 7417",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cc8cd42f-75d1-44cd-9089-26797a554d62/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3204",
    "nome": "CONTROLE TV CCE CYBER TUBO - FBG - 7179 / REM - 8029",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b2ea7b72-eb3b-4a4d-8493-24ceafb0237d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3203",
    "nome": "CONTROLE TV CCE LCD - MXT - RC507 / FBG - 507",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2f141012-aac8-4e3e-b10e-67d5258d66f0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3163",
    "nome": "CONTROLE TV LG LCD - FBG - 7468",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2cff0c68-a8aa-4acf-b1ac-97059693e391/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3471",
    "nome": "CONTROLE TV LG SMART - FBG - 7027",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8c892ebb-ffff-4df2-aa69-e3deed22583e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3295",
    "nome": "CONTROLE TV LG SMART - FBG - 9053",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5639cc00-9003-465d-8bb6-b00f3bbcb35f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3162",
    "nome": "CONTROLE TV LG SMART - FBG - 9135",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c6da6849-98e4-4b30-8412-b39775767e09/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3311",
    "nome": "CONTROLE TV LG SMART - FBG - 9175",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5fe68e78-1f6b-40c8-97d9-171574b85604/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3704",
    "nome": "CONTROLE TV LG SMART (SEM MOUSE E VOZ) - FBG - 9166",
    "preco": 35,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d3a28b26-f2bc-4b22-95a8-adce9ce7d07f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3008",
    "nome": "CONTROLE TV LG SMART C/ NETFLIX / AMAZON - FBG - 8035",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ba392aaa-92e1-4397-9bc3-23e7a675b614/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3164",
    "nome": "CONTROLE TV LG SMART FBG - 9154",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0487ea30-0279-4751-8bf4-55fa92d7729f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3296",
    "nome": "CONTROLE TV MULTILASER FBG - 9077",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d2b79ed7-796f-41ea-bc01-c7a9cf2a6e5b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3409",
    "nome": "CONTROLE TV MULTILASER SMART - FBG - 9143",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/20508b9c-6739-424f-98d3-864017a17ef1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3305",
    "nome": "CONTROLE TV MULTILASER SMART - FBG - 9147",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/99a31bbb-ba95-4b14-865f-ea243adcf35b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3308",
    "nome": "CONTROLE TV MULTILASER SMART - FBG - 9167",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/922dedee-f721-4571-837c-3408d1d086ef/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3705",
    "nome": "CONTROLE TV MULTILASER SMART - FBG - 9196",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/15689873-e660-44e5-a1bc-2ad0763f406f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3274",
    "nome": "CONTROLE TV PANASONIC LCD - FBG - 7008",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e6a9f48b-32d9-4099-8c06-3365f53d714a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3201",
    "nome": "CONTROLE TV PANASONIC LCD - FBG - 7923",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/79692fd4-2b62-41ec-95fc-0a4b2cf5b6d1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3009",
    "nome": "CONTROLE TV PANASONIC LCD - FBG - 8045",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3fd055bc-1262-4a89-a096-470bcfb6fcca/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3309",
    "nome": "CONTROLE TV PANASONIC SMART - FBG - 9170",
    "preco": 15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ebea2778-9108-4f53-8e8c-6bc78cc75bae/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3202",
    "nome": "CONTROLE TV PANASONIC SMART C/ NETFLIX - FBG - 8058",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0c64c236-c19e-4b82-84bd-f978886ee8e8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3287",
    "nome": "CONTROLE TV PANASONIC SMART FBG - 8072",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/069cf590-7b7e-47f9-b150-f9552b622e82/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3193",
    "nome": "CONTROLE TV PHILCO LCD - CRS - 7972 / FBG - 7972",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7e2113b7-5990-4394-b3dd-41fb48065d81/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3283",
    "nome": "CONTROLE TV PHILCO LCD - FBG - 7981",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a3148ec2-7178-4e87-a633-5fee2a2f5a33/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3191",
    "nome": "CONTROLE TV PHILCO LCD - FBG - 7987",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f9c05875-2424-454b-9e3a-d8db26c3e326/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3194",
    "nome": "CONTROLE TV PHILCO LCD - GOAL - GL - 7060",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6f9242c5-2234-44ef-9716-57377f04f200/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3284",
    "nome": "CONTROLE TV PHILCO LCD FBG - 7988",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/431208f4-06a8-4710-9b1e-3de5f9bd3fcb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3192",
    "nome": "CONTROLE TV PHILCO LCD FBG - 7989",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/da8417d0-f777-4cfc-b49c-181aba5d9d27/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3189",
    "nome": "CONTROLE TV PHILCO LCD SMART FBG - 7487",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e371e0d0-0735-43f8-ace5-31e654290d53/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3188",
    "nome": "CONTROLE TV PHILCO LCD SMART FBG - 8022",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0985f5da-7b27-4d55-a189-7aefbd169400/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3196",
    "nome": "CONTROLE TV PHILCO SLIN TUBO - FBG - 7403 / LE-7403",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/67813cce-94d9-4d69-a2e2-e6f232b178ac/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3011",
    "nome": "CONTROLE TV PHILCO SMART - FBG9 - 9028",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/44bd63b3-a117-4464-b7f6-e14dfb5ff7bc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3046",
    "nome": "CONTROLE TV PHILCO SMART - FBG - 9063",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/431e8dee-3a95-492e-92b1-6eda946eeb62/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3056",
    "nome": "CONTROLE TV PHILCO SMART - FBG - 9131",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/31ee25ce-3e50-43b1-b5dd-76d509f1e693/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3277",
    "nome": "CONTROLE TV PHILCO SMART C NETFLIX FBG - 7094",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/859727a5-bc55-4891-9318-1082c71c6bc6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3190",
    "nome": "CONTROLE TV PHILCO SMART FBG - 9129",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/02672e92-7f4c-4a91-8716-9a932f61f3c7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3010",
    "nome": "CONTROLE TV PHILCO SMART NETFLIX E YOUTUBE - FBG - 9005",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/80ffde1f-1bbc-4792-8cee-33b20da0cd4c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3055",
    "nome": "CONTROLE TV PHILCO SMART ROKU - FBG - 9125",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7baff840-aa5b-42e9-afb6-cce3e74a6389/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3706",
    "nome": "CONTROLE TV PHILCO SMART ROKU - FBG - 9206",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d869fd7d-8eb8-4fa1-95d1-ac50c79fc5f3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3195",
    "nome": "CONTROLE TV PHILCO TUBO - REM - 8063",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ef78a6d6-76ca-44b6-a67c-f2a2d97c666f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3199",
    "nome": "CONTROLE TV PHILIPS LCD - FBG - 7445",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0d521efb-507e-4ae0-8488-d33fccbd6f82/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3198",
    "nome": "CONTROLE TV PHILIPS LCD - FBG - 7983",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c930309f-e14a-42de-809a-fe0dc400ac24/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3013",
    "nome": "CONTROLE TV PHILIPS SMART - FBG - 9084",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bf0db531-466d-42fd-9c4c-d7c05df11724/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3278",
    "nome": "CONTROLE TV PHILIPS SMART - FBG - 7096",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c07635a5-d8f1-4bd7-9e24-05a78593f7e5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3288",
    "nome": "CONTROLE TV PHILIPS SMART - FBG - 8075",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9d42f8b4-8687-4de1-b766-425bacdbaed1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3297",
    "nome": "CONTROLE TV PHILIPS SMART - FBG - 9092",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5ecc1c40-a3e7-4dbc-9a8a-15eca45461c6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3473",
    "nome": "CONTROLE TV PHILIPS SMART - FBG - 9203",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1b89220e-0876-4f44-9f14-b17a70eaf10f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3200",
    "nome": "CONTROLE TV PHILIPS SMART 3D - FBG - 7413",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9992fa2e-fc08-442e-9ef0-7f65dcb7438e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3012",
    "nome": "CONTROLE TV PHILIPS SMART C/NETFLIX - FBG - 8049",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d6603991-42ac-45d0-82c3-893ff2af6f4c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3176",
    "nome": "CONTROLE TV PHILIPS SMART RAKUTEN FBG - 9085",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5da7c80a-c138-419f-9823-7f757ad83314/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3197",
    "nome": "CONTROLE TV PHILIPS TUBO - FBG - 7133",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/313f7743-0891-4253-bbf3-72d437ad5ddd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3281",
    "nome": "CONTROLE TV SAMSUNG LCD - FBG - 7956",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/62ace47e-2fbd-429c-8ac8-7f8a7ea4b151/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3282",
    "nome": "CONTROLE TV SAMSUNG LCD - FBG - 7957",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ab533b0a-b9f7-4c7d-ad81-d5bf3b2f56b1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3169",
    "nome": "CONTROLE TV SAMSUNG LCD FBG - 605A",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a1cc706a-5cf6-4b16-a0ad-2be8dad20d95/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3310",
    "nome": "CONTROLE TV SAMSUNG SMART - FBG - 9174",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f6ff96cc-46fc-4f4b-9253-a7287e644064/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3167",
    "nome": "CONTROLE TV SAMSUNG SMART - FBG-7032 / CRS-7032",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6b8f1bdd-b753-4c9b-a664-86190d33b5e4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3014",
    "nome": "CONTROLE TV SAMSUNG SMART 4K - FBG 9054",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a7d2054b-e41f-402d-9c3d-aa88ae063361/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3053",
    "nome": "CONTROLE TV SAMSUNG SMART 4K - FBG - 9111",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/98e6b80f-de2e-4f1d-af2d-34c089c11e84/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3285",
    "nome": "CONTROLE TV SAMSUNG SMART 4K - FBG - 8006",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/28884583-ddb9-43af-9030-ad17a26ec8ed/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3738",
    "nome": "CONTROLE TV SAMSUNG SMART 4K - FBG - 9094",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f7d299ad-9197-4c91-a2d3-0562b5d4a4cc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3312",
    "nome": "CONTROLE TV SAMSUNG SMART 4K - FBG - 9177",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/61f1f7c4-3ead-4034-b8e4-672e53b29379/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3568",
    "nome": "CONTROLE TV SAMSUNG SMART 4K - FBG - 9208",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a7e44f85-da6c-4972-a9dc-9de9620ae39e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3570",
    "nome": "CONTROLE TV SAMSUNG SMART 4K - FBG - 9311",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/aac8a0f7-9234-4531-a51c-5310464ed1bb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3170",
    "nome": "CONTROLE TV SAMSUNG SMART 4K FBG - 9007",
    "preco": 14,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d803d6c8-15d5-4688-8fb6-6753d38c6c8f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3168",
    "nome": "CONTROLE TV SAMSUNG SMART FBG - 9036",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c06846d9-745e-4fd5-bda9-7ab18b40bf7d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3166",
    "nome": "CONTROLE TV SAMSUNG SMART FBG -9139",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f54614e3-4c09-4af7-abf5-1c41707eeb1c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3276",
    "nome": "CONTROLE TV SAMSUNG SMART HUB - FBG - 7036",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f5b935a5-45d6-4abd-8822-b8afcc6e090c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3184",
    "nome": "CONTROLE TV SEMP SMART FBG - 9043",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d15f0e15-d7e1-46d7-a7c0-2bd4aadf96ea/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3180",
    "nome": "CONTROLE TV SEMP TOSHIBA LED FBG - 9029",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5aa9b993-3358-45bb-9d39-352acdd52e15/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3182",
    "nome": "CONTROLE TV SEMP TOSHIBA LED SMART FBG - 9009",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/21914ede-f34c-415a-b769-ae2022b46099/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3018",
    "nome": "CONTROLE TV TCL SMART - FBG - 8027",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/017fdd69-4e4d-4bf5-bb6f-666234ee94ba/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3302",
    "nome": "CONTROLE TV TCL SMART - FBG - 9141",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/979e81a5-0321-49a9-a4dc-26addcbcb75c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3472",
    "nome": "CONTROLE TV TCL SMART - FBG - 9184",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/32762319-a7e2-47a9-965b-a4c6237622c7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3405",
    "nome": "CONTROLE TV TCL SMART - FBG - 9194",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f45f67c1-14d3-4ad2-aec2-04eb839baf48/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3566",
    "nome": "CONTROLE TV TCL SMART - FBG - 9201",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/072ab98e-45db-4b3b-8bec-9a1b6cef7bbf/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3019",
    "nome": "CONTROLE TV TCL SMART C/ NETFLIX E GLOBOPLAY FBG - 9062",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2881c5c6-9978-43d4-adff-65c284229bd3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3186",
    "nome": "CONTROLE TV TOSHIBA LCD FBG - 7417",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fe738c90-9e58-4f7b-91c3-b2d47fe352e4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3181",
    "nome": "CONTROLE TV TOSHIBA LCD SMART - FBG - 7010 / REM - 8050",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e90c40b3-510a-43db-83a2-1930b2e51744/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3054",
    "nome": "CONTROLE TV TOSHIBA SMART - FBG - 8024",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a689015a-1c19-4817-ae45-9386e97d0d73/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3290",
    "nome": "CONTROLE TV TOSHIBA SMART - FBG - 9003",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c731f88c-9771-4626-b91c-05ac7b09273c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3299",
    "nome": "CONTROLE TV TOSHIBA SMART - FBG - 9134",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f6f2bf1b-049b-4064-bc35-dfad57804777/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3301",
    "nome": "CONTROLE TV TOSHIBA SMART - FBG - 9138",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9b23c6e8-4b84-45a8-be9c-72e86f8fb60c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3567",
    "nome": "CONTROLE TV TOSHIBA SMART - FBG - 9204",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/91a6c688-9ce2-4f08-9b14-990a81ccdb2c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3017",
    "nome": "CONTROLE TV TOSHIBA SMART C/ YOUTUBE / NETFLIX - FBG - 9057",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e5c6095d-414f-4871-99c8-72513b06e23c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3183",
    "nome": "CONTROLE TV TOSHIBA SMART FBG - 9095",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3c407f1c-d111-4bfd-bde7-b958b343c900/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3178",
    "nome": "CONTROLE TV TOSHIBA SMART FBG - 9128",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6b9afae7-f93b-4f38-8bfc-4321de6b42a7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3185",
    "nome": "CONTROLE TV TOSHIBA STI LCD FBG - 7447",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e94ba979-1f1f-4ee7-a119-9a5a681cdfe1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3179",
    "nome": "CONTROLE TV TOSHIPA / TCL SMART - FBG - 8026 / REM - 8058",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d69d04c3-4989-4e47-bb5b-37f111167184/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3177",
    "nome": "CONTROLE TV UNIVERSAL PARA TVS PHILIPS MXT - P-914",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2c55fead-3772-429f-9a88-c7bd82efdb2a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3171",
    "nome": "CONTROLE TV UNIVERSAL PARA TVS SAMSUNG - MXT E-S903",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8a13a4af-44ff-44a7-8804-bd3caad3971e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3300",
    "nome": "CONTROLE TV UNIVERSAL SAMSUNG SMART 4K - FBG - 9136",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ac53c895-cd8c-4370-ade5-e768f7efc22b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3723",
    "nome": "CONTROLE TV UNIVERSAL SMART - FBG - 9097",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/60d0b547-4f85-4412-a73e-2873384d0cf7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3003",
    "nome": "CONTROLE UNIVERSAL P/ AR-CONDICONADO - FBG - 100",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5b495ae8-03ad-4972-89f0-b7355c221b29/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3002",
    "nome": "CONTROLE UNIVERSAL P/ AR-CONDICONADO - FBG - 7045",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6a64588a-3540-4cad-80c3-04cacdcec3b3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3165",
    "nome": "CONTROLE UNIVERSAL PARA TV'S LG - MXT L905",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/106c85ea-bb1a-4805-b12b-3183ae7bb8ff/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3356",
    "nome": "CONTROLE XBOX COM FIO 360 - KAPBOM",
    "preco": 72,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c3b3e640-ade1-499a-89dc-fea8e3829b40/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3547",
    "nome": "CORTADOR DE UNHA COM 6 PC - DOCTOR Z - IZ939",
    "preco": 25.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8c75d635-fefd-467b-b4c8-a589ae97d6af/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3335",
    "nome": "CORTADOR DE UNHA NA CARTELA - DOCTOR Z - PACOTE 12 UNIDADE",
    "preco": 42,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2330a8c9-798b-4140-a8c2-65c5fdc50a0c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3674",
    "nome": "CUBO MÁGICO 5X5 CM",
    "preco": 2.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e76f3f4d-3aee-4eca-bb9c-6ba291d132c2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3714",
    "nome": "DESCASCADOR DE LEGUMES - MG1073",
    "preco": 49,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9da6226a-d959-4257-be9a-243b7bb6b0a2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3410",
    "nome": "DESCASCADOR DE LEGUMES - MG1074",
    "preco": 3.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/73e1185f-e371-4186-ab2d-67d300d7dc1c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3411",
    "nome": "DESCASCADOR DE LEGUMES - MG130",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a7099947-1e66-4599-9098-cd55696b03ab/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3571",
    "nome": "DISCO DE CORTE 2 ANEIS - DIAMANTADO - FBG-3091",
    "preco": 11.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/853370d2-01b1-458a-9d9a-6b0677778550/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3537",
    "nome": "DISCO DE CORTE DE MADEIRA 24 DENTES - FBG - 3090",
    "preco": 10.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/52a7b2e1-95ca-4d6e-9525-08e1b70e90db/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3572",
    "nome": "DISCO DE CORTE DE METAL COM 10 PEÇAS - FBG - 3094",
    "preco": 24.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/258d63b8-f766-4c50-875b-901552fab7e0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3682",
    "nome": "DRAGÃO - REINO DOS DRAGÕES - ZEIN - ART BRINK - Q9899",
    "preco": 10.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a563c1f3-4605-46ee-bafb-04734d2de0cd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3680",
    "nome": "DRAGÃO MUNDO MEDIEVAL - 16 CM- ZB300",
    "preco": 9.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9be59815-3acd-47a0-a999-033a2e2733e3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3272",
    "nome": "ELÁSTICO DE CABELO 0106 - COM 12 PACOTE",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/96aff181-3c8a-4ffe-867a-505f5478a5f2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3268",
    "nome": "ELÁSTICO DE CABELO C/ BOLINHA COLORIDO 10187 - COM 12 PACOTE",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/19f47df6-71f7-4ad7-aadd-0929200e3317/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3271",
    "nome": "ELÁSTICO DE CABELO C/ ESTAMPA COR CLARA 0030 - COM 12 PACOTE",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/12b49f9c-5581-46be-a89c-c0548e212438/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3629",
    "nome": "ELASTICO DE CABELO C/ ESTAMPA COR ESCURA 2380 - COM 12 PACOT",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e2324bfb-eab6-4c89-ad95-83de106ef9d2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3270",
    "nome": "ELÁSTICO DE CABELO C/ ESTAMPA COR ESCURA 6034 - C/ 12 PACOTE",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/28f44f88-2b4e-4f74-aa09-6a5f60a381c9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3267",
    "nome": "ELÁSTICO DE CABELO COLORIDO 6022 - COM 12 PACOTE",
    "preco": 22,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2741275c-64c3-4a71-b879-33d0d95a2d1d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3624",
    "nome": "ELÁSTICO DE CABELO COLORIDO COM BOLINHA 6034 - C/ 12 PACOTE",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bced865f-dbce-46da-9ba7-e6de2967d01b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3269",
    "nome": "ELÁSTICO DE CABELO COLORIDO COR ESCURA 8501 - COM 12 PACOTE",
    "preco": 18,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8654b4f1-57ce-40d1-883e-fcd85c719ce5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3634",
    "nome": "ELASTICO DE CABELO COM BOLINHA - COR COLORIDO - C 12 PACOTE",
    "preco": 25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2f0b6269-c5cb-4511-9dcf-6ee09485004a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3635",
    "nome": "ELASTICO DE CABELO COM BOLINHA - COR ESCURA - C 12 PACOTE",
    "preco": 25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0a6e555b-4f02-4993-a533-b713fb9991e0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3636",
    "nome": "ELASTICO DE CABELO COM BOLINHA - PRETO E BRANCO - COM 12 PT",
    "preco": 5.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fb0c0396-4493-4ecc-8b5a-7c1be99d4890/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3266",
    "nome": "ELÁSTICO DE CABELO PRETO 6023 - COM 12 PACOTE",
    "preco": 22,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9daffb98-d0e7-4383-9463-43b21777d9f4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3628",
    "nome": "ELASTICO SILICONE - CARTELA COM 12 PACOTE - 0090",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3e2d6d62-52e5-4bdd-82d5-f50a83a1dc13/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3626",
    "nome": "ELASTICO SILICONE 202388 - COM 12 PACOTE",
    "preco": 17,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/646ce66f-c162-4042-b93a-217044aa481f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3627",
    "nome": "ELASTICO SILICONE 3199 - CARTELA COM 6 PACOTE",
    "preco": 8.2,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e65c6ed3-faf9-40cc-9669-447ada86aff3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3630",
    "nome": "ELASTICO SILICONE 6086 - CARTELA COM 12 PACOTE",
    "preco": 17,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e18ddf41-b6c7-4338-8e8b-06264a033ba9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3265",
    "nome": "ELÁSTICO SILICONE 6890 - CARTELA COM 5 PACOTE",
    "preco": 15.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e67c1dda-d592-431e-98db-11b09c0e6d5f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3742",
    "nome": "ESCOVA DENTAL ADULTO BLACK",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a901937f-a57e-4282-9eac-8b80b8de1a5e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3329",
    "nome": "ESCOVA DENTAL ADULTO ORAL Z EXTRA CLEAN",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a61c0737-a5cf-49e9-8cfc-7081d0646224/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3330",
    "nome": "ESCOVA DENTAL ADULTO ORAL Z SLIM",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b0db4a73-4d75-44fc-bfd8-6dfa05b188b4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3331",
    "nome": "ESCOVA DENTAL INFANTIL ORAL Z CARROS",
    "preco": 30.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/91d66f22-fb2b-460e-a0eb-a311a8df6ba8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3332",
    "nome": "ESCOVA DENTAL INFANTIL ORAL Z PRINCESAS",
    "preco": 30.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e0dcc35d-ede6-4a4d-b0d0-17b678351c77/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3685",
    "nome": "ESCUMADEIRA SILICONE CLASS - LINHA PRIME - ZEIN",
    "preco": 9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/47452494-a023-4022-85ac-fe2bbacefd84/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3649",
    "nome": "EXTENSÃO 3 METROS - ELETRO G3",
    "preco": 12.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7834ef73-9393-40e5-86ef-051a53e6b157/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3648",
    "nome": "EXTENSÃO 5 METROS - ELETRO G3",
    "preco": 14.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/47a136d8-ad60-49cb-979b-1732c09df416/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3049",
    "nome": "EXTENSOR BOR TRAD G/P MESCLA 2,00 MT - PACOTE C/ 10 UN",
    "preco": 30,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c0069343-1c04-4683-a8eb-2ecfeb813fe1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3048",
    "nome": "EXTENSOR BORD TRAD G/P MESCLA 1,50 MT - PACOTE C/ 10 UN",
    "preco": 28,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/33a18302-6627-45e0-b87a-6dfa6267e22c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3717",
    "nome": "EXTENSOR ELÁSTICO - GANCHOS DE PLÁSTICO - 2M - TP1020",
    "preco": 30,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/dc900a84-dc93-4678-a665-21a243985627/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3718",
    "nome": "EXTENSOR ELÁSTICO - GANCHOS DE PLÁSTICO - 3M - TP1030",
    "preco": 38,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3a83e83b-ac76-455a-bc6e-ba8ccefe464e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3051",
    "nome": "EXTENSOR SILICONE G/P 1,5 MT MULTI CORES - PACOTE C/ 10 UN",
    "preco": 36.4,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8ff2417f-5a03-4b69-bcb5-22c256b3062f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3052",
    "nome": "EXTENSOR SILICONE G/P 2,0 MT MULTI CORES - PACOTE C/ 10 UN",
    "preco": 42.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/91d58787-2f3c-41b1-830b-2e52f8bca727/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3128",
    "nome": "FACA 6 STARHOUSE PREMIUM - BS0068",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6a4163c2-88e2-4f70-8b18-513d049a2479/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3127",
    "nome": "FACA 6 STARHOUSE SOFT - BS0083",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a4927270-071c-4742-8824-324fdebf8c27/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3126",
    "nome": "FACA 8 STARHOUSE COLOR -",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/13da4516-6835-4e92-b6e6-af3d541aa972/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3124",
    "nome": "FACA DE PÃO 8\" STARHOUSE PREMIUM - BS0071",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6b56409b-4248-4721-a4cb-d0e4225d072a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3130",
    "nome": "FACA PROFISSIONAL 6 STARHOUSE PREMIUM - BS0058",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2c1f7696-18d6-4e6f-81ec-c631147e62d2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3129",
    "nome": "FACA PROFISSIONAL 8 STARHOUSE PREMIUM - BS0059",
    "preco": 17,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2f46fc77-ea11-4582-b399-b5687b28a07d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3609",
    "nome": "FILTRO DE LINHA 3 TOMADA - 1.2 METROS - ELETRO GM",
    "preco": 18.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b4f78a17-1409-487b-8614-aad634200e52/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3610",
    "nome": "FILTRO DE LINHA 5 TOMADAS - 3 METROS - ELETRO G3",
    "preco": 35.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/81cd61a7-294f-4313-aaba-5e924bf47a24/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3608",
    "nome": "FILTRO DE LINHA 5 TOMADAS - 5 METROS - ELETRO G3",
    "preco": 38.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fcb2465c-e30a-40d7-9c26-3d1adbf3e58a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3404",
    "nome": "FITA ISOLANTE PRETA - PACOTE COM 10UN - FBG - 3030",
    "preco": 14.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0d77a3ca-fe35-4cb8-ac58-886a5319e4e0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3595",
    "nome": "FONE DE OUVIDO BLUETOOTH - H MASTON - LY-101 PRO",
    "preco": 45,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/45b4ab29-ff76-425e-9a08-ccb4bd6e1df6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3117",
    "nome": "FONE DE OUVIDO BLUETOOTH H-MASTON - LY - 17 MINI",
    "preco": 38,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/82579596-87a4-42e2-bbd2-4087edf3feb3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3115",
    "nome": "FONE DE OUVIDO BLUETOOTH H-MASTON - LY-115",
    "preco": 95,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ee867db0-0c49-48ed-9d87-7a5a3e329bdf/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3116",
    "nome": "FONE DE OUVIDO BLUETOOTH H-MASTON - LY-122",
    "preco": 70,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ac9df02e-6307-49fa-81b1-3f104a68a335/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3258",
    "nome": "FONE DE OUVIDO BLUETOOTH H-MASTON - RS30",
    "preco": 75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bf26fe50-4b40-4e0e-b449-abedc380f06f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3580",
    "nome": "FONE DE OUVIDO BLUETOOTH I ONISTEK - TWS16",
    "preco": 42.15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/df191dd3-895a-4673-bd26-e0b83cc06070/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3113",
    "nome": "FONE DE OUVIDO COM MICROFONE H-MASTON - EJ-104",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/53c10525-4189-427e-8201-07151cbd9a96/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3111",
    "nome": "FONE DE OUVIDO COM MICROFONE SIMPLES - HMASTON",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e810f443-eeb7-4041-92ce-ca9b1e99d699/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3114",
    "nome": "FONE DE OUVIDO COM MICROFONE SIMPLES - HMASTON - C17",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8af59863-8c08-4bb8-8013-ee78e3a358cb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3066",
    "nome": "FONE DE OUVIDO ESTÉREO C/ MICROFONE - HMASTON - EJ-102",
    "preco": 7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4048a1db-da39-4e11-90bc-634debfdbaac/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3250",
    "nome": "FONE DE OUVIDO ESTÉREO H-MASTON EJ-103",
    "preco": 7.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4b7897ed-1f45-4a7a-8fc7-328ffc2f8b91/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3110",
    "nome": "FONE DE OUVIDO PARA IPHONE - P50 - HMASTON",
    "preco": 34,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/caa0ac2a-b596-4a7a-87e0-e8c881de785e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3256",
    "nome": "FONE DE OUVIDO PARA IPHONE HMASTON - EJ-82",
    "preco": 29.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8ef51f93-12ed-422d-96de-7b60b9ab047e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3041",
    "nome": "FONTE 12V - 2A - P4 - FBG - B200",
    "preco": 23,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/50e59288-558a-4da7-ab1f-a50ff48856a4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3057",
    "nome": "FONTE 5V - 2A - P4 - FBG - S100",
    "preco": 17,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/07280837-b5c7-477e-bbc7-4ad051b0c4b9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3585",
    "nome": "FONTE GRASEP 3V - 12V 3A 30W - 7 PLUGUES - D-536",
    "preco": 29.45,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/80dd5fda-e201-4f9d-abc7-f416f5dcaaa3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3273",
    "nome": "FONTE UNIVERSAL 120W 12-24V - 9 CONECTORES",
    "preco": 40,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ce73a344-80b7-4217-ba37-d00e846ddebd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3354",
    "nome": "FONTE UNIVERSAL IT-BLUE LE - 2561 3V -12V 7 PINOS",
    "preco": 39,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a89e5da7-512e-498d-88f3-183d50b8f68d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3485",
    "nome": "FONTE UNIVERSAL PARA NOTEBOOK GRASEP - 120W 12-24V - D-RR100",
    "preco": 37,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b99d0ca8-97a1-445b-b300-fcd470b915ac/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3249",
    "nome": "FONTE USB / USB TIPO C 38W HMASTON - GR-11",
    "preco": 29.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4144a42e-fef1-4147-9931-0eb213ae84a0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3481",
    "nome": "GUARDA-CHUVA - CETIN - COMPRIMENTO 56CM / MANUAL - G5088-16H",
    "preco": 19.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/684a1571-54b5-4805-94a1-767c0dcb6f17/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3466",
    "nome": "GUARDA-CHUVA - COMPRIMENTO 55CM - AUTOMATICO - G1654H",
    "preco": 21.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0b871f63-194b-4830-a11a-ac5010377f0e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3558",
    "nome": "GUARDA-CHUVA - COMPRIMENTO 57CM - MANUAL - F1816SD",
    "preco": 21.5,
    "imagem": "",
    "unidade": "UN"
  },
  {
    "sku": "3076",
    "nome": "GUARDA-CHUVA C TECIDO DUPLO MANUAL - G1816S",
    "preco": 22.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6a16049c-254b-4bf7-9a8f-4f61f1a925dc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3077",
    "nome": "GUARDA-CHUVA C TECIDO DUPLO SEMI AUTOMÁTICO - G1816Z",
    "preco": 23.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/06f45e61-9cf4-4502-8292-071241c3d231/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3500",
    "nome": "GUARDA-CHUVA COM 2 PANOS - F1816Z-G",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d8a113f4-e7de-472b-9953-299be2de1da1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3755",
    "nome": "GUARDA-CHUVA DOIS TECIDO 60CM- FBG - 4225",
    "preco": 27,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3195552a-a834-42bc-bad3-a13b548927de/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3482",
    "nome": "GUARDA-CHUVA INFANTIL - F5077G-P",
    "preco": 18,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ec88e3ca-6b0b-4461-88fc-b00a681a45d9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3075",
    "nome": "GUARDA-CHUVA INFANTIL - G1079A",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6f981394-9b2b-479c-b746-6dab97f314fb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3383",
    "nome": "GUARDA-CHUVA INFANTIL SEMIAUTOMÁTICO - G5079H-P",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7e49ff1e-d5ae-46d7-9822-d21f7b8a7916/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3371",
    "nome": "GUARDA-CHUVA PRETO - COMPRI. 75CM - MANUAL - F7160A-3",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3b90a0b6-cf2b-450f-bd71-6f12c7418d36/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3339",
    "nome": "GUARDA-CHUVA PRETO - COMPRI. 75CM - MANUAL - G7160-3",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/31c12b1f-99f1-4531-abda-9883eee16607/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3613",
    "nome": "GUARDA-CHUVA SEMIAUTOMATICO CETIN - FBG - 4220",
    "preco": 19.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ae8e3504-0980-4c7f-82b0-f03140a6f79a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3614",
    "nome": "GUARDA-CHUVA TECIDO DUPLO - FBG - 4223",
    "preco": 25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cea4e255-9190-45e4-b4b4-7438f7f2098a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3615",
    "nome": "GUARDA-CHUVA TECIDO DUPLO - FBG - 4224",
    "preco": 27,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b965cfe4-b400-4a19-af96-e09aa62d9527/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3501",
    "nome": "GUARDA-SOL - 200 CM - GS1602 - FS1602",
    "preco": 78.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bf1c59ec-faaa-4573-ba3e-b265ae8f26a5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3502",
    "nome": "GUARDA-SOL - 240 CM - GS2201 - FS2201",
    "preco": 107,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fd3e5afe-ddf7-4f51-8dd2-ce4b63d71824/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3650",
    "nome": "INTEROPITOR SOBREPOR - PACOTE COM 10 UN",
    "preco": 34,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4a119983-36b0-4101-8bf0-4fd5cdbd78c5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3529",
    "nome": "KIT ABRAÇADEIRA DE METAL - FBG - 3023",
    "preco": 10.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/69dcd24d-4dd8-4733-a1a2-426d84f6bf64/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3549",
    "nome": "KIT CHURRASCO WOOD 2PC (GARFO E FACA) - ZE006-XC301",
    "preco": 24.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/146683bd-7f7c-4c1e-853d-0ade3bf7dd1d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3734",
    "nome": "KIT COZINHA COM 9 PEÇAS",
    "preco": 15.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a8942d8a-7660-4910-ae36-eae51f2e5ba8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3545",
    "nome": "KIT ESGUICHO PARA MANGUEIRA COM BICO DE METAL - FBG - 3178",
    "preco": 22.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c9dfe630-b063-46d4-a01f-b28652e97285/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3098",
    "nome": "LÂMINA FEATHER PLATINUM - CARTELA C/ 60 LÂMINAS",
    "preco": 180,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c28d8b11-331c-4f5a-aeee-861c8494ce59/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3095",
    "nome": "LÂMINA LORD AZUL - CARTELA C/ 50 LÂMINAS",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4082e1e5-373f-493d-acd5-cbbd95dc4766/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3096",
    "nome": "LÂMINA SUPER MAX PLATINUM - CARTELA C/ 100 LÂMINAS",
    "preco": 40,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/eee20a6e-8e59-4746-99b0-77296fd6c668/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3097",
    "nome": "LÂMINA WILKINSON SWORD - CARTELA C/ 60 LÂMINAS",
    "preco": 40,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fad58fff-3b40-4bfb-951a-45ef320ae875/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3740",
    "nome": "LANÇA ÁGUA 20CM",
    "preco": 9.45,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cc56a52f-27ce-46d8-b13d-86cf4dd0ecf2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3671",
    "nome": "LANÇA ÁGUA 28CM",
    "preco": 13.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/da8cf072-2abd-41b3-8ca9-b7ce402bd495/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3673",
    "nome": "LANÇA BOLHA DE SABÃO DINOSSAURO",
    "preco": 13.15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/323f6e8e-0854-4f38-a797-2ab0ea883735/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3672",
    "nome": "LANÇA BOLHA DE SABÃO GOLFINHO",
    "preco": 15.4,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/50de20d3-3f6f-4a05-88f7-f8b59fad9766/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3733",
    "nome": "LANÇA BOLHA DE SABÃO PEIXINHO FRICÇÃO",
    "preco": 14.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/529437b9-b040-46d0-b3b3-63f8ad453e09/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3319",
    "nome": "LANTERNA RECARREGÁVEL - FBG - 606-1",
    "preco": 16.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8e730515-a04d-4275-acac-520baa7e4b2e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3751",
    "nome": "LANTERNA RECARREGÁVEL - FBG - 608-1",
    "preco": 16.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9075cdba-8863-4a60-91b2-8859f7dbbc50/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3317",
    "nome": "LANTERNA RECARREGÁVEL 1 LED 3W - FBG - 3368-1",
    "preco": 16.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ae188e5f-6f29-418f-97e9-de7e9eec8b8e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3318",
    "nome": "LANTERNA RECARREGÁVEL 1LED 3W - FBG - 555-1",
    "preco": 16.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b6aff0f1-15d0-43ad-8a7e-25507108e96f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3720",
    "nome": "LIXA DE UNHA - PACOTE COM 100 UNIDADES",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0b9d8648-861c-4aec-a7b6-6d80eb621008/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3681",
    "nome": "LOUSA MÁGICA COM CANETA - 13.5 X 20.5 CM",
    "preco": 8.3,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0ca24bb4-3a4b-49a5-b605-378e02961f82/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3665",
    "nome": "LUMINÁRIA DE EMERGÊNCIA RECARREGAVEL 30 LEDS - ALL - 50081",
    "preco": 28.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7bd1e3ba-8d10-4901-90a7-f6db31797757/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3264",
    "nome": "MAQUINA DE ACABAMENTO PROFISSIONAL 10W KEMEI - KM-700B",
    "preco": 85,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c28d5165-39f5-455b-aba9-53e4e5a5fe3f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3093",
    "nome": "MAQUINA MIYOTA",
    "preco": 17,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c7df54c3-1fd9-44bf-a4a9-4c396d46bd35/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3094",
    "nome": "MAQUINA PARA RELÓGIO DE PAREDE - EIXO 13MM",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f67efaa2-fba0-481a-9514-705b1c4027c0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3243",
    "nome": "MAQUINHA DE ACABAMENTO DALING - DL-1503-C",
    "preco": 59,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9519798b-e8ab-4c4e-97c7-5f785e2a7969/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3244",
    "nome": "MAQUINNHA DE ACABAMENTO WAIKIL - WK-1712",
    "preco": 83,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4280498c-7aad-4916-960e-1eae563736fd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3737",
    "nome": "MARTELO COM CABO EMBORRACHADO 27.5CM - FBG - 3060",
    "preco": 21,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/16c87941-a76f-4942-a774-37bfbf1a3f0c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3509",
    "nome": "MEIA ADULTO MASCULINO - 12 UNIDADES - KW1156",
    "preco": 32,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9c55e060-afa6-4976-b15a-6fc1b452a01e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3508",
    "nome": "MEIA ADULTO UNISSEX - 12 UNIDADE - KW1157-LS",
    "preco": 32,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f4ce8ccd-ce39-4b93-8cfb-02f5087d8058/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3748",
    "nome": "MINI BOLA DE FUTEBOL - TAM. 2 - YS - 37012",
    "preco": 13.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e4b75c73-522d-4592-81f6-80dec54b02f7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3620",
    "nome": "MINI PIRANHA - CARTELA COM 120 UN",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/548a1a39-7acf-43f3-a4e1-6969925a3606/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3579",
    "nome": "MINI PROCESSADOR DE ALIMENTOS KNUP -100 ML - KP - UD100",
    "preco": 18.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8e90e86c-b165-4ae9-b23c-f3fd974b9f33/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3341",
    "nome": "MOCHILA ADULTO COURO SINTÉTICO UNISSEX - MA0740",
    "preco": 85,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cfe9bee2-e7b8-43a4-957c-d2cd48571c2d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3348",
    "nome": "MOCHILA ADULTO COURO SINTÉTICO UNISSEX - MA0760-EF",
    "preco": 95,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/81b9c3c5-f497-4465-98b9-558bd8b7d678/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3468",
    "nome": "MOCHILA ADULTO MASCULINA - TAMANHO 47X33X14CM - BMA0310-4",
    "preco": 64,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/55a4b1da-3a64-4898-acb0-3dd501a715ea/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3467",
    "nome": "MOCHILA ADULTO MASCULINA - TAMANHO 47X33X14CM - BMA0710-4",
    "preco": 64,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/810aca53-dd60-474c-a7ad-b67e278e3128/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3448",
    "nome": "MOCHILA ADULTO MASCULINA, TAMANHO: 45x33x14CM - KMA0310-5C",
    "preco": 62,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5ac240ec-edb6-4de9-b126-e6b41b15de7d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3073",
    "nome": "MOCHILA ADULTO UNISSEX - BMA0707",
    "preco": 75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/3d77f3f5-cd7d-45dc-ade5-f3619f3b36ef/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3074",
    "nome": "MOCHILA ADULTO UNISSEX - BMA0717",
    "preco": 85,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c80ff9ea-12d8-4968-bc19-1ab3dfa7d7b8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3512",
    "nome": "MOCHILA FEMININA COURO SINTÉTICO FASHION BRAZIL",
    "preco": 36.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/311cbcd5-8bab-4324-8c1d-ea6eb3ef02b9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3453",
    "nome": "MOUSE COM FIO USB MF100 - MULTILASER - MO300",
    "preco": 8.63,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5d51214d-2f2b-412f-846a-3d79c8e3effe/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3380",
    "nome": "MOUSE ÓPTICO USB KANUP - KP-M611",
    "preco": 8.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/99cf3543-d91d-46c2-a8c6-119a2cd93fe7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3522",
    "nome": "MOUSE PAD SLIM MULTI - AC027",
    "preco": 5.4,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e2fd4b2c-83f3-4d8b-870e-84b002a749f2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3322",
    "nome": "MOUSE SEM FIO - FBG - M01",
    "preco": 39,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e07a00c7-2ae5-4f05-890b-86dd147e03f5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3316",
    "nome": "MOUSE SIMPLES COM FIO - FBG - 312",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c17bf2eb-6d9a-48e6-af94-9b34fd5df910/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3100",
    "nome": "NAVALHETE AÇO INOX SEKICH",
    "preco": 25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/861140df-a215-4b6c-880a-948f687001db/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3099",
    "nome": "NAVALHETE PROFISSIONAL SEKICH",
    "preco": 10,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f8547d23-201e-4957-9bb9-641191143659/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3683",
    "nome": "NÉCESSAIRE WASHBAG BOLSA - 30 X 21 X 12 CM",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fd1762ff-61ac-450e-9a1b-d33e6d658247/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3695",
    "nome": "ÓCULOS - FERRO",
    "preco": 7.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/201f2bb2-5b2a-4880-bd14-b48dad0ae7f3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3559",
    "nome": "ÓCULOS - PLÁSTICO",
    "preco": 7.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d3da54bd-bee3-449e-b492-2af43a0055aa/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3413",
    "nome": "PANO PARA LIMPEZA",
    "preco": 6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6531389e-e365-4924-84dd-41b40c36b9d1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3457",
    "nome": "PENDRIVE NANO PRETO 16GB - MULTILASER - PD054",
    "preco": 41,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d023334e-4223-4016-b899-cf02c75b0eef/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3456",
    "nome": "PENDRIVE NANO PRETO 8GB - MULTILASER - PD053",
    "preco": 29.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/51125e6d-2dff-40c9-85c4-f8b8209510f6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3523",
    "nome": "PENDRIVE TITAN PRETO 16GB",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/efee80ee-557a-47b2-adc1-7b9ae70e4e3f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3524",
    "nome": "PENDRIVE TITAN PRETO 32GB",
    "preco": 25.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/91c0b8d4-c23a-4f66-982a-a656c1e140c0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3459",
    "nome": "PENDRIVE TWIST PRETO 16GB - MULTILASER - PD588",
    "preco": 31.27,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2b7ef139-c610-435e-9fa6-42068de72b37/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3460",
    "nome": "PENDRIVE TWIST PRETO 64GB - MULTILASER - PD590",
    "preco": 41.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/36e66ad0-ddc5-4ef6-9856-0552c6e91ac2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3458",
    "nome": "PENDRIVE TWIST PRETO 8GB - MULTILASER - PD587",
    "preco": 25.27,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/73d74cc1-df12-4f1c-accd-9efac53d1be8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3715",
    "nome": "PENEIRA DE AÇO INOX - MG2711",
    "preco": 59,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/31b6372f-26e3-456a-8224-a5ec71c23ea0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3647",
    "nome": "PENEIRA DE AÇO INOX PARA PIA - PACOTE COM 20 UN",
    "preco": 2,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/dc590bee-6f61-4be8-a3a5-29aa0fc2a7d8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3713",
    "nome": "PENEIRA PARA RALO PIA DE INOX - MAG-093",
    "preco": 17.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f20b3b1e-70db-4c70-9247-baf74c79c02b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3387",
    "nome": "PILHA ALCALINA ALFACELL AA 1.5V - CAIXA C/ 30 UN",
    "preco": 67.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6c28a519-bedd-44ef-9d72-a8b0fd45e89c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3497",
    "nome": "PILHA ALFACELL COMUM PALITO AAA 1.5V - CAIXA COM 60 UNIDADES",
    "preco": 42,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/eb28e76f-eabb-4b32-b47a-d2268aed727d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3666",
    "nome": "PILHA ALFACELL COMUM PALITO AAA 1.5V - CARTELA COM 4 UN",
    "preco": 40.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7b23b78f-30e8-48b4-9169-4a71aa522e9b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3498",
    "nome": "PILHA ALFACELL COMUM PQ AA 1.5V - CAIXA COM 40 UNIDADES",
    "preco": 34,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c0fd6af0-00bc-4885-9018-0c14b98dbeda/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3667",
    "nome": "PILHA ALFACELL COMUM PQ AA 1.5V - CARTELA COM 4 UN",
    "preco": 46.3,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f1ada36d-96f9-4c83-988d-27a30aaffa72/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3388",
    "nome": "PILHA D COMUM AFACELL 1.5V - GRANDE - CAIXA C/ 24 UN",
    "preco": 81.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/84368f75-e978-4430-ad4d-2d89d6ef7925/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3474",
    "nome": "PILHA FBG AAA (PALITO) - CAIXA COM 60 UN - FBG-3AAA",
    "preco": 28.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/49237065-7507-4285-9d80-623aef4d201c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3710",
    "nome": "PINÇA - CARTELA COM 12 UN - DOCTOR Z",
    "preco": 8.3,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/79e604a7-74b0-4290-be88-ba4d194d0b71/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3557",
    "nome": "POCHETE ADULTO MASCULINO - TAMANHO 30X16X14CM - BC2115",
    "preco": 23.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5b7a49ee-122c-4899-a6a7-d31d279dcfc4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3489",
    "nome": "PROTETOR SOLAR PARABRISA 128X6",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a2c36a1e-43cf-4527-a449-ea8c7b24afcf/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3750",
    "nome": "PULVERIZADOR 2 LITROS - FBG - 3113",
    "preco": 27.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/25fd1006-2ea6-4b0e-a2a3-3c9522083463/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3632",
    "nome": "RABICO GRANDE",
    "preco": 18,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8d3bed87-60cc-411d-a155-25187525a06f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3631",
    "nome": "RABICO PEQUENO",
    "preco": 26,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/937f5074-815e-4058-a60a-4793a51b26c5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3236",
    "nome": "RÁDIO AUTOMOTIVO FBG MP3 COM COMANDO DE VOZ - FBG - 521",
    "preco": 135,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/dd4d5ef5-3066-4708-a5ea-e37e0b9da6a1/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3241",
    "nome": "RÁDIO AUTOMOTIVO FBG MP3 COM COMANDO DE VOZ - FBG - 930",
    "preco": 135,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/09807d58-6df2-4917-9ded-019998751b13/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3239",
    "nome": "RÁDIO AUTOMOTIVO FBG MP3 - FBG - 890",
    "preco": 135,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/46bd28cb-7b82-454e-bff8-7c2c1385013f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3240",
    "nome": "RÁDIO AUTOMOTIVO FBG MP3 - FBG - 925",
    "preco": 135,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4e816db3-8d83-41fb-adcf-129b661b698d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3357",
    "nome": "RÁDIO COMUNICADOR (WALK TALK) BF-777S - KAPBOM",
    "preco": 145,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/80c5a188-fcc1-4d4d-97ec-49a2f4ebaa3e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3576",
    "nome": "RÁDIO PORTÁTIL COM LANTERNA - 9 BANDAS - KAPBOM - KA - 1088",
    "preco": 79.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b56b70b5-21f8-45fc-8d44-1891b677591f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3575",
    "nome": "RÁDIO PORTÁTIL COM LANTERNA KAPBOM - KA - 8808",
    "preco": 102.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9fa53f55-6de7-46c6-b48a-4d955beff128/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3754",
    "nome": "RAQUETE ALFACELL MATA MOSQUITO RECARREGAVEL AZUL - AL10012",
    "preco": 25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5aec1979-9669-42ac-ad45-1b1616b0f692/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3689",
    "nome": "RAQUETE MATA MOSQUITO MZ - ZH-M005Y",
    "preco": 22.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/79e6d9f8-a2e1-42bd-9c1c-4f61b4eb9d5f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3050",
    "nome": "REDE CAPACETE CONV 35X35 PRETO",
    "preco": 6.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7747ae0f-5899-4df7-8f98-56e2d0ee8aeb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3662",
    "nome": "RELÓGIO AQUA - AQ - 81",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/031f3350-622c-425b-9fcf-14743fddc042/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3088",
    "nome": "RELÓGIO AQUA HD",
    "preco": 20,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/752c3bea-bf59-48a1-a681-8427cf09c6db/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3323",
    "nome": "RELÓGIO CASIO F-91W",
    "preco": 160,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8acf3a94-6d4a-482c-8a20-5ae75d60a0d7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3065",
    "nome": "RELOGIO DE MESA - DESPERTADOR QUADRADO",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c9476d29-34f1-4fcc-b28e-3498e9a86ee0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3394",
    "nome": "RELÓGIO DE PAREDE OITAVADO NATIVO - LISO - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f32f20d8-ca3b-4065-a228-26e3968b2027/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3391",
    "nome": "RELÓGIO DE PAREDE OITAVADO NATIVO GALO DE BARCELOS - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d4cbaf0e-c183-4882-a260-1449d1acee6d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3521",
    "nome": "RELOGIO DE PAREDE QUAD .CINZA - MAXTIME - MX-40019-5",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/91db1722-f618-495d-8302-8d9df0fd14f6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3519",
    "nome": "RELOGIO DE PAREDE QUAD. BRANCO - MAXTIME - MX-40018-8",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/13f8ac22-11ed-4371-a2b0-be986e738e32/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3520",
    "nome": "RELOGIO DE PAREDE QUAD. PRETO - MAXTIME - MX-40017-1",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7acad064-cf4f-4bd6-84a2-4e5a52d7d732/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3389",
    "nome": "RELÓGIO DE PAREDE QUADRADO NATIVO - CAFÉ - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d23eb50e-3108-4e56-8a17-c3a0637b0463/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3392",
    "nome": "RELÓGIO DE PAREDE QUADRADO NATIVO - LISO - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b117bab6-6a9f-4000-b648-69c6b404a5e5/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3396",
    "nome": "RELÓGIO DE PAREDE QUADRADO NATIVO - VAQUINHA - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1fea4097-e953-41bd-b329-5509beb8b8a7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3516",
    "nome": "RELOGIO DE PAREDE RED. BRANCO - MAXTIME - MX-40001-0",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ac3119f7-1ac4-41d9-9f3c-c514c35292e3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3518",
    "nome": "RELOGIO DE PAREDE RED. CINZA - MAXTIME - MX-40002-7",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a976552a-be0c-456c-a571-0c236eeb8d38/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3517",
    "nome": "RELOGIO DE PAREDE RED. PRETO - MAXTIME - MX-40003-4",
    "preco": 20.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/070e90dd-bd26-4236-8fd8-15d9126e0b23/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3390",
    "nome": "RELÓGIO DE PAREDE REDONDO NATIVO - FLORAL - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5529a0a6-3812-438f-8c50-d018adcc1513/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3395",
    "nome": "RELÓGIO DE PAREDE REDONDO NATIVO - FRUTA - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/780ac1f5-fdc9-4ec9-a3ee-c60a1f10b32b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3397",
    "nome": "RELÓGIO DE PAREDE REDONDO NATIVO - GALO DE BARCELOS - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c6e0e86e-d009-4bc0-bbdb-03d4ca09adc2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3393",
    "nome": "RELÓGIO DE PAREDE REDONDO NATIVO - LISO - MISTO",
    "preco": 23.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/fbb297a1-74cd-4ae4-ad72-42c74b322aa2/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3398",
    "nome": "RELÓGIO DE PAREDE REDONDO NATIVO - ROSE GOLD - BRANCO",
    "preco": 28,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d831f47a-1eed-4108-956f-e6d99fa8d431/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3399",
    "nome": "RELÓGIO DE PAREDE REDONDO NATIVO - ROSE GOLD - PRETO",
    "preco": 28,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/46eafcd8-4597-4ccf-889e-bc2445aa24ed/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3091",
    "nome": "RELÓGIO INFANTIL",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e238a905-99a9-4672-9a40-234de9b0c2c4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3092",
    "nome": "RELÓGIO INFANTIL SPORT",
    "preco": 12,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6b43a510-3fe1-43b0-9311-e099de6f8b8f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3089",
    "nome": "RELÓGIO SPORT QUADRADO",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/086deace-5a29-4efd-95ba-fcd60eb28e31/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3090",
    "nome": "RELÓGIO SPORT REDONDO TÍTULOS",
    "preco": 15,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8939f780-91f4-4db3-b6e0-8706d3588009/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3735",
    "nome": "ROBO TRANSFORMA CARRO",
    "preco": 15.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/93db85a2-2637-4544-b872-6b34e5396b66/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3712",
    "nome": "RODO PARA PIA - MG-015",
    "preco": 36,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b74daa64-0447-48f3-ab06-6d4404ffa46c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3488",
    "nome": "SACOLA ECOLOGICA DECORADA 45 X 50 X 18 CM",
    "preco": 12.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/81080a73-8004-4b76-bbc1-3a613adac245/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3470",
    "nome": "SOMBRINHA - COMPRIMENTO 63.5CM / MANUAL - G3689",
    "preco": 26,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0555be25-44a4-4661-977e-6bd8fe3b4e9c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3465",
    "nome": "SOMBRINHA COM PROTEÇÃO UV - COMPRIMENTO 53.5CM - F3154N",
    "preco": 13.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/28053f3d-169a-4816-9eaa-ef41cc98de1d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3616",
    "nome": "SOMBRINHA COM PROTEÇÃO UV - FBG - 4229",
    "preco": 13.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/84a59202-34cc-4ed2-b791-c6e3f12c3184/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3719",
    "nome": "SOMBRINHA DE CABO HASTE - 70CM - GDC 3709",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6f75d44d-44dd-432c-adbb-59ec26f0ab19/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3739",
    "nome": "SOMBRINHA DRODDRY - 70 CM - FDC3705DX",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/24a77f24-d28b-420e-b901-d714dce3be0c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3506",
    "nome": "SOMBRINHA DROPDRY - GDC3705JX",
    "preco": 29,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bd39b3ae-ac96-49ec-b957-13d5c0647626/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3338",
    "nome": "SOMBRINHA MANUAL - 8 VARETAS - G3154Y",
    "preco": 15.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bc32ed6c-7789-4395-a358-d907c880f474/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3340",
    "nome": "SOMBRINHA MANUAL 10 VARETAS - 70CM - GDC3705X - FDC3705X",
    "preco": 25.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5d8d065a-bc38-4f68-9d4e-9a4e6e1bef54/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3078",
    "nome": "SOMBRINHA PEQUENA MANUAL - G3954N",
    "preco": 11,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e8f3ef4e-c3c1-411a-8635-7632d07ae64f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3385",
    "nome": "SOMBRINHA PQUENA 7 VARETAS - G3157N",
    "preco": 14.7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/e2069a61-3341-496d-aa11-ee15c6cd5da8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3469",
    "nome": "SOMBRINHA SEMIAUTOMÁTICA 70 CM - G2220",
    "preco": 28.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c3baf907-57f7-47a6-b1a3-71e1bdae2125/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3247",
    "nome": "SUPORTE DE ESPELHO RETROVISOR DO CARRO - HMASTON - CJ-46",
    "preco": 23.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/b6ee4d54-5949-46cf-8903-dc970a424b8d/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3059",
    "nome": "SUPORTE DE TV UNIVERSAL FIXO CANAÃ - 10 A 72 POLEGADAS",
    "preco": 15.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/af900da9-a246-4879-9129-8af2766f9108/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3120",
    "nome": "SUPORTE PARA BICICLETA HMASTON - CJ-26",
    "preco": 24.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/4328d88c-c15d-48b0-b62b-e973b305bb7e/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3577",
    "nome": "SUPORTE PARA MOTO COM CARREGADOR USB - KAPBOM - KAP - C020",
    "preco": 24.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ad27e1e3-cbf4-4501-9f02-41b11e440733/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3248",
    "nome": "SUPORTE PARA MOTOCICLETE - HMASTON - CJ-37",
    "preco": 26.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/8aa304b0-a2eb-4bec-8680-19f0d0121bcc/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3709",
    "nome": "SUPORTE PARA TV FIXO - FBG - 3402",
    "preco": 16,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/1e8a629c-e328-46a8-8094-72b146d5bde3/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3119",
    "nome": "SUPORTE UNIVRSAL PARA MOTO H-MASTON - CJ-110",
    "preco": 39,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/cb92562f-b31f-4253-9388-e4654f80fbdb/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3118",
    "nome": "SUPORTE VEICULAR COM VENTOSA H-MASTON - CJ-13",
    "preco": 21.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/164e2098-3983-4ae0-9f8f-572c9de65cdd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3716",
    "nome": "TÁBUA PARA USO CULINÁRIO - 14X24CM - MG2969",
    "preco": 32.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d6219435-291f-4aac-a738-6e49273d6eac/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3257",
    "nome": "TECLADO SEM FIO VIA BLUETOOTH HMASTON - JP101",
    "preco": 62,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6fa9a86d-8f55-4ba8-99b8-263eb647071b/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3242",
    "nome": "TECLADO SIMPLES USB FBG - TEC10",
    "preco": 38,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/6c3cced8-8071-48f3-978b-7feab89114d0/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3732",
    "nome": "TESOURA BLACK RED MULTIUSO 7",
    "preco": 5.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/5616fa23-2654-4971-b336-e605e855e4c7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3731",
    "nome": "TESOURA BLACK RED MULTIUSO 8",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/759d5652-2bba-44f6-ba5d-c89d7672c0f4/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3721",
    "nome": "TESOURA INFANTIL - FSC1120 - CAIXA COM 12 UNIDADES",
    "preco": 34.8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/92422989-be83-4d89-865b-681a53a22496/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3346",
    "nome": "TESOURA LURS GRANDE MULTIUSO AÇO INOX 19,5 CM - PC2979",
    "preco": 7,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/bf620e63-400e-45e3-9509-60bd38a68c4f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3347",
    "nome": "TESOURA LURS GRANDE MULTIUSO AÇO INOX 24.1 CM - SC2999",
    "preco": 10.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/7e5f0281-b655-48aa-8a09-428384685033/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3661",
    "nome": "TOMADA BARRA TRIPLA 10 / 20 A PARA EXTENSÃO - NATICON",
    "preco": 12.75,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/f70e3fbb-8044-4ae2-9e50-d98451fb1168/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3655",
    "nome": "TOMADA PLUG FEMEA 20A",
    "preco": 4.6,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/9f4c19f8-14cb-4418-9bcb-1a3180414eb6/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3651",
    "nome": "TOMADA PLUG MACHO 10A",
    "preco": 4.25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/efda996c-1193-49de-a738-f3acfc6344ff/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3654",
    "nome": "TOMADA PLUG MACHO 20A",
    "preco": 5.45,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/0e2ed241-fd3a-45d1-9b51-d02b2fe67b4c/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3644",
    "nome": "TOMADA SOBREPOR PARA MADEIRA 10A - PACOTE COM 25 UN",
    "preco": 38.25,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/322f70e9-3310-4292-81a9-dcf58b3d1acd/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3343",
    "nome": "TRENA 5M - TR115",
    "preco": 6.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/ead8a0f4-69e3-470d-aab9-97d2dbdc31f9/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3344",
    "nome": "TRENA 7.5M - PN117",
    "preco": 10.9,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/2c7135fd-f814-4164-9204-2b43476d3cd7/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3263",
    "nome": "TRIPÉ DE SELFIE SEM FIO HMASTON - ZP11",
    "preco": 54,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/a4697152-6bfb-4e4f-8b36-e316c8aff93f/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3328",
    "nome": "TV BOX MXQ PRO 4k 5G",
    "preco": 140,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/072bf093-8554-4fd2-b123-f88cef5c701a/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3333",
    "nome": "VARAL PORTATIL REDONDO PLÁSTICO C/ 8 PRENDEDORES",
    "preco": 8,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/d54ccc56-afd6-4589-acbf-fdcab69c45c8/600.jpeg",
    "unidade": "UN"
  },
  {
    "sku": "3334",
    "nome": "VARAL PORTATIL RETANGULAR C/12 PRENDEDORES",
    "preco": 15.5,
    "imagem": "https://hiper-gestao.s3.amazonaws.com/a289da4e-133e-49be-be68-d1fe6430717f/imagem-de-produto/c5773d23-c6b0-4928-b61d-1aad7f6dd24c/600.jpeg",
    "unidade": "UN"
  }
];
// 👆 Certifique-se de manter o padrão ]; no final


// --- 2. CONFIGURAÇÕES ---
let carrinho = [];
let numeroPedido = Math.floor(Math.random() * 100000);
const WHATSAPP_LOJA = "5511999999999"; // <--- SEU NÚMERO AQUI

// --- 3. INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
    if (Array.isArray(produtos) && produtos.length > 0) {
        // Carregamento inicial otimizado
        renderProdutos(produtos);
    } else {
        document.getElementById("produtos").innerHTML = "<p style='padding:20px; text-align:center'>Cole a lista de produtos no script.js</p>";
    }
});

// --- 4. FUNÇÕES DE EXIBIÇÃO (AGORA OTIMIZADAS) ---

function renderProdutos(lista = produtos) {
  const div = document.getElementById("produtos");
  
  // Se a busca não encontrar nada:
  if (lista.length === 0) {
      div.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #888;">
            <i class="fas fa-search" style="font-size: 40px; margin-bottom: 10px; opacity: 0.5;"></i>
            <p>Nenhum produto encontrado.</p>
        </div>
      `;
      return;
  }

  // 🔥 OTIMIZAÇÃO DE PERFORMANCE:
  // Em vez de usar "innerHTML +=", criamos um array gigante e juntamos no final.
  // Isso faz o site carregar 600 produtos em milissegundos.
  
  const htmlBuffer = lista.map(p => {
    const idQtd = `qtd-${p.sku}`;
    
    // loading="lazy" faz a imagem só baixar quando aparece na tela
    return `
      <div class="produto">
        <div style="height: 180px; overflow: hidden; border-radius: 5px; display: flex; align-items: center; justify-content: center;">
            <img src="${p.imagem}" alt="${p.nome}" loading="lazy" onerror="this.src='https://via.placeholder.com/200?text=Sem+Foto'" style="max-height: 100%; max-width: 100%;">
        </div>
        <h3 title="${p.nome}">${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        
        <div class="qtd-selector">
            <button type="button" onclick="alterarQtd('${p.sku}', -1)">-</button>
            <span id="${idQtd}">1</span>
            <button type="button" onclick="alterarQtd('${p.sku}', 1)">+</button>
        </div>

        <button type="button" class="btn-add" onclick="adicionar('${p.sku}')">Adicionar ao Carrinho</button>
      </div>
    `;
  }).join('');

  // Atualiza a tela UMA VEZ SÓ
  div.innerHTML = htmlBuffer;
}

// BUSCA OTIMIZADA
function filtrarProdutos() {
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    
    // Se o termo for curto demais, não faz nada para economizar processamento
    // (Opcional, mas ajuda se a lista for gigante)
    
    const listaFiltrada = produtos.filter(produto => {
        // Verifica nome
        const nomeMatch = produto.nome && produto.nome.toLowerCase().includes(termo);
        // Verifica SKU (converte para string antes)
        const skuMatch = produto.sku && produto.sku.toString().toLowerCase().includes(termo);
        
        return nomeMatch || skuMatch;
    });

    renderProdutos(listaFiltrada);
}


// --- FUNÇÕES DE LÓGICA (CARRINHO E BOTÕES) ---

function alterarQtd(sku, mudanca) {
    const spanQtd = document.getElementById(`qtd-${sku}`);
    if(spanQtd) {
        let qtd = parseInt(spanQtd.innerText) + mudanca;
        // Garante que não fique menor que 1
        spanQtd.innerText = qtd < 1 ? 1 : qtd;
    }
}

function adicionar(sku) {
  // Procura o produto na lista original (mais seguro)
  const produto = produtos.find(p => String(p.sku) === String(sku));
  
  if (!produto) {
      console.error("Produto não encontrado:", sku);
      return;
  }

  const spanQtd = document.getElementById(`qtd-${sku}`);
  const qtd = parseInt(spanQtd.innerText);
  
  // Verifica se já tem no carrinho
  const itemIndex = carrinho.findIndex(i => String(i.sku) === String(sku));

  if (itemIndex > -1) {
    carrinho[itemIndex].qtd += qtd;
  } else {
    carrinho.push({ ...produto, qtd: qtd });
  }
  
  renderCarrinho();
  
  // Feedback visual rápido no botão (Opcional)
  const btn = event.target; // Pega o botão clicado
  const textoOriginal = btn.innerText;
  btn.innerText = "Adicionado!";
  btn.style.backgroundColor = "#03264c";
  btn.style.color = "white";
  setTimeout(() => {
      btn.innerText = textoOriginal;
      btn.style.backgroundColor = "";
      btn.style.color = "";
  }, 1000);

  // Reseta o contador visual para 1
  spanQtd.innerText = "1";
}

function renderCarrinho() {
  const div = document.getElementById("itensCarrinho");
  const totalDiv = document.getElementById("total");
  
  if (!div) return;
  div.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
      div.innerHTML = "<p class='carrinho-vazio'>Seu carrinho está vazio.</p>";
      if(totalDiv) totalDiv.innerHTML = "";
      atualizarBotaoFlutuante(); // Esconde botão mobile
      return;
  }

  carrinho.forEach((i) => {
    total += i.preco * i.qtd;
    div.innerHTML += `
      <div class="item" style="border-bottom: 1px solid #eee; padding: 10px 0; font-size: 13px;">
        <div style="display:flex; justify-content:space-between;">
            <strong>${i.nome}</strong>
            <span>x${i.qtd}</span>
        </div>
        <div style="color: #666; font-size: 11px;">SKU: ${i.sku}</div>
        <div style="text-align: right; margin-top: 2px;">
            R$ ${(i.qtd * i.preco).toFixed(2)} 
            <a href="#" onclick="remover('${i.sku}')" style="color: red; margin-left: 5px; text-decoration: none; font-weight:bold;">[X]</a>
        </div>
      </div>
    `;
  });
  
  if(totalDiv) totalDiv.innerHTML = `<h3 style="margin-top:15px; text-align: right; color: #03264c;">Total: R$ ${total.toFixed(2)}</h3>`;
  
  atualizarBotaoFlutuante();
}

function remover(sku) {
    const index = carrinho.findIndex(i => String(i.sku) === String(sku));
    if(index > -1) { 
        carrinho.splice(index, 1); 
        renderCarrinho(); 
    }
}

function atualizarBotaoFlutuante() {
    const btn = document.getElementById("btn-whatsapp"); 
    if(btn) {
        if (carrinho.length > 0) {
            btn.style.display = "block";
            const totalItens = carrinho.reduce((acc, item) => acc + item.qtd, 0);
            btn.innerHTML = `<i class="fas fa-check"></i> Ver Carrinho (${totalItens})`;
        } else {
            btn.style.display = "none";
        }
    }
}

function abrirModalMobile() {
    document.querySelector('.carrinho-area').scrollIntoView({ behavior: 'smooth' });
}


// --- 5. FINALIZAÇÃO E PDF ---

function finalizarPedido() {
  if (carrinho.length === 0) { alert("Carrinho vazio!"); return; }

  const inputNome = document.getElementById("inputNome");
  const inputLoja = document.getElementById("inputLoja");
  const inputCidade = document.getElementById("inputCidade");
  
  const nomeCliente = inputNome.value.toUpperCase().trim();
  const nomeLoja = inputLoja.value.toUpperCase().trim();
  const nomeCidade = inputCidade.value.toUpperCase().trim();

  if (nomeCliente === "" || nomeLoja === "" || nomeCidade === "") {
      alert("⚠️ ATENÇÃO:\n\nPreencha NOME, LOJA e CIDADE para continuar.");
      return;
  }

  gerarPDF(nomeCliente, nomeLoja, nomeCidade);
  
  let mensagem = `🔔 *NOVO PEDIDO - DNORTE*\n`;
  mensagem += `👤 Cliente: *${nomeCliente}*\n`;
  mensagem += `🏪 Loja: *${nomeLoja}*\n`;
  mensagem += `🏙️ Cidade: *${nomeCidade}*\n`;
  mensagem += `📄 Pedido Nº: ${numeroPedido}\n`;
  mensagem += `----------------------------\n`;
  
  let total = 0;
  carrinho.forEach(i => {
    mensagem += `📦 ${i.qtd}x [${i.sku}] ${i.nome}\n`;
    total += i.qtd * i.preco;
  });

  mensagem += `----------------------------\n`;
  mensagem += `💰 *TOTAL: R$ ${total.toFixed(2)}*\n\n`;
  mensagem += `📎 *Anexe o PDF gerado se possível.*`;

  const link = `https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

function gerarPDF(nomeCliente, nomeLoja, nomeCidade) {
  if (!window.jspdf) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Cabeçalho AZUL ESCURO
  doc.setFillColor(3, 38, 76); 
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22); 
  doc.text("DNORTE DISTRIBUIDORA", 105, 15, null, null, "center");
  doc.setFontSize(14); 
  doc.text("Catálogo Digital", 105, 25, null, null, "center");
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(`Pedido Nº: ${numeroPedido}`, 10, 50);
  doc.text(`Data: ${new Date().toLocaleDateString()}`, 10, 55);
  
  doc.setFont("helvetica", "bold");
  doc.text(`CLIENTE: ${nomeCliente}`, 10, 65);
  doc.text(`LOJA: ${nomeLoja}`, 10, 70);
  doc.text(`CIDADE: ${nomeCidade}`, 10, 75);
  
  let y = 85;
  doc.setFillColor(240, 240, 240); doc.rect(10, y-5, 190, 8, 'F');
  doc.text("QTD", 12, y);
  doc.text("SKU", 30, y);
  doc.text("PRODUTO", 70, y);
  doc.text("TOTAL", 180, y);
  
  y += 10;
  doc.setFont("helvetica", "normal");
  
  let totalGeral = 0;
  carrinho.forEach(i => {
    let subtotal = i.qtd * i.preco;
    totalGeral += subtotal;
    let nome = i.nome.length > 45 ? i.nome.substring(0, 42) + "..." : i.nome;
    
    if (y > 270) { doc.addPage(); y = 20; }

    doc.text(String(i.qtd), 12, y);
    doc.setFontSize(9);
    doc.text(String(i.sku), 30, y);
    doc.setFontSize(10);
    doc.text(nome, 70, y);
    doc.text(`R$ ${subtotal.toFixed(2)}`, 180, y);
    y += 8;
  });

  doc.line(10, y, 200, y); y += 10;
  doc.setFont("helvetica", "bold"); doc.setFontSize(14);
  doc.setTextColor(3, 38, 76);
  doc.text(`TOTAL A PAGAR: R$ ${totalGeral.toFixed(2)}`, 110, y);
  
  doc.save(`Pedido_${numeroPedido}_DNorte.pdf`);
}