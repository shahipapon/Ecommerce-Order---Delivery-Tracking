
//  console.log("dataset",document.getElementById("countDown").dataset.time)


let countDownTo_ = document.getElementById("countDown");
let orderEndTime = countDownTo_.dataset.time;

if(document.getElementById("li4").dataset.deliver=="true"){
    countDownTo_.innerHTML ="Product Delivered :) ";
    countDownTo_.style.color = "green";    
    //clearInterval(x);
}
else{
startCountDown()
};

var countDownDate = new Date(orderEndTime).getTime();

// Update the count down every 1 second
function startCountDown(){
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
        countDownTo_.innerHTML ="You Will get your Products within: "+ minutes + "m : " + seconds + "s ";
      // console.log(minutes + "m " + seconds + "s ")
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          // document.getElementById("demo").innerHTML = "EXPIRED";
          // console.log("expired")
          countDownTo_.innerHTML ="Sorry. We  tried our best. :( ";
          countDownTo_.style.color = "red";
        }
      }, 1000);
}