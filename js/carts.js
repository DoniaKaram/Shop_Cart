
let row=document.querySelector(".row");
let Favourites=document.querySelector(".favourites");
function drawItemsUI(allProducts=[])
{
    
    let  products=JSON.parse(localStorage.getItem('productsInCart'))||allProducts;
    let productUI=products.map((item)=>{
        return `
        <div class="card  col-4  mt-5 mb-2 me-2"" style="width: 18rem;">
        <img src="${item.imageUrl}" class="card-img-top" alt="product-1">
            <div class="card-body">
                <h5 class="card-title">Product : ${item.name}</h5>
                <p class="card-text">Price :  ${item.price}</p>
                 <p>Category : ${item.catogery}</p>
                    <div class="d-flex" style="justify-content: space-between;"> 
                        <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove From cart</button>
                        <a href="#" style="margin-left: auto; display: inline-block;"><i class="fas fa-heart" style="font-size: 1.5rem; color: red;" id="100000" onclick="addFavourite(this.id)"></i></a>
                    </div> 
            </div>
    </div>
        `
     })
     row.innerHTML=productUI;
}
drawItemsUI();
function drawFavUI(allFavourites=[])
{
    
    let  favourites=JSON.parse(localStorage.getItem('favouriteInCart'))||allFavourites;
    let favouriteUI= favourites.map((item)=>{
        return `
        <div class="card  col-4  mt-5 mb-2 me-2"" style="width: 18rem;">
        <img src="${item.imageUrl}" class="card-img-top" alt="product-1">
            <div class="card-body">
                <h5 class="card-title">Product : ${item.name}</h5>
                <p class="card-text">Price :  ${item.price}</p>
                 <p>Category : ${item.catogery}</p>
                    <div class="d-flex" style="justify-content: space-between;"> 
                        <a href="#" style="margin-left: auto; display: inline-block;"><i class="fas fa-heart" style="font-size: 1.5rem; color: red;"  onclick="removeFromFav(${item.id})"></i></a>
                        
                    </div> 
            </div>
    </div>
        `
     })
     Favourites.innerHTML=favouriteUI;
}
drawFavUI();
function removeFromCart(id)
{
     
    if(localStorage.getItem('productsInCart'))
    {
        let  items=JSON.parse(localStorage.getItem('productsInCart'));
        let filteredItems=items.filter((item)=>item.id!==id);
        localStorage.setItem("productsInCart",JSON.stringify(filteredItems));
        drawItemsUI(filteredItems);
        alert("Item deleted ");
    }
}
function removeFromFav(id)
{
     
    if(localStorage.getItem('favouriteInCart'))
    {
        let  Items=JSON.parse(localStorage.getItem('favouriteInCart'));
        let filtereItems=Items.filter((item)=>item.id!==id);
        localStorage.setItem("favouriteInCart",JSON.stringify(filtereItems));
        drawFavUI(filtereItems);
        alert("Fav deleted ");
    }
}