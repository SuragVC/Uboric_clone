import { navbar } from '../components/navbar.js'
let navbar_div = document.getElementById("header")
navbar_div.innerHTML = navbar();

import { product_nav } from '../components/navbar.js'
let lower_div = document.getElementById("product_div")
lower_div.innerHTML = product_nav()


let data = JSON.parse(localStorage.getItem("cart_data"))
console.log(data)

let data_appender = document.getElementById("data_appender")
let counter = 0;

function DisplayCart() {
    data.forEach(function(elem) {
        let main_div = document.createElement("div")

        let div1 = document.createElement("div")
        let img = document.createElement("img")
        img.src = elem.img
        div1.append(img)

        let div2 = document.createElement("div")
        let name = document.createElement("p")
        name.innerText = data.name
        div2.append(name)

        let div3 = document.createElement("div")
        let price = document.createElement("h3")
        price.innerText = data.price
        div3.append(price)

        let div4 = document.createElement("div")

        let div4_inside1 = document.createElement("div")

        let add_button = document.createElement("p")
        add_button.innerText = "+"
        div4_inside1.append(add_button)
        div4_inside1.addEventListener("click", function() {
            addQty(counter)
        })

        let div4_inside2 = document.createElement("div")
        let count_of_Qty = document.createElement("p")
        if (counter == 0) {
            count_of_Qty.innerText = "1"
        } else {
            count_of_Qty.innerText = counter
        }
        div4_inside2.append(count_of_Qty)

        let div4_inside3 = document.createElement("div")

        let remove_button = document.createElement("p")
        remove_button.innerText = "-"
        div4_inside3.append(remove_button)
        div4_inside3.addEventListener("click", function() {
            removeQty(counter)
        })

        div4.append(div4_inside1, div4_inside2, div4_inside3)


    })
}

function addQty() {


}

function removeQty(counter) {

}