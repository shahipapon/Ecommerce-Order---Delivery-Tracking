console.log("setting time...")


//("Jan 5, 2022 15:37:25").getTime();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


let orderTime = {
    startTime : "",
    endTime : "",
    timeWithoutSec: ""
}


function AddMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
function DateFormat(date) {
  var days = date.getDate();
  var year = date.getFullYear();
  var month = date.getMonth();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var strTime = monthNames[month] + " " + days + ", " + year + " " + hours + ":" + minutes + ":" + seconds ;
  return strTime;
}
var now = new Date();
var next = AddMinutesToDate(now, 60);
// console.log(DateFormat(now));
// console.log(DateFormat(next));


orderTime.startTime = DateFormat(now);

orderTime.endTime = DateFormat(next);

console.log(orderTime.startTime);
console.log(orderTime.endTime);
console.log(JSON.stringify(orderTime));

document.getElementById("checkout").addEventListener('click',()=>{
    orderTime.startTime = DateFormat(now);
    orderTime.endTime = DateFormat(next);
    document.getElementById("orderTime").value =JSON.stringify(orderTime);
})





var countDownDate = AddMinutesToDate(now, 0).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
console.log(minutes + "m " + seconds + "s ")
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    console.log("expired")
  }
}, 1000);