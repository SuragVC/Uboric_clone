let Product_data = [{
        id: "1",
        img: "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-grey-shoptool-original-imafxu7e79mt5vkw.png",
        name: "Shoptool New Grocery Containers – 800...",
        price: 599.00
    },
    {
        id: "2",
        img: "https://www.uboric.com/wp-content/uploads/2020/12/handi-01-shoptool-original-imafw2fyakfmze5m.png",
        name: "Shoptool New Grocery Containers – 800 ",
        price: 599.00
    },
    {
        id: "3",
        img: "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-72.jpg",
        name: "Shoptool BPA Free 2 in 1 Storage Container with...",
        price: 349.00
    },
    {
        id: "4",
        img: "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-blue-shoptool-original-imafw2fyahryzhhf.png",
        name: "Shoptool Woman’s 1st Choice New Grocery...",
        price: 599.00
    },
    {
        id: "5",
        img: "https://www.uboric.com/wp-content/uploads/2020/10/ASCAS-1.png",
        name: "Shoptool Woman’s 1st Choice – 1100...",
        price: 999.00
    },
    {
        id: "6",
        img: "https://www.uboric.com/wp-content/uploads/2021/01/kitkat-1100ml-orange10-bluewhale-original-imafsz2gs3bwymf3.png",
        name: "SHOPTOOL New 10 Pieces – 1100...",
        price: 999.00
    },
    {
        id: "7",
        img: "https://www.uboric.com/wp-content/uploads/2021/01/handi-container-grey-speack-original-imafwzfwfq27fwgh.png",
        name: "SHOPTOOL Grocery Containers – 800 ml...",
        price: 949.00
    },
    {
        id: "8",
        img: "https://www.uboric.com/wp-content/uploads/2021/01/xllent9black1400ml-speack-original-imafymzd7q8wgmmf.png",
        name: "shoptool Grocery Containers – 900 ml...",
        price: 999.00
    },
    {
        id: "9",
        img: "https://www.uboric.com/wp-content/uploads/2020/10/CASS.png",
        name: "Shoptool Woman’s 1st Choice Unbreakable ",
        price: 989.00
    },
    {
        id: "10",
        img: "https://www.uboric.com/wp-content/uploads/2021/06/10.jpeg",
        name: "Shoptool ® Woman’s 1st choice 500 ml Plastic ",
        price: 899.00
    },
    {
        id: "11",
        img: "https://www.uboric.com/wp-content/uploads/2021/06/10-1.jpeg",
        name: "Shoptool ® Woman’s 1st Choice 900 ml ",
        price: 899.00
    },
    {
        id: "12",
        img: "https://www.uboric.com/wp-content/uploads/2021/06/200.jpeg",
        name: "Shoptool ® Woman’s 1st Choice 1400 ml",
        price: 1799.00
    },
    {
        id: "13",
        img: "https://www.uboric.com/wp-content/uploads/2021/06/1-1.jpeg",
        name: "Shoptool ® Woman’s 1st Choice 500 ml",
        price: 1249.00
    },
    {
        id: "14",
        img: "https://www.uboric.com/wp-content/uploads/2021/06/10-630-ml-container-shoptool-original-imafzpuav2pk2fhf.jpeg",
        name: "Shoptool Woman’s 1st Choice 630 ml",
        price: 899.00
    },
    {
        id: "15",
        img: "https://www.uboric.com/wp-content/uploads/2021/06/1-3.jpeg",
        name: "Shoptool Woman’s 1st Choice 700 ml",
        price: 499.00
    },
    {
        id: "16",
        img: "https://www.uboric.com/wp-content/uploads/2021/06/10-2.jpeg",
        name: "Shoptool Woman’s 1st Choice 700 ml",
        price: 499.00
    }
]
localStorage.setItem("Products_airtight", JSON.stringify(Product_data))
let Product_arr = JSON.parse(localStorage.getItem("Products_airtight"))
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