export const categories = [
    {
      category: 'pc-gamer',
      url: './assets/img/1(13).png'
    },
    {
      category: 'Home Office',
      url: './assets/img/1(1).png'
    },
    {
      category: 'Workstation',
      url: './assets/img/1(2).png'
    },
    {
      category: 'Periféricos',
      url: './assets/img/1(3).png'
    },
    {
      category: 'Hardware',
      url: './assets/img/1(4).png'
    },
    {
      category: 'Setup completo',
      url: './assets/img/1(5).png'
    },
    {
      category: 'Cadeira',
      url: './assets/img/1(6).png'
    },
    {
      category: 'acessorio',
      url: './assets/Assets_product/cooler.webp'
    },
    {
      category: 'Pc para Stream',
      url: './assets/img/1(25).png'
    }
  ]

export const imageUrls =  [
	{
		url: '../assets/img/1(10).png',
	},
	{
		url: '../assets/img/1(12).png'
	},
	{
		url: '../assets/img/1(5).png'
	},
	{
		url: '../assets/img/1(2).png'
	}
]

export const marca=
["UNYKA","NOX","NTECH","Neologic","INTEL","AMD"]
export const methodSearch=
  {
    marca:["UNYKA","NOX","NTECH","Neologic","INTEL","AMD"],
    processador:["Ryzen 5","AMD","Intel"],
    placa_de_video:["Radeon Vega 7","AMD","Intel"],
    memoria:["16GB","8GB","32GB"],
    HD:["1TB","2TB","500GB"],
    SSD:["120GB","240GB"]
  }


export const Stock={
  acessorios:[ {
    id:1,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER UNYKA GAMING AQUASTORM 240MM",
    cod_post:"082731",
    referencia:"UK352101",
    marca:marca[0],
    price:"66,90",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cooler.webp"
  },
  {
    id:2,
    tipo:"acessorio",
    category:"acessorio",
    name:"COOLER CPU NOX HUMMER H-120 ARGB WATERCOOLER 120MM",
    cod_post:"082731",
    referencia:"NXHUMMERH120ARGB",
    marca:marca[1],
    price:"66,90",
    desconto:"11%",
    quantidade:12,
    img:"../assets/Assets_product/4597_2___page_800_800.webp"
  },
  {
    id:3,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER CPU 360 ARGB + AUTO RGB LGA 1700 READY 394X120X52MM AMD/INTEL/UNIVERSAL SLAYER RX360 ARGB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[2],
    price:"100,90",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/rx360a40___page_800_800.webp"
  }, {
    id:6,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER UNYKA GAMING AQUASTORM 240MM",
    cod_post:"082731",
    referencia:"UK352101",
    marca:marca[2],
    price:"13%",
    desconto:"306,80",
    quantidade:12,
    img:"../assets/Assets_product/cooler.webp"
  },
  {
    id:4,
    tipo:"acessorio",
    category:"acessorio",
    name:"COOLER CPU NOX HUMMER H-120 ARGB WATERCOOLER 120MM",
    cod_post:"082731",
    referencia:"NXHUMMERH120ARGB",
    marca:marca[0],
    price:"66,90",
    desconto:"15%",
    quantidade:12,
    img:"../assets/Assets_product/4597_2___page_800_800.webp"
  },
  {
    id:5,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER CPU 360 ARGB + AUTO RGB LGA 1700 READY 394X120X52MM AMD/INTEL/UNIVERSAL SLAYER RX360 ARGB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[0],
    price:"100,90",
    desconto:"1%",
    quantidade:12,
    img:"../assets/Assets_product/rx360a40___page_800_800.webp"
  },],
  Pc_Gamer:[ {
    id:6,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    informations:{
    processador:"AMD Ryzen 5",
    marca:methodSearch.marca[3],
    price:"341060,90",
    desconto:"80%",
    memoria:"16GB",
    HD:"16GB",
    ssd:"240GB",
    placa_de_video:"AMD Ryzen 5 5600G",
    },
    quantidade:12,
    img:"../assets/img/1 (3).png"
  },
  {
    id:7,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    informations:{
    processador:"AMD Ryzen 5",
    marca:methodSearch.marca[2],
    price:"341060,90",
    desconto:"80%",
    memoria:"16GB",
    HD:"16GB",
    ssd:"240GB",
    placa_de_video:"AMD Ryzen 5 5600G",
    },
    quantidade:12,
    img:"../assets/img/1 (5).png"
  },
  {
    id:8,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    informations:{
    processador:"AMD Ryzen 5",
    marca:methodSearch.marca[1],
    price:"341060,90",
    desconto:"80%",
    memoria:"16GB",
    HD:"16GB",
    ssd:"240GB",
    placa_de_video:"AMD Ryzen 5 5600G",
    },
    quantidade:12,
    img:"../assets/img/1(1).png"
  },
  {
    id:9,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    informations:{
    processador:"AMD Ryzen 5",
    marca:methodSearch.marca[1],
    price:"341060,90",
    desconto:"80%",
    memoria:"16GB",
    HD:"16GB",
    ssd:"240GB",
    placa_de_video:"AMD Ryzen 5 5600G",
    },
    quantidade:12,
    img:"../assets/img/1(9).png"
  },
  {
    id:10,
    tipo:"pc-gamer",
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    informations:{
    processador:"AMD Ryzen 5",
    marca:methodSearch.marca[0],
    price:"341060,90",
    desconto:"80%",
    memoria:"16GB",
    HD:"16GB",
    ssd:"240GB",
    placa_de_video:"AMD Ryzen 5 5600G",
    },
    quantidade:12,
    img:"../assets/img/1(11).png"
  },
  {
    id:11,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    informations:{
    processador:"AMD Ryzen 5",
    marca:methodSearch.marca[3],
    price:"341060,90",
    desconto:"80%",
    memoria:"16GB",
    HD:"16GB",
    ssd:"240GB",
    placa_de_video:"AMD Ryzen 5 5600G",
    },
    quantidade:12,
    img:"../assets/img/1(12).png"
  },],
  processador:[{
    id:12,
    tipo:"processador",
    category:"Hardware",
    name:"Intel Core i3-12100F 3.3GHz c/ Turbo 4.3GHz LGA 1700",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"140,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  },
  {
    id:13,
    tipo:"processador",
    category:"Hardware",
    name:"Processador AMD Ryzen 5 3600 Hexa-Core 3.6GHz c/ Turbo 4.2GHz 36MB SktAM4",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[5],
    price:" 152,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  },
  {
    id:14,
    category:"processador",
    tipo:"Hardware",
    name:"CPU 10TH GENERATION INTEL CORE I5-10400F",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  },
  {
    id:14,
    tipo:"processador",
    category:"Hardware",
    name:"CPU 10TH GENERATION INTEL CORE I5-10400F",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  }],
  cadeiras:[ {
    id:15,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(16).png"
  }, {
    id:16,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(17).png"
  }, {
    id:17,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(18).png"
  }, {
    id:18,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(19).png"
  }],
  mouse:[
    {
      id:19,
      tipo:"mouse",
      category:"periféricos",
      name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/mouse/1(3).png"
    },
    {
      id:20,
      tipo:"mouse",
      category:"periféricos",
      name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/mouse/1(12).png"
    },
    {
      id:21,
      tipo:"mouse",
      category:"periféricos",
      name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/mouse/1(23).png"
    }, {
      id:22,
      tipo:"mouse",
      category:"periféricos",
      name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/mouse/1(16).png"
    },
  ],
  fones:[
    {
      id:23,
      tipo:"fones",
      category:"periféricos",
      name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/fones/1(2).png"
    },  {
      id:24,
      category:"periféricos",
      tipo:"fones",
      name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/fones/1(13).png"
    },
    {
      id:24,
      tipo:"fones",
      category:"periféricos",
      name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/fones/1(14).png"
    },
    {
      id:25,
      tipo:"fones",
      category:"periféricos",
      name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
      cod_post:"082731",
      referencia:"RX360A40",
      marca:marca[4],
      price:"154,000.00",
      desconto:"10%",
      quantidade:12,
      img:"../assets/Assets_product/fones/1(30).png"
    },
  ]
}




export const product=[
  {
    id:1,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER UNYKA GAMING AQUASTORM 240MM",
    cod_post:"082731",
    referencia:"UK352101",
    marca:marca[0],
    price:"66,90",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cooler.webp"
  },
  {
    id:2,
    tipo:"acessorio",
    category:"acessorio",
    name:"COOLER CPU NOX HUMMER H-120 ARGB WATERCOOLER 120MM",
    cod_post:"082731",
    referencia:"NXHUMMERH120ARGB",
    marca:marca[1],
    price:"66,90",
    desconto:"11%",
    quantidade:12,
    img:"../assets/Assets_product/4597_2___page_800_800.webp"
  },
  {
    id:3,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER CPU 360 ARGB + AUTO RGB LGA 1700 READY 394X120X52MM AMD/INTEL/UNIVERSAL SLAYER RX360 ARGB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[2],
    price:"100,90",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/rx360a40___page_800_800.webp"
  }, {
    id:6,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER UNYKA GAMING AQUASTORM 240MM",
    cod_post:"082731",
    referencia:"UK352101",
    marca:marca[2],
    price:"13%",
    desconto:"306,80",
    quantidade:12,
    img:"../assets/Assets_product/cooler.webp"
  },
  {
    id:4,
    tipo:"acessorio",
    category:"acessorio",
    name:"COOLER CPU NOX HUMMER H-120 ARGB WATERCOOLER 120MM",
    cod_post:"082731",
    referencia:"NXHUMMERH120ARGB",
    marca:marca[0],
    price:"66,90",
    desconto:"15%",
    quantidade:12,
    img:"../assets/Assets_product/4597_2___page_800_800.webp"
  },
  {
    id:5,
    tipo:"acessorio",
    category:"acessorio",
    name:"WATER COOLER CPU 360 ARGB + AUTO RGB LGA 1700 READY 394X120X52MM AMD/INTEL/UNIVERSAL SLAYER RX360 ARGB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[0],
    price:"100,90",
    desconto:"1%",
    quantidade:12,
    img:"../assets/Assets_product/rx360a40___page_800_800.webp"
  },
  {
    id:6,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    processador:"AMD Ryzen 5",
    marca:marca[3],
    price:"341060,90",
    desconto:"80%",
    quantidade:12,
    img:"../assets/img/1 (3).png"
  },
  {
    id:7,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[2],
    price:"661060,90",
    desconto:"80%",
    quantidade:12,
    img:"../assets/img/1 (5).png"
  },
  {
    id:8,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[0],
    price:"1060,90",
    desconto:"80%",
    quantidade:12,
    img:"../assets/img/1(1).png"
  },
  {
    id:9,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[3],
    price:"90060,90",
    desconto:"80%",
    quantidade:12,
    img:"../assets/img/1(9).png"
  },
  {
    id:10,
    tipo:"pc-gamer",
    category:"pc-gamer",
    name:"Pc Gamer AMD Ryzen 5 5600G 16GB (R) SSD 240GB, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[2],
    price:"23060,90",
    desconto:"80%",
    quantidade:12,
    img:"../assets/img/1(11).png"
  },
  {
    id:11,
    tipo:"pc-gamer",
    category:"Home Station",
    name:"Pc Gamer SSD 240GB, 500W 80 Plus, Neologic",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[3],
    price:"10060,90",
    desconto:"80%",
    quantidade:12,
    img:"../assets/img/1(12).png"
  },
  {
    id:12,
    tipo:"processador",
    category:"Hardware",
    name:"Intel Core i3-12100F 3.3GHz c/ Turbo 4.3GHz LGA 1700",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"140,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  },
  {
    id:13,
    tipo:"processador",
    category:"Hardware",
    name:"Processador AMD Ryzen 5 3600 Hexa-Core 3.6GHz c/ Turbo 4.2GHz 36MB SktAM4",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[5],
    price:" 152,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  },
  {
    id:14,
    category:"processador",
    tipo:"Hardware",
    name:"CPU 10TH GENERATION INTEL CORE I5-10400F",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  },
  {
    id:14,
    tipo:"processador",
    category:"Hardware",
    name:"CPU 10TH GENERATION INTEL CORE I5-10400F",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/img/5032037238731.webp"
  },
  {
    id:15,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(16).png"
  }, {
    id:16,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(17).png"
  }, {
    id:17,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(18).png"
  }, {
    id:18,
    tipo:"cadeira",
    category:"periféricos",
    name:"Cadeira Gamer Thunderx3 Tgc12 Preto/azul",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/cadeira/1(19).png"
  },
  {
    id:19,
    tipo:"mouse",
    category:"periféricos",
    name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/mouse/1(3).png"
  },
  {
    id:20,
    tipo:"mouse",
    category:"periféricos",
    name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/mouse/1(12).png"
  },
  {
    id:21,
    tipo:"mouse",
    category:"periféricos",
    name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/mouse/1(23).png"
  }, {
    id:22,
    tipo:"mouse",
    category:"periféricos",
    name:"Mouse Gamer HP G260 BLACK 2400 DPI USB",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/mouse/1(16).png"
  },
  {
    id:23,
    tipo:"fones",
    category:"periféricos",
    name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/fones/1(2).png"
  },  {
    id:24,
    category:"periféricos",
    tipo:"fones",
    name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/fones/1(13).png"
  },
  {
    id:24,
    tipo:"fones",
    category:"periféricos",
    name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/fones/1(14).png"
  },
  {
    id:25,
    tipo:"fones",
    category:"periféricos",
    name:"Headset Gamer Cougar Immersa Ti Stereo 3h300p40t.0001 Mic 9.7mm Retratil",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:marca[4],
    price:"154,000.00",
    desconto:"10%",
    quantidade:12,
    img:"../assets/Assets_product/fones/1(30).png"
  },

]

export const inform=[
  1,2,3,4,5,6,7,8,9,10
]
