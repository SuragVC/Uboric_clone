let animated_div = document.querySelector("#animated_div")
let i = 0;
// ________________Array for showing in the advetisebar ↓__________________________
var arr_img = [{
        img_url: "https://i.im.ge/2022/06/14/rvnN1K.png"
    },
    {
        img_url: "https://i.im.ge/2022/06/14/rvvX74.png"
    },
    {
        img_url: "https://i.im.ge/2022/06/14/rvnD1L.png"
    }, {
        img_url: "https://i.im.ge/2022/06/14/rvnLZx.png"
    },
    {
        img_url: "https://i.im.ge/2022/06/14/rvn0by.png"
    }
]

// ___________________________Slideshow ↓______________________________________________
let img_first = document.createElement("img")
img_first.src = arr_img[0].img_url
animated_div.append(img_first)
i++
let time = setInterval(function() {
    if (i === arr_img.length) {
        i = 0;
    }
    animated_div.innerHTML = null
    let image = arr_img[i].img_url

    let img = document.createElement("img");
    img.src = image;
    animated_div.append(img);
    i++;
}, 1800)

let footer_div = document.querySelector("#footer")

import { footer } from "../components/footer.js";
footer_div.innerHTML = footer()