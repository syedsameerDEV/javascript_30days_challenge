// Function Declaration

// task-1
// write a function to check if a number is even or odd and log the result to the console?

function check(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
  return num;
}

console.log(check(3));

// task-2
// write a function to calculate the square of a number and return the result

function square(num) {
  return num * num;
}
console.log(square(5));

// task-3
// write a function expression to find the minimum of two number and log the result to the console
function min(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
min(25, 10);

// task-4
// write a function expression to concatentate two string and return the result

function string(str1, str2) {
  return str1 + " " + str2;
}
console.log(string("hello", "world"));

// task-5
// write a arrow function to calculate the sum of two number and return the result

const twoNumber = (num1, num2) => {
  return num1 + num2;
};
console.log(twoNumber(5, 10));

// task-6
// write a arrow function to check if a string contains a specific character and return a boolean value

const checkChar = (str, char) => {
  return str.includes(char);
};
console.log(checkChar("hello", "l"));

// task-7
// write a function that takes two parameters return their product. Provide a default value for secound parameter.

function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(product(5));

// task-8
// write a function that takes a person's name and age return a greeting message. Provide a default value for age.
function greeting(name, age = 18) {
  return `Hello ${name} you are ${age} years old.`;
}
console.log(greeting("sameer"));

// task-9
// write a higher-order function that takes a function and a number, and calls the function that many times.

function higherOrderFunction(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}
higherOrderFunction(() => console.log("welcome to chai code"), 5);

// task-10
// write a higher order function that takes two functions and value, applies the first function to the value, and then applies the secound function to the result .

function higherOrderFunction2(func1, func2, value) {
  const res1 = func1(value)
  return func2(res1)
  }
  const func1 = (value)=>{
    return value * 2;
  }
  const func2 = (value) => {
    return value + 5;
    }
console.log(higherOrderFunction2(func1, func2, 10));
