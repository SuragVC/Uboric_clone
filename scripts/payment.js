let pay = document.getElementById("payment")

pay.addEventListener("click", clicked)



function clicked() {
    event.preventDefault()

    let name = document.getElementById("fname").value

    let email = document.getElementById("email").value
    let adr = document.getElementById("adr").value
    let pincode = document.getElementById("pincode").value
    let cname = document.getElementById("cname").value
    let ccnum = document.getElementById("ccnum").value
    let expmonth = document.getElementById("expmonth").value
    let expyear = document.getElementById("expyear").value
    let cvv = document.getElementById("cvv").value

    if (name.value == "" || email.value == "" || adr.value == "" || pincode.value == "") {
        alert("Fill the Address boxes")
    } else {
        if (cname.value == "" || ccnum.value == "" || expmonth.value == "" || expyear.value == "" || cvv.value == "") {
            alert("Fill the Card Details")
        } else {
            alert("OTP Sent to registered Mobile Number")
            window.location.href = "./otp.html"
        }
    }

}

import { navbar } from '../components/navbar.js'
let navbar_div = document.getElementById("header")
navbar_div.innerHTML = navbar();

import { product_nav } from '../components/navbar.js'
let lower_div = document.getElementById("product_div")
lower_div.innerHTML = product_nav()