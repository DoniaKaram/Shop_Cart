
let row=document.querySelector(".row");
let cartProducts=document.querySelector(".cart-products");
let cartProductsDom=document.querySelector(".cart-products div");
let badge=document.querySelector(".badge");
let menu=document.querySelector(".menu");
let searchTitle=document.getElementById("searchTitle");
let searchCatogery=document.getElementById("searchCatogery");
console.log(searchTitle);
let  products=[
    {
        id:1,
        imageUrl:"images/product1.jpg",
        name:"T-shirt adidas",
        price:"80$",
        catogery:"fashion"

    },
    {
        id:2,
        imageUrl:"images/product2.jpg",
        name:"earpods",
        price:"150$",
        catogery:"phone accessories"

    }
    ,{
        id:3,
        imageUrl:"images/product3.jpg",
        name:"jacket",
        price:"120$",
        catogery:"fashion"

    }
    ,{
        id:4,
        imageUrl:"images/product4.jpg",
        name:"Adidas bottle",
        price:"50$",
        catogery:"Sport"

    }
    ,{
        id:5,
        imageUrl:"images/product5.jpg",
        name:"Glasses",
        price:"80$",
        catogery:"Men accessories"

    }
    ,{
        id:6,
        imageUrl:"images/product6.jpg",
        name:"Cap",
        price:"20$",
        catogery:"Men accessories"

    }
    ,{
        id:7,
        imageUrl:"images/product7.jpg",
        name:"bag adidas",
        price:"110$",
        catogery:"bag"

    }
    ,{
        id:8,
        imageUrl:"images/product8.jpg",
        name:"Shoe adidas",
        price:"80$",
        catogery:"Sport"

    },{
        id:9,
        imageUrl:"images/product9.png",
        name:"bag",
        price:"100$",
        catogery:"fashion"

    },
]
menu.addEventListener("click",openCart);
function drawItems(arr){
     let productUI=arr.map((item)=>{
        return `
        <div class="card  col-4  mt-5 mb-2 me-2" style="width: 18rem;">
        <img src="${item.imageUrl}" class="card-img-top" alt="product-1">
            <div class="card-body">
                <h5 class="card-title">Product : ${item.name}</h5>
                <p class="card-text">Price :  ${item.price}</p>
                 <p>Category : ${item.catogery}</p>
                    <div class="d-flex" style="justify-content: space-between;"> 
                        <button class="btn btn-primary add" onclick="addToCart(${item.id})">Add to cart</button>
                        <button class="btn btn-danger d-none remove"  >Remove from cart</button>
                        <a href="#" style="margin-left: auto; display: inline-block; "><i class="fas fa-heart" onclick="addToFavourite(${item.id})" style="font-size: 1.5rem; color: red;"></i></a>
                        
                        </div> 
            </div>
    </div>
        `
     })
     row.innerHTML=productUI;
}

drawItems(products);


let addedItem=localStorage.getItem("productsInCart")?JSON.parse(localStorage.getItem("productsInCart")):[];
if(addedItem)
{
    addedItem.map((item)=>{
        cartProductsDom.innerHTML+=`<p>${item.name}</p>`;
    });
    badge.style.display="block";
    badge.innerHTML=addedItem.length;
}
function addToCart(id)

{
   
   

    
    if(localStorage.getItem('email'))
    {
        addItem.style.display='none';
        removeItem.style.display='block';
        let choosenItem=products.find((item)=>item.id===id);
        console.log(choosenItem);
        cartProductsDom.innerHTML+=`<p>${choosenItem.name}</p>`;
        addedItem=[...addedItem,choosenItem];
        localStorage.setItem('productsInCart',JSON.stringify(addedItem));
        let badgeDom=document.querySelectorAll(".cart-products div p");
    
        badge.style.display="block";
        badge.innerHTML=badgeDom.length;
        
        
    }
    else
    {
        window.location="login.html";
          
    }
   
}

let favouriteItem=localStorage.getItem("favouriteInCart")?JSON.parse(localStorage.getItem("favouriteInCart")):[];
function addToFavourite(id)
{
    if(localStorage.getItem('email'))
    {
        let choosenItems=products.find((item)=>item.id===id);
        favouriteItem=[...favouriteItem,choosenItems];
        localStorage.setItem('favouriteInCart',JSON.stringify(favouriteItem));
    }
    else
    {
        window.location="login.html";
          
    }
   
}
function openCart()
{
   if( cartProductsDom.innerHTML!="")
   {
    
    if(cartProducts.style.display=="block")
    {
        cartProducts.style.display="none"
    }
    else
    {
        cartProducts.style.display="block";
    }
   }

}
let filterArray=[];
searchTitle.addEventListener("keyup",function(e){
    e.preventDefault();
    let search=this.value;
    filterArray=products.filter(function(val){
        if(val.name.includes(search))
        {
            
             return val.name;
        }

    });
   if(this.value="")
   {
    drawItems(products);
   }
   else
   {
    drawItems(filterArray);
   }
});
let fArray=[];
searchCatogery.addEventListener("keyup",function(e){
    e.preventDefault();
    let search=this.value;
    fArray=products.filter(function(val){
        if(val.catogery.includes(search))
        {
            
             return val.catogery;
        }

    });
   if(this.value="")
   {
    drawItems(products);
   }
   else
   {
    drawItems(fArray);
   }
});
