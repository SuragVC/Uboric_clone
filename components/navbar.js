function navbar() {
    return ` <div id="top_header">
  

 
    <p>FOR ONLINE PAYMENT EXTRA RS-100 DISCOUNT ON ORDERS ABOVE RS-500</p>
      
    <div id="search_bar">
       <!-- <input type="search" id="search" placeholder="Search here...">
       <div id="search_logo"> -->
       <!-- <img src="./images/search.png" alt="" srcset=""> -->
       <input type="search" placeholder="Search here..."  id="search">
          <button onclick="search()"><img src="images/search.png"></button>     <!-- </div> -->
     
    </div>
   
    <a href="index.html"> <img id="uboric_logo" src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="" srcset="">  </a> <div id="user_logo_cart_logo">
       <a href="user.html"><img  id="user_logo" src="./images/profile-user.png" alt=""  ></a>
       <a href="cart.html"><img id="cart_logo" src="./images/shopping-cart.png" alt="" ></a>
       
    </div> 
  </div> `

}


function product_nav() {
    return `    <div id="categories_div">
    <a  id="product_link" href="index.html"><h3>HOME</h3></a>
    <a id="product_link" href="kitchentools.html"><h3>Products</h3></a>
    <a id="product_link" href="user.html"><h3>Customer/Guest login</h3></a>
    <h3>Merchant/Bulk Order</h3>
    <h3>Become A Seller</h3>
 
 </div>`
}












export { navbar, product_nav }