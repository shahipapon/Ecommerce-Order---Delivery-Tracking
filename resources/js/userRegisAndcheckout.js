{/* <input type="hidden" id="uuiid"  name="uuiid" value="" >
<input type="hidden" id="product"  name="product" value="" >
<input type="hidden" id="shopid" name="shopid" value="" > */}



document.getElementById("product").value = localStorage.getItem("cartStorage");
document.getElementById("uuiid").value = localStorage.getItem("uuid");
document.getElementById("shopid").value = localStorage.getItem("shopid");



let mybtn = document.getElementById("checkout")


mybtn.addEventListener('click',()=>{
  
    // setTimeout(function(){ localStorage.clear(); }, 1000);
    localStorage.clear();


})

console.log("checkout...")