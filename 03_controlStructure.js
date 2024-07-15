// if-Else Statements
// task-1

const number = 100;

if (number > 0) {
  console.log(`${number} is a postitve number `);
} else if (number < 0) {
  console.log(`${number} is a negative number `);
} else if (number === 0) {
  console.log(`${number}`);
} else {
  console.log(`please enter the number`);
}

// task-2

const age = 8;

if (age >= 18) {
  console.log(`your age is ${age}, Now you are right to vote`);
} else {
  console.log(`your are not right to vote`);
}

// task-3
// task-4
let num = 5;
switch (num) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please enter a number between 1 to 7");
}

// task-5

let score = 100;

switch (true) {
  case (score >= 90 && score <= 100):
    console.log(`A grade`);
    break;
  case (score >= 80 && score < 90):
    console.log(`B grade`);
    break;
  case (score >= 70 && score < 80):
    console.log("C grade");
    break;
  case (score >= 50 && score < 70):
    console.log(`D grade`);
    break;
  case (score >= 0 && score < 50):
    console.log(`F grade`);
    break;
  default:
    console.log(`Please enter your score 0 to 100`);
}

// task-6

const sum = 3

if (sum % 2 == 0) {
    console.log(`${sum} is even`);
}
else{
    console.log(`${sum} is odd`);
}

// task-7

let year = 2024;

if (year % 4 == 0
    && year % 100 != 0
    || year % 400 == 0) {
        console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
        }

