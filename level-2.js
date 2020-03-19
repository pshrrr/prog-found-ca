// question 1

for (var i = 15; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Question 2

function myFunction() {
  console.log("I am a function");
}
var innerFunction = myFunction();

function outerFunction(x) {
  x;
}
outerFunction(innerFunction);
