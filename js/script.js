// ===== LA ESQUINA DEL SABOR =====
// Fotos: nombre del producto -> archivo dentro de la carpeta img/
// (el nombre debe ser igual al del producto más abajo)
const IMG={
  "La Devoradora": "img/salchipapas/la-devoradora.jpg",
  "La Fundida": "img/salchipapas/la-fundida.jpg",
  "La Tracionera": "img/salchipapas/la-tracionera.jpg",
  "La Vaquera": "img/salchipapas/la-vaquera.jpg",
  "La Salchipapa": "img/salchipapas/la-salchipapa.jpg",
  "La Brutal": "img/salchipapas/la-brutal.jpg",
  "La Monstruosa": "img/hamburguesas/la-monstruosa.jpg",
  "La Tentación": "img/hamburguesas/la-tentacion.jpg",
  "La Rompe Dieta": "img/hamburguesas/la-rompe-dieta.jpg",
  "La Mixta": "img/hamburguesas/la-mixta.jpg",
  "La Bogotá": "img/hamburguesas/la-bogota.jpg",
  "La Amanecer": "img/hamburguesas/la-amanecer.jpg",
  "La Suprema Pollo": "img/hamburguesas/la-suprema-pollo.jpg",
  "La Crunchy": "img/hamburguesas/la-crunchy.jpg",
  "Completo Italiano XL": "img/completos/completo-italiano-xl.jpg",
  "Popcorn de Pollo y Papas": "img/salchipapas/popcorn-de-pollo.jpg",
  "As Tomate Mayo": "img/churrascos-as/as-tomate-mayo.jpg",
  "As Palta": "img/churrascos-as/as-palta.jpg",
  "As Italiano": "img/churrascos-as/as-italiano.jpg",
  "As Lucco": "img/churrascos-as/as-lucco.jpg",
  "Lata Coca Cola": "img/bebidas/lata-coca-cola.jpg",
  "Lata Pepsi": "img/bebidas/lata-pepsi.jpg",
  "Inka Kola chica": "img/bebidas/inka-kola-chica.jpg",
  "Guaraná chica": "img/bebidas/guarana-chica.jpg",
  "Coca Cola botella": "img/bebidas/coca-cola-botella.jpg",
  "Sprite botella": "img/bebidas/sprite-botella.jpg",
  "Fanta botella": "img/bebidas/fanta-botella.jpg",
  "Fruna botella": "img/bebidas/fruna-botella.jpg",
  "Coca Cola 1.5L": "img/bebidas/coca-cola-1-5l.jpg",
  "Inka Kola 1.5L": "img/bebidas/inka-kola-1-5l.jpg",
  "Agua Vital (con o sin gas)": "img/bebidas/agua-vital.jpg",
  "Perro Caliente Normal": "img/completos/perro-caliente-normal.jpg",
  "Perro Caliente Especial": "img/completos/perro-caliente-especial.jpg",
  "Completo Italiano": "img/completos/completo-italiano.jpg",
  "Pollo Broaster": "img/completos/pollo-broaster.jpg",
  "Papas Fritas Grandes": "img/completos/papas-fritas-grandes.jpg",
  "Papas Fritas Chicas": "img/completos/papas-fritas-chicas.jpg",
  "Primera Promocion · Barros Luco": "img/churrascos/1-barros-luco.jpg",
  "Segunda Promocion · Italiano": "img/churrascos/2-italiano.jpg",
  "Tercera Promocion · Completo": "img/churrascos/3-completo.jpg",
  "Cuarta Promocion · Experto": "img/churrascos/4-experto.jpg",
  "Primera · Promo Papas Chicas": "img/promos/1-promo-papas-chicas.jpg",
  "Segunda · Promo Pollo Broaster": "img/promos/2-promo-pollo-broaster.jpg",
  "Tercera · Promo Perro Normal": "img/promos/3-promo-perro-normal.jpg",
  "Cuarta · Promo Devoradora": "img/promos/4-promo-devoradora.jpg",
  "Quinta · Promo Italiano": "img/promos/5-promo-italiano.jpg",
  "Sexta · Promo Monstruosa": "img/promos/6-promo-monstruosa.jpg",
  "Séptima · Promo Suprema de Pollo": "img/promos/7-promo-suprema-de-pollo.jpg",
  "Octava · Promo Dúo": "img/promos/8-promo-duo.jpg",
  "Novena · Promo Amanecer": "img/promos/9-promo-amanecer.jpg",
  "Décima · Promo Popcorn": "img/promos/10-promo-popcorn.jpg"
};

// Aquí editas precios y productos
const CARTA=[
["promos","🔥 Promociones",null,[
["Primera · Promo Papas Chicas","2 papas fritas chicas + 2 bebidas en lata","7.500"],
["Segunda · Promo Pollo Broaster","2 pollo broaster + Coca Cola 1.5L","16.000"],
["Tercera · Promo Perro Normal","2 perros calientes normales + 2 bebidas en lata","7.500"],
["Cuarta · Promo Devoradora","2 salchipapas La Devoradora + Coca Cola 1.5L","18.000"],
["Quinta · Promo Italiano","2 completos italiano + 2 bebidas en lata","7.500"],
["Sexta · Promo Monstruosa","2 hamburguesas La Monstruosa + Coca Cola 1.5L","18.000"],
["Séptima · Promo Suprema de Pollo","2 hamburguesas La Suprema de Pollo + Coca Cola 1.5L","15.000"],
["Octava · Promo Dúo","2 salchipapas clásicas + Coca Cola 1.5L","12.000"],
["Novena · Promo Amanecer","2 hamburguesas clásicas + Coca Cola 1.5L","14.000"],
["Décima · Promo Popcorn","Popcorn de pollo y papas + 1 bebida en lata","5.200"]]],
["hamb","🍔 Hamburguesas","Todas con opción de papas fritas o papas hilo.",[
["La Monstruosa","Lechuga, tomate, queso gouda, carne casera, pollo a la plancha, chorizo ahumado, tocino y salsas caseras","8.000"],
["La Tentación","Lechuga, tomate, queso gouda, carne casera, huevo frito, chorizo ahumado, tocino y salsas caseras","7.500"],
["La Rompe Dieta","Lechuga, tomate, queso gouda, pechuga de pollo a la plancha, chorizo ahumado, tocino y salsas caseras","7.500"],
["La Mixta","Lechuga, tomate, queso gouda, carne casera, pollo a la plancha, tocino y salsas caseras","7.500"],
["La Bogotá","Lechuga, tomate, queso gouda, carne casera, cebolla caramelizada, tocino y salsas caseras","7.000"],
["La Amanecer","Lechuga, tomate, queso gouda, carne casera, huevo frito y salsas caseras","6.000"],
["La Suprema Pollo","Lechuga, tomate, queso gouda, pechuga de pollo a la plancha, huevo frito y salsas caseras","6.500"],
["La Crunchy","Lechuga, tomate, queso gouda, pechuga de pollo a la plancha, tocino y salsas caseras","6.500"]]],
["salchi","🍟 Salchipapas",null,[
["La Devoradora","Papas fritas, salchicha, chorizo ahumado, filete de pollo largo, tocino, huevo frito y salsas caseras","8.000"],
["La Fundida","Papas fritas, queso cheddar fundido, salchicha, filete de pollo a la plancha y salsas caseras","7.500"],
["La Tracionera","Papas fritas, salchicha, chorizo ahumado, carne burger, huevo frito y salsas caseras","7.500"],
["La Vaquera","Papas fritas, salchicha, carne burger, tocino y salsas caseras","7.500"],
["La Brutal","Papas fritas, salchicha, chorizo, tocino, queso amarillo rallado y salsas caseras","7.500"],
["La Salchipapa","Papas fritas, salchicha y salsas caseras","5.000"],
["Popcorn de Pollo y Papas","Popcorn de pollo crocante con papas fritas y salsas caseras","$4.000"]]],
["chur","🥩 Combos Churascos + Bebida","Todos incluyen 1 lata de bebida · Si quieres solo el churrasco, el precio va en cada descripción",[
["Primera Promocion · Barros Luco","Churrasco de vacuno con queso fundido + 1 lata de bebida · Churrasco Lucco solo $3.800","5.000"],
["Segunda Promocion · Italiano","Churrasco de vacuno con palta aplastada como crema, tomate y mayonesa + 1 lata de bebida · Churrasco Italiano solo $4.000","5.200"],
["Tercera Promocion · Completo","Churrasco de vacuno con queso fundido, tomate y mayonesa + 1 lata de bebida · Churrasco Completo solo $4.000","5.200"],
["Cuarta Promocion · Experto","Churrasco de vacuno con queso, palta aplastada como crema, tocino y mayonesa + 1 lata de bebida · Churrasco Experto solo $4.200","5.400"]]],
["ass","🥖 Churrascos As","Pan de completo largo · Preparado al momento · Todo con churrasco 100%",[
["As Tomate Mayo","Churrasco, tomate y mayonesa","3.800"],
["As Palta","Churrasco, palta y mayonesa","3.800"],
["As Italiano","Churrasco, tomate, palta y mayonesa (mayonesa base)","3.800"],
["As Lucco","Churrasco y queso derretido","3.500"]]],
["otros","🌭 Completos y más",null,[
["Perro Caliente Normal","Salchicha vienesa, ensalada rallada, papa hilo, queso amarillo rallado, choclo y salsas","2.500"],
["Perro Caliente Especial","Salchicha vienesa, ensalada rallada, papa hilo, queso amarillo rallado, choclo, tocino largo y salsas","2.800"],
["Completo Italiano","Salchicha vienesa, tomate en cuadros debajo de la palta, palta aplastada como crema, mayonesa y salsas","2.500"],
["Completo Italiano XL","Salchicha vienesa, tomate en cuadros debajo de la palta, palta aplastada como crema, mayonesa y salsas","4.500"],
["Pollo Broaster","Cuarto de pollo apanado peruano con papas fritas","7.000"],
["Papas Fritas Grandes","Porción grande","4.000"],
["Papas Fritas Chicas","Porción chica","2.500"]]],
["beb","🥤 Bebidas",null,[
["Lata Coca Cola","","1.500"],["Lata Pepsi","","1.500"],["Inka Kola chica","","1.700"],["Guaraná chica","","1.700"],
["Coca Cola botella","","1.700"],["Sprite botella","","1.700"],["Fanta botella","","1.700"],["Fruna botella","","800"],
["Coca Cola 1.5L","","2.500"],["Inka Kola 1.5L","","2.800"],["Agua Vital (con o sin gas)","","900"]]]
];
let n="",h="";
for(const [id,t,no,items] of CARTA){
n+=`<a href="#${id}">${t}</a>`;
h+=`<section id="${id}"><h2>${t}</h2>${no?`<p class="note">${no}</p>`:""}`+
items.map(([a,b,c])=>{const g=IMG[a]||"";const r=(id=="hamb"||id=="promos"),bb=id=="beb";const im=g?`<img class="${r?"r":bb?"b":""}" alt="${a}" src="${g}">`:"";return `<div class="it">${im}<div class="t"><b>${a}</b>${b?`<small>${b}</small>`:""}</div><span class="p">${/^[\d.]+$/.test(c)?"$"+c:c}</span></div>`}).join("")+`</section>`;
}
document.getElementById("nav").innerHTML=n;
document.getElementById("m").innerHTML=h;

// Flechas del menú de secciones y botón de subir
const nv=document.getElementById("nav"),nl=document.getElementById("nl"),nr=document.getElementById("nr"),up=document.getElementById("up");
function flechas(){nl.classList.toggle("off",nv.scrollLeft<5);nr.classList.toggle("off",nv.scrollLeft+nv.clientWidth>=nv.scrollWidth-5)}
nl.onclick=()=>nv.scrollBy({left:-180,behavior:"smooth"});
nr.onclick=()=>nv.scrollBy({left:180,behavior:"smooth"});
nv.addEventListener("scroll",flechas);window.addEventListener("resize",flechas);flechas();
window.addEventListener("scroll",()=>up.classList.toggle("show",window.scrollY>300));
up.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
