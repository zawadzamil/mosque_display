var newDate = new Date();
var datetime =   new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString();;
document.getElementById('date').innerText = datetime

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}



let a;
let time;
setInterval(() => {
  a = new Date();
  let time = a.toLocaleTimeString();
 // time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  document.getElementById('time').innerHTML = time;
}, 1000);


// Date Day Finding
const weekday = ["Sun","Mon","TUE","WED","THU","FRI","SAT"];
const months = ["JAN","FEB","March","April","May","June","July","August","September","October","November","December"];
const dateBottom = document.getElementById('dateBottom')

const d = new Date();
let day = weekday[d.getDay()];
let month = months[d.getMonth()];
let date = d.getDate();
let year = d.getFullYear();




dateBottom.innerText = day +' '+month+ ' '+date +' ' +year;