let cart = [];
let total = 0;


// Savatchaga qo'shish

function addCart(product){

cart.push({
name: product,
price: getPrice(product)
});


updateCart();


alert(product + " savatchaga qo'shildi ☕");

}



// Narx olish

function getPrice(product){

let prices={

"Cappuccino":20000,
"Americano":15000,
"Espresso":15000,
"Latte":20000,
"Mocha":25000,
"Iced Coffee":17000,
"Mojito":15000

};


return prices[product] || 0;

}




// Savatchani yangilash

function updateCart(){

let box=document.getElementById("cart-items");

box.innerHTML="";

total=0;


cart.forEach((item,index)=>{


total+=item.price;


let p=document.createElement("p");


p.innerHTML=
`
${item.name} 
${item.price.toLocaleString()} so'm

<button onclick="removeCart(${index})">
❌
</button>
`;


box.appendChild(p);


});


document.querySelector("#cart h4").innerHTML=

"Jami: "+total.toLocaleString()+" so'm";



if(cart.length===0){

box.innerHTML="Bo'sh";

}


}




// O'chirish

function removeCart(index){

cart.splice(index,1);

updateCart();

}





// Buyurtma berish

document.querySelectorAll(".gold-btn")
.forEach(button=>{


button.addEventListener("click",()=>{


let message=

"Assalomu alaykum Coffee Smile. " +

"Buyurtma bermoqchiman.";



let url=

"https://t.me/barista_muhammadali?text="

+encodeURIComponent(message);



window.open(url,"_blank");


});


});






// Scroll animatsiya


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


}

);




document.querySelectorAll(
".product, section"
)
.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(40px)";

el.style.transition=
"1s";


observer.observe(el);


});





// Navbar smooth scroll

document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",(e)=>{


let target=
document.querySelector(
link.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});
