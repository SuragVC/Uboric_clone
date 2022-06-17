let Product_data = [{
        id: "33",
        img: "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-92-1000x667.jpg",
        name: "10 pcs Shoptool Gas Lighter with New Printed Design",
        price: 449.00
    },
    {
        id: "34",
        img: "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-92.jpg",
        name: "Shoptool Gas Lighter with New Printed Design | 4pcs.| ",
        price: 299.00
    },
    {
        id: "35",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/GL-08.png",
        name: "1.5ft long Stainless Steel Regular",
        price: 149.00
    },
    {
        id: "36",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-08-40.jpg",
        name: "1ft 1.5ft combo (2qty each) Stainless Steel",
        price: 349.00
    },
    {
        id: "37",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-08-40.jpg",
        name: "1ft 1.5ft combo Stainless Steel Regular",
        price: 249.00
    },
    {
        id: "38",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/GL-07.png",
        name: "1ft long Stainless Steel Regular",
        price: 129.00
    },
    {
        id: "39",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-20_12-41-23.jpg",
        name: "PACK OF 2 Blue Stainless Steel Regular",
        price: "949.00"
    },
    {
        id: "40",
        img: "https://www.uboric.com/wp-content/uploads/2021/01/xllent9black1400ml-speack-original-imafymzd7q8wgmmf.png",
        name: "shoptool Grocery Containers – 900 ml...",
        price: 199.00
    },
    {
        id: "41",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/GL-12.png",
        name: "PACK OF 2 blue Stainless Steel...",
        price: 199.00
    },
    {
        id: "42",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/GL-10.png",
        name: "PACK OF 2 blue Stainless Steel...",
        price: 199.00
    },
    {
        id: "43",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-20_12-41-06.jpg",
        name: "PACK OF 2 Green Stainless Steel Regular...",
        price: 199.00
    },
    {
        id: "44",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/GL-14.png",
        name: "PACK OF 2 Green Stainless Steel ...",
        price: 199.00
    },
    {
        id: "45",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-09-03.jpg",
        name: "pack of 3 Stainless Steel Regular..",
        price: 199.00
    },
    {
        id: "46",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-09-00.jpg",
        name: "pack of 3 Stainless Steel Regular Gas..",
        price: 199.00
    },
    {
        id: "47",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-08-57.jpg",
        name: "pack of 3 Stainless Steel Regular Gas",
        price: 199.00
    }, {
        id: "48",
        img: "https://www.uboric.com/wp-content/uploads/2020/09/photo_2020-09-29_11-08-57.jpg",
        name: "pack of 6 (2qty each) Stainless Steel",
        price: 299.00
    }
]

localStorage.setItem("Products_gaslight", JSON.stringify(Product_data))
let Product_arr = JSON.parse(localStorage.getItem("Products_gaslight"))
let appender = document.querySelector("#append_products")

let arr_of_products = JSON.parse(localStorage.getItem("cart_data")) || []

displayProducts()

function displayProducts() {
    appender.innerHTML = null
    Product_arr.forEach(function(data) {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = data.img

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
            addtocart(data)
        })

        price_div.append(price_divinner, input)


        div.append(img, name, price_div)
        appender.append(div)
    })

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
let footer_div = document.querySelector("#footer")

import { footer } from "../components/footer.js";
footer_div.innerHTML = footer()