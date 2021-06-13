

var date = new Date();
var date1 = document.getElementById("days");
var day = date.getDay();
var hour = date.getHours();
var hours = document.getElementById('hours');
var minss = document.getElementById('mins');
var mins =date.getMinutes();

var secs = document.getElementById('seconds');
var seconds =date.getSeconds();
if(hour < 10){ 
    hour="0"+hour
 }
 if(mins < 10){ 
    mins="0"+mins
 }
 if(seconds < 10){ 
    seconds="0"+seconds
 }
 hours.innerHTML=hour
 minss.innerHTML = mins
 secs.innerHTML = seconds

switch(day){
    case 0:
        date1.innerHTML = "Sunday";
        break;
    case 1:
        date1.innerHTML = "Monday";
        break;
    case 2:
        date1.innerHTML = "Tuesday";
        break;
    case 3:
        date1.innerHTML = "Wednesday";
        break;
    case 4:
        date1.innerHTML = "Thursday";
        break;
    case 5:
        date1.innerHTML = "Friday";
        break;
    case 6:
        date1.innerHTML = "Saturday";
        break;
}

document.getElementById("btn").addEventListener('click',main)

function main() { 
    alert("Thanks for your Love and Support")
 }