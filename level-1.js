// question 1

var name = "erik";

// question 2

var person = {
  name: "erik",
  age: "32"
};

// Question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of Stock");
} else {
  console.log("In stock");
}

// Question 4

var numbers = [9, 21, 41, 82, 105];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Question 5

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// Question 6

for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// Question 7

var dogowners = [
  // first person
  {
    name: "erik",
    age: 32,
    dogowner: true
  },
  // second person
  {
    name: "marie",
    age: 35,
    dogowner: false
  }
];

for (var i = 0; i < dogowners.length; i++) {
  console.log(dogowners[i].age);
  console.log(dogowners[i].dogowner);
}

// Question 8

function whatIDontlike(input) {
  console.log("I Don't like " + input);
}

whatIDontlike("Hamsters");

// Question 9

function subtractNumbers(number1, number2) {
  var sum = number1 - number2;
  console.log(sum);
}

subtractNumbers(10, 7);

// Question 10

var emptyArray = [];

function add(number) {
  var emptyArray = number;
  console.log(emptyArray);
}
add(5);
