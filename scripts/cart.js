import { navbar } from '../components/navbar.js'
let navbar_div = document.getElementById("header")
navbar_div.innerHTML = navbar();

import { product_nav } from '../components/navbar.js'
let lower_div = document.getElementById("product_div")
lower_div.innerHTML = product_nav()


let data = JSON.parse(localStorage.getItem("cart_data"))
let total_price = document.querySelector("#price_div")

let data_appender = document.getElementById("data_appender")
let counter = 1;
DisplayCart()
totalShower()

function DisplayCart() {
    data.forEach(function(elem, index) {
        let main_div = document.createElement("div")

        let div1 = document.createElement("div")
        let img = document.createElement("img")
        img.src = elem.img
        div1.append(img)

        let div2 = document.createElement("div")
        let name = document.createElement("h4")
        name.innerText = elem.name
        div2.append(name)

        let div3 = document.createElement("div")
        let price = document.createElement("h3")
        price.innerText = elem.price
        div3.append(price)

        let div4 = document.createElement("div")
        div4.setAttribute("class", "div4_cart")



        let div4_inside2 = document.createElement("div")
        let count_of_Qty = document.createElement("h4")
        count_of_Qty.innerText = counter

        div4_inside2.append(count_of_Qty)

        let div4_inside1 = document.createElement("div")
        let add_button = document.createElement("h4")
        add_button.innerText = "+"
        div4_inside1.append(add_button)
        div4_inside1.addEventListener("click", function() {
            counter++
            addQty(counter, elem, count_of_Qty)
        })


        let div4_inside3 = document.createElement("div")

        let remove_button = document.createElement("h4")
        remove_button.innerText = "-"
        div4_inside3.append(remove_button)
        div4_inside3.addEventListener("click", function() {

            removeQty(counter)
        })

        div4.append(div4_inside1, div4_inside2, div4_inside3)


        let div5 = document.createElement("div")
        div5.setAttribute("class", "remove_btn_div")
        let remove_product = document.createElement("input")
        remove_product.type = "submit"
        remove_product.value = "REMOVE"

        remove_product.setAttribute("class", "remove_product")
        remove_product.addEventListener("click", function() {
            removeProduct(elem)
        })
        div5.append(remove_product)

        main_div.append(div1, div2, div3, div4, div5)
        data_appender.append(main_div)
    })
}

function addQty() {

}



function removeQty(counter) {

}

function removeProduct() {

}

function totalShower() {
    total_price.innerHTML = null
    let total_amt = document.createElement("h3")

}