import {navbar} from './component/navbar.js'
let navbar_div=document.getElementById("header")
navbar_div.innerHTML=navbar();

import {product_nav} from './component/navbar.js'
let lower_div=document.getElementById("product_div")
lower_div.innerHTML=product_nav()



let store_data= JSON.parse(localStorage.getItem("userData"))
console.log(store_data.password)
   
   let form = document.querySelector("form");

   form.addEventListener("submit",function(event){
   
    event.preventDefault()

    let data={
        
        email:form.email.value,

        password:form.password.value,
        
    };
    // console.log(data);

    
    if(store_data===null){
        alert("Please create an account");

    }else if(store_data.email===data.email && store_data.password===data.password){
    alert("User Successfully Verified")
      
      window.location.href="index.html"

        localStorage.setItem("login",JSON.stringify(datstore_a))
     
    }
    else{
        alert("User Does not exist");
       
    }

   })