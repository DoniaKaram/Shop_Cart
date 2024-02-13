let userInfo=document.querySelector("#user-info");
let userDom=document.querySelector("#user");
let links=document.querySelector("#links");
let email=localStorage.getItem("email");
let fname=localStorage.getItem("fname");
let logout__btn=document.querySelector("#logout");
if(email)
{
    links.remove();
    userInfo.style.display="flex";
    userDom.innerHTML=fname;
}
logout__btn.addEventListener('click',function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="register.html"
     },1500)
});