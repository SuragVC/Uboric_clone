import { navbar } from '../components/navbar.js'
let navbar_div = document.getElementById("header")
navbar_div.innerHTML = navbar();

import { product_nav } from '../components/navbar.js'
let lower_div = document.getElementById("product_div")
lower_div.innerHTML = product_nav()

import { footer } from '../components/footer.js';
document.querySelector('#footer').innerHTML = footer();


let data = JSON.parse(localStorage.getItem("cart_data"))
let data2 = data

let total_price = document.querySelector("#price_div")

let data_appender = document.getElementById("data_appender")

qtyCreater()





function qtyCreater() {
    data2.forEach(function (elem) {
        elem.qty = 1
        elem.first_price = elem.price
    })
    DisplayCart(data2)
}


function DisplayCart(datas) {

    data_appender.innerHTML = null
    datas.forEach(function (elem, index, data1) {
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
        let prices = document.createElement("h3")
        prices.innerText = elem.first_price

        div3.append(prices)

        let div4 = document.createElement("div")
        div4.setAttribute("class", "div4_cart")



        let div4_inside2 = document.createElement("div")
        let count_of_Qty = document.createElement("h4")
        count_of_Qty.innerText = elem.qty

        div4_inside2.append(count_of_Qty)

        let div4_inside1 = document.createElement("div")
        let add_button = document.createElement("h4")
        add_button.innerText = "+"
        div4_inside1.append(add_button)
        div4_inside1.addEventListener("click", function () {
            addQty(index)
        })


        let div4_inside3 = document.createElement("div")

        let remove_button = document.createElement("h4")
        remove_button.innerText = "-"
        div4_inside3.append(remove_button)
        div4_inside3.addEventListener("click", function () {

            removeQty(index)
        })

        div4.append(div4_inside1, div4_inside2, div4_inside3)


        let div5 = document.createElement("div")
        div5.setAttribute("class", "remove_btn_div")
        let remove_product = document.createElement("input")
        remove_product.type = "submit"
        remove_product.value = "REMOVE"

        remove_product.setAttribute("class", "remove_product")
        remove_product.addEventListener("click", function () {
            removeProduct(index)
        })
        div5.append(remove_product)

        main_div.append(div1, div2, div3, div4, div5)
        data_appender.append(main_div)
        totalShower(datas)
    })

}

function totalShower(data2) {
    total_price.innerHTML = null
    if (data2 == null || data2 == undefined || data2.length == 0) {
        let total_amt = document.createElement("h3")
        total_amt.innerText = "0"
        total_price.append(total_amt)
    } else {
        let total = 0;

        let total_amter = document.createElement("h3")
        data2.forEach(function (elem) {
            total = total + elem.price
        })
        console.log(total)
        total_amter.innerText = total
        total_price.append(total_amter)
    }
}

function addQty(i) {
    data2[i].qty++
    data2[i].price = data2[i].price + data2[i].first_price
    DisplayCart(data2)
}



function removeQty(i) {
    if (data2[i].qty > 1) {
        data2[i].qty--
        data2[i].price = data2[i].price - data2[i].first_price
        DisplayCart(data2)
    }
}

function removeProduct(i) {
    data.splice(i, 1)

    localStorage.setItem("cart_data", JSON.stringify(data))
    data2 = data
    DisplayCart(data2)
}