document.write("<h1>JavaScript Fundamentals Assignment</h1>");
document.write("<h2>Part 1: Variables, Data Types, and Type Casting</h2>");
let studentName = "King Piccolo";
let studentAge = 16;
let isEnrolled = true;

document.write("<h3>Displaying Variables</h3>");
document.write(`<h4>Student Name:  ${studentName} <br></h4>`);
document.write(`<h4>Student Age:  ${studentAge} <br></h4>`);
document.write(`<h4>Is Enrolled:  ${isEnrolled} <br></h4>`);

document.write("<h3>Converting Data Types</h3>");
document.write(`<h4>Student Age before casting: ${typeof studentAge} <br></h4>`);
studentAge = String(studentAge);
document.write(`<h4>Student Age after casting: ${typeof studentAge} <br></h4>`);

document.write("<h2>Part 2: Operators and User Interaction</h2>");
let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter another number: ");
num1 = Number(num1);
num2 = Number(num2);
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

document.write("<h3>Displaying Numbers</h3>");
if (isNaN(num1) || isNaN(num2)) {
  document.write("<h4>Invalid input. Please enter a number.</h4>");
  alert("Invalid input. Please enter a number.");
} else {
document.write(`<h4>First Number: ${num1} <br></h4>`);
document.write(`<h4>Second Number: ${num2} <br></h4>`);
}

document.write("<h3>Calculations</h3>");
document.write(`<h4>Sum: ${sum} <br></h4>`);
document.write(`<h4>Difference: ${difference} <br></h4>`);
document.write(`<h4>Product: ${product} <br></h4>`);
document.write(`<h4>Quotient: ${quotient} <br></h4>`);
document.write(`<h4>Remainder: ${remainder} <br></h4>`);

document.write("<h2>Part 3: Conditional Execution</h2>");
let userAge = prompt("Enter your age: ");
userAge = Number(userAge);
if (userAge >= 18) {
  document.write("<h4>You are able to vote!</h4>");
  alert("You are able to vote!");
} else if (userAge < 18 && userAge >= 0) {
  document.write("<h4>You are not eligible to vote yet.</h4>");
  alert("You are not eligible to vote yet.");
} else {
  document.write("<h4>Invalid age entered.</h4>");
  alert("Invalid age entered.");
}

document.write("<h2>Part 4: Loops</h2>");
document.write("<h3>For Loop</h3>");
for (let i = 0; i <= 10; i++) {
  document.write(`<h4>${i}</h4>`);
}
document.write("<h3>While Loop</h3>");
let num;
do {
  num = prompt("Enter a number greater than 10: ");
  num = Number(num);
  alert(`You entered ${num}!`);
}
while (num <= 10); 
document.write("<h4>You entered a number greater than 10!</h4>");
document.write(`<h4>It was ${num}!</h4>`);


