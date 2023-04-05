// This is a JavaScript function called showTime() that displays the current time in the format of "hh:mm:ss AM/PM" in a web page.


function showTime(){

var date = new Date(); 

// The Date() function is used to create a new Date object representing the current date and time.

var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var ampm = "AM";

// The getHours(), getMinutes(), and getSeconds() methods are used to retrieve the hours, minutes, and seconds of the current time.
// The variable ampm is initialized as "AM" to indicate the time of day.


if (hour == 0){
    hour = 12;
}

if (hour > 12){

    hour = hour - 12;
    ampm = "PM"
}

// If the hours are equal to 0, it means that it's midnight, so the hours are set to 12.
// If the hours are greater than 12, it means that it's afternoon or evening, so 12 is subtracted from the hours and the ampm variable is set to "PM".


hour = (hour < 10 ) ? "0" + hour : hour
min = (min < 10) ? "0" + min : min
sec = (sec < 10 ) ? "0" + sec : sec

// The ternary operator is used to add a leading zero to the hours, minutes, and seconds if they are less than 10.

var time = hour + ":" +min+ ":" +sec+ " "+ ampm;


document.getElementById("ClockDisplay").innerText = time;
document.getElementById("ClockDisplay").textContent = time;
setInterval(showTime, 1000);

}

showTime();


// The innerText and textContent properties of the ClockDisplay element are set to the current time, so it can be displayed on the webpage.

// The setInterval() function is used to update the time every second (1000 milliseconds).

// Overall, this function retrieves the current time and updates it every second on the webpage.


