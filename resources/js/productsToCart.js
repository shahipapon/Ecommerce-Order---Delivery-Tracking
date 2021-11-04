// const axios = require('axios');
const { v4: uuidv4 } = require("uuid");

let adToCartBtn = document.querySelectorAll(".adtocart"); //ad to cart button
let countCart = document.querySelector(".badge"); //cart counter
let gotoCart = document.querySelector(".fa-shopping-cart"); //cart icon

let count = 0;

let totalprice = 0;

var cartStorage = {
  quantity: 0,
  totalPrice: 0,
  
  prod: [],
};

// let cartStorage = [];

adToCartBtn.forEach((element) => {
  element.addEventListener("click", () => {
    // element.style.cursor = 'not-allowed';

    // set shop id to local stoage
    setShopId(element.dataset.shopid)


    element.disabled = true; //disable button after aded id
    countCart.innerHTML = ++count;

    totalprice += parseInt(element.dataset.price);

    console.log(element.dataset.productname);
   
   makealert(element.dataset.productname);

    addDataToCart(
      count,
      totalprice,
      element.dataset.productname,
      element.dataset.price,
      element.dataset.productid,
      element.dataset.shopid
    );
  });
});

let addDataToCart = (quantity, totalprice, name, price, productid, shopid) => {
  cartStorage.quantity = quantity;
  cartStorage.totalPrice = totalprice;

  cartStorage.prod.push({
    Product: name,
    ProductPrice: price,
    ProductID: productid,
    ShopId: shopid,
  });
  // console.log("data: ", cartStorage);
};


let uuid = localStorage.getItem("uuid");

!uuid ? localStorage.setItem("uuid", uuidv4()) : console.log("You have an uuid");

gotoCart.addEventListener("click", () => {

  
  console.log("UUID0-", uuid);
  uuid = localStorage.getItem("uuid");
  console.log("UUID1-", uuid);

  
  //   console.log(JSON.stringify(cartStorage));
  if(cartStorage.quantity){
    localStorage.setItem("cartStorage", JSON.stringify(cartStorage));

    sendPostRequest();
  }
  else{
    window.location.href = `/cart`;
  }
  


  // window.location.href = `/cart`;
});

// document.getElementById("check").addEventListener("click", () => {
//   console.log("checking data...", cartStorage);
// });


function makealert(producName){
  toastr["success"]("Added To Cart",producName)

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}


const sendPostRequest = async () => {
  try {
      const resp = await axios
      .post("/cart", {
        uuid: uuid,
        cart: JSON.stringify(cartStorage),
      });
      // console.log(resp.data);
      window.location.href = `/cart`;
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};



function setShopId(id){
  localStorage.setItem("shopid", id) ;
}
// cartStorage
// let sto = localStorage.getItem("cartStorage");
// console.log("sotage-",JSON.parse(sto))
