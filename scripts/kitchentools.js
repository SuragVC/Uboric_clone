let Product_data = [{
        id: "17",
        img: "https://www.uboric.com/wp-content/uploads/2020/12/61q57KwueBL._SL1280_.jpg",
        name: "big shoptool vegetable chopper (900ml) purple",
        price: 249.00
    },
    {
        id: "18",
        img: "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-82-1000x1000.jpg",
        name: "500 ml Shoptool Compact Mini Vegetable",
        price: 199.00
    },
    {
        id: "19",
        img: "https://www.uboric.com/wp-content/uploads/2020/08/1.png",
        name: "Shoptool Fruit and Vegetable Chipser 11 Blades",
        price: 399.00
    },
    {
        id: "20",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/6112lAJ3NtL._SL1200_.jpg",
        name: "1st Time In India Dori Blender Multipurpose",
        price: 465.00
    },
    {
        id: "21",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/71I3R4zvlL._SL1500_.jpg",
        name: "2 in 1 Slap Chop Folding Fruit & Vegetable Cutting... ",
        price: 289.00
    },
    {
        id: "22",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/412Sh8obGvL.jpg",
        name: "2 in 1 Soap Pump Plastic Dispenser",
        price: 89.00
    },
    {
        id: "23",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/61XA0sdOLgL._SL1500_.jpg",
        name: "2 Layer Plastic Modular Drawer System...",
        price: 679.00
    },
    {
        id: "24",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/61fwB8qJ4rL._SL1500_.jpg",
        name: "3 in 1 Atta Maker Dough Maker, Vegetable...",
        price: 389.00
    },
    {
        id: "25",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/61GhzjnscGL._SL1080_-1000x677.jpg",
        name: "3 in 1 Large Durable Plastic Kitchen Sink..",
        price: 409.00
    },
    {
        id: "26",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/61I2W8slZmS._SL1280_-1000x787.jpg",
        name: "3 in 1 Plastic Dry Fruit and Paper Mill Grinder Slicer ",
        price: 139.00
    },
    {
        id: "27",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/51OzhBHOeaL._SL1024_.jpg",
        name: "4 in 1 Multipurpose Plastic 2 Spice and 2 Pickle",
        price: 198.00
    },
    {
        id: "28",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/61XzlTs7upL._SL1500_.jpg",
        name: "4 Layer Modular Drawer Storage Organiser...",
        price: 1251.00
    },
    {
        id: "29",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/71aVME3NX6S._SL1500_.jpg",
        name: "4 Layer Multipurpose Drawers Set Organiser",
        price: 1289.00
    },
    {
        id: "30",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/61nazEnZlXL._SL1280_.jpg",
        name: "4 pc Dry Fruit Serving Bowl Set With Tray",
        price: 465.00
    },
    {
        id: "31",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/51ABwzJu1L._SL1000_.jpg",
        name: "4 XL Multi-Purpose Modular Drawer ",
        price: 1084.00
    }, {
        id: "32",
        img: "https://www.uboric.com/wp-content/uploads/2021/12/71GPgp5ceGL._SL1500_.jpg",
        name: "5 Layer Modular Drawer Storage Organiser",
        price: 1409.00
    }
]
localStorage.setItem("Products_kitchen", JSON.stringify(Product_data))
let Product_arr = JSON.parse(localStorage.getItem("Products_kitchen"))
let appender = document.querySelector("#append_products")

let arr_of_products = JSON.parse(localStorage.getItem("cart_data")) || []

displayProducts()

function displayProducts() {
    appender.innerHTML = null
    Product_arr.forEach(function(data) {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = data.img


        img.addEventListener('click', function() {

            if (data.id === '17') {
                window.location.href = './productbuy.html';
            }

            if (data.id === '18') {
                window.location.href = './productbuy2.html';
            }

        });

        let name = document.createElement("h3")
        name.innerText = data.name

        let price_div = document.createElement("div")
        price_div.setAttribute("class", "price_div")

        let price_divinner = document.createElement("div")
        let price = document.createElement("h2")
        price.innerText = `₹${data.price}`
        price_divinner.append(price)
        let input = document.createElement("input")
        input.type = "submit"
        input.value = "ADD TO CART"
        input.setAttribute("class", "addtocartbtn")

        input.addEventListener("click", function() {
            checkCart(data)
        })

        price_div.append(price_divinner, input)


        div.append(img, name, price_div)
        appender.append(div)
    })

}


function checkCart(data) {
    let ans = false;
    if (arr_of_products.length == 0) {
        addtocart(data)
    } else {
        arr_of_products.forEach(function(elem) {
            if (elem.id == data.id) {
                ans = true;
            }
        })
        if (ans == false) {
            addtocart(data)
        } else {
            alerter()
        }
    }

}

function alerter() {
    alert("Item already in the cart")
}

function addtocart(datas) {
    arr_of_products.push(datas)
    localStorage.setItem("cart_data", JSON.stringify(arr_of_products))
    alert("Item added to Cart")
}


// ______________________________________________

let sort = document.getElementById("select")
sort.addEventListener("change", sorting);

function sorting() {
    if (sort.value == "high") {
        hightolow()
    }
    if (sort.value == "low") {
        lowtohigh()
    }
}



function hightolow() {

    Product_arr.sort(function(a, b) {
        return b.price - a.price;
    })
    displayProducts(Product_arr)

}

function lowtohigh() {
    Product_arr.sort(function(a, b) {

        return a.price - b.price;
    })
    displayProducts(Product_arr)
}
import { footer } from "../components/footer.js";
let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()



import { navbar } from '../components/navbar.js'
let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar();

import { product_nav } from '../components/navbar.js'
let lower_div = document.getElementById("product_navbar")
lower_div.innerHTML = product_nav()