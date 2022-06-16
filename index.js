import {navbar} from './component/navbar.js'
let navbar_div=document.getElementById("header")
navbar_div.innerHTML=navbar();


import {product_nav} from './component/navbar.js'
let lower_div=document.getElementById("product_div")
lower_div.innerHTML=product_nav()