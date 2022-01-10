var newDate = new Date();
var datetime =   new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString();;
document.getElementById('date').innerText = datetime


//Image Slider
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
  setTimeout(carousel, 3000); // Change image every 3 seconds
}


// Time For Clock
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

//Play Audio Function
function playFazar() {
  var audio =  new Audio('assets/audio/azanFaraz.mp3');
  audio.play();

}
//Play Audio Function
function play() {
  var audio =  new Audio('assets/audio/audio.mp3');
  
    
    console.log('Playing...')
    audio.play();
   
    

  
  

}

// Azan In Start Time
let at;
let timeT;
setInterval(() => {
  at = new Date();
  let timeT = a.toLocaleTimeString();
 // time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  document.getElementById('time').innerHTML = timeT;
  var time1 = moment().format("hh:mm")
  let fullTime = time1 + " "+ timeT.slice(-2);
  const fazar = document.getElementById('f-start').innerText;
  const duhur = document.getElementById('d-start').innerText;
  const asr = document.getElementById('a-start').innerText;
  const magrib = document.getElementById('m-start').innerText;
  const isha = document.getElementById('i-start').innerText;
 
 
  var resultFazar = fullTime.localeCompare(fazar);
  var resultDuhur = fullTime.localeCompare(duhur);
  var resultAsr = fullTime.localeCompare(asr);
  var resultMagrib = fullTime.localeCompare(magrib);
  var resultIsha = fullTime.localeCompare(isha);
  
  if(resultFazar==0)
  {
    playFazar();   
    
  }
  if(resultDuhur==0 || resultAsr==0 || resultMagrib==0 || resultIsha==0 )
  {
    play();
  }
 
  

}, 40000);