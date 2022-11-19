'use strict';


let hours = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let format = document.getElementById("format");

function time_piece() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let formats = "AM";

if(h > 12) {
    h = h -12;
    formats = "PM";
}

if(h < 10) {
    h = "0" + h;
}

if(m < 10) {
    m = "0" + m;
}

if(s < 10) {
    s = "0" + s;
}

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]


let today = new Date();
let dayName = days[today.getDay()];
dy.innerText = dayName + ", ";



let month = today.toLocaleString('default', {month:"long"});
mt.innerText = month;

let date = today.getDate();
dt.innerText = date + ", ";


let year = today.getFullYear();
yr.innerText = year;

    setInterval(function(){
        time_piece()
    }, 1000);
}
 
 time_piece()



 