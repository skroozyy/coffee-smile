const products = [

{
name:"Espresso",
img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a",
size:"Kichik 15 000 so'm | Katta 20 000 so'm",
desc:"Kuchli klassik espresso, boy crema bilan."
},

{
name:"Americano",
img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
size:"Kichik 15 000 so'm | Katta 20 000 so'm",
desc:"Yumshoq ta'mli qora qahva."
},

{
name:"Long Black",
img:"https://images.unsplash.com/photo-1498804103079-a6351b050096",
size:"20 000 so'm",
desc:"Kuchli aroma va premium ta'm."
},

{
name:"Latte",
img:"https://www.walkingpalates.com/Images/hot-cappuccino-italian-breakfast-678.jpg",
size:"Kichik 20 000 so'm | Katta 25 000 so'm",
desc:"Sut ko'pikli yumshoq latte."
},

{
name:"Flat White",
img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",
size:"20 000 so'm",
desc:"Silliq teksturali qahva."
},

{
name:"Caffè Mocha",
img:"https://www.lofbergs.co.uk/wp-content/uploads/sites/3/2023/03/hot_orange_mocca.jpg",
size:"Kichik 25 000 so'm | Katta 30 000 so'm",
desc:"Shokolad va qahva uyg'unligi."
},

{
name:"Cappuccino",
img:"https://images.unsplash.com/photo-1534778101976-62847782c213",
size:"Kichik 20 000 so'm | Katta 25 000 so'm",
desc:"Latte art bilan kremli cappuccino."
},

{
name:"Raf Coffee",
img:"https://im.therecepts.com/recipes/1080/n/nd8tyhk_bBo_1080.jpg",
size:"Kichik 25 000 so'm | Katta 30 000 so'm",
desc:"Maxsus qaymoqli raf coffee."
},

{
name:"Affogato",
img:"https://tatlerasia.kz/uploads/1GettyImages-2211116873-6a0ac7625739d6.41280285.jpg",
size:"25 000 so'm",
desc:"Espresso va muzqaymoqli italyan desert."
},

{
name:"Glace",
img:"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
size:"Kichik 25 000 so'm | Katta 30 000 so'm",
desc:"Sovuq va mazali coffee desert."
},


{
name:"Hot Chocolate",
img:"https://images.unsplash.com/photo-1517578239113-b03992dcdd25",
size:"Kichik 20 000 so'm | Katta 25 000 so'm",
desc:"Issiq shokoladli ichimlik."
},


{
name:"Ice Coffee",
img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c",
size:"Kichik 17 000 so'm | Katta 23 000 so'm",
desc:"Muzli sovuq qahva."
},


{
name:"Ice Coffee with Milk",
img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
size:"Kichik 25 000 so'm | Katta 30 000 so'm",
desc:"Sutli muzli qahva."
},


{
name:"Frappuccino",
img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699",
size:"30 000 so'm",
desc:"Kremli sovuq premium coffee."
},


{
name:"Mojito",
img:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
size:"Kichik 15 000 so'm | Katta 20 000 so'm",
desc:"Yalpiz va limonli mojito."
},


{
name:"Smoothie",
img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888",
size:"Kichik 20 000 so'm | Katta 25 000 so'm",
desc:"Mevali yangi smoothie."
},


{
name:"Cocktail",
img:"https://www.barlist.app/wp-content/uploads/2026/04/Pina-Colada-From-Local-Recipe-to-National-Identity-in-Puerto-Rico.webp",
size:"Kichik 15 000 so'm | Katta 20 000 so'm",
desc:"Maxsus tayyorlangan cocktail."
},


{
name:"Fruit Tea",
img:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9",
size:"25 000 so'm",
desc:"Mevali issiq choy."
},


{
name:"Ginger Tea",
img:"https://images.unsplash.com/photo-1576092768241-dec231879fc3",
size:"20 000 so'm",
desc:"Zanjabilli foydali choy."
},


{
name:"Red Tea",
img: "https://xn--80abmmk8a7c.xn--p1ai/wa-data/public/blog/img/post-160-original.jpg",
size:"20 000 so'm",
desc:"Klassik qizil choy."
},


{
name:"Saffron Tea",
img:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
size:"20 000 so'm",
desc:"Za'faronli premium choy."
},


{
name:"Sea Buckthorn Tea",
img:"https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2",
size:"30 000 so'm",
desc:"Vitaminli maxsus choy."
},


{
name:"Teapot Tea",
img:"https://images.unsplash.com/photo-1563822249366-3efb23b8e0c8",
size:"40 000 so'm",
desc:"Katta choynakdagi premium choy."
}

];



const box=document.querySelector(".products");


products.forEach(product=>{


box.innerHTML += `

<div class="card">

<img src="${product.img}">

<h2>${product.name}</h2>

<p>⭐ 4.9</p>

<p>${product.desc}</p>

<strong>${product.size}</strong>

<br><br>

<button>
Buyurtma berish
</button>

</div>

`;


});