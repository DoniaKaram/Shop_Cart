let fname=document.querySelector('#fname');
let sname=document.querySelector('#sname');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let register_btn=document.querySelector('#register');

register_btn.addEventListener("click",function(e){
    e.preventDefault();
    if(fname.value==""||sname.value==""||email.value==""||password.value=="")
    {
        alert("please fill data");
    }
    else
    {
        localStorage.setItem("fname",fname.value);
        localStorage.setItem("sname",sname.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);
        setTimeout(()=>{
           window.location="login.html"
        },1500)

    }
});

