//eval() is a built-in global function that evaluates and executes a string of JavaScript code.

// var x = 10;
// var y = 20;
// var code = "x + y";

// var result = eval(code);
// console.log(result);  //30


'use strict';

// Calculator functionality
const display = document.getElementById("display");

// Function to perform the calculation
function calculate() {
  let result = eval(display.value);
  display.value = result;
}

// Function to handle button clicks
function buttonClick(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character from the display
function deleteCharacter() {
  display.value = display.value.slice(0, -1);
}

