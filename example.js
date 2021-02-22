import { splitFlap } from "./splitflap.js";

// Date and Time Method
var today = new Date();
var date =
  today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

date = "Today's date is " + date + ".";

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var time_ending = "";
var introduction = "";

function checkHour(i) {
  if (i == 12) {
    i = 1;
  } else if (i > 12) {
    i = i % 12;
    time_ending = "pm";
    introduction = "Good Afternoon, Daniel";
  } else {
    time_ending = "am";
    introduction = "Good Morning, Daniel";
  }
  return i;
}

var h = today.getHours();
var m = today.getMinutes();

// Fix hours to be US standard
h = checkHour(h);

// add a zero in front of numbers<10
m = checkTime(m);

// Format Time
var time = "It is currently " + h + ":" + m + time_ending + ".";

// List of Outputs to be shown on Split Flap
let example_texts = [introduction, date, time, ""];

let domElement = document.querySelector("#splitflap");

splitFlap(domElement, example_texts, {
  timeOut: 3000,
  tickTimeOut: 60,
  nbJumpIterations: 4,
});
