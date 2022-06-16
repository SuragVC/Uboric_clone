import {navbar} from './component/navbar.js'
let navbar_div=document.getElementById("header")
navbar_div.innerHTML=navbar();


import {product_nav} from './component/navbar.js'
let lower_div=document.getElementById("product_div")
lower_div.innerHTML=product_nav()




let form = document.querySelector("form");

form.addEventListener("submit" ,function(event){

    event.preventDefault();

    let data = {
        name : form.name.value,

        last_name: form.last_name.value,

        email: form.email.value,

        password: form. password.value,

    }

    

    // console.log(data)
    localStorage.setItem("userData", JSON.stringify(data));


           window.location.href = "user.html";
})


