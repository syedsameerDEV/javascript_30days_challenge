// for loop
//task-1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// task-2

const num = 5;

const range = 10;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} X ${i} = ${num * i} `);
}

// while loop
// task-3

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// task-4

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Do while loop
// task-5

let k = 1;

do {
  console.log(k);
  k++;
} while (k <= 5);

// task-6

let x = 5;
let ran = 1;
do {
  ran *= x;
  x--;
} while (x >= 1);
console.log(`factorial of ${x} is ${ran}`);

// task-7

// nested loop

const rows = 5;

for (let a = 1; a <= rows; a++) {
  let p = "";
  for (let b = 1; b <= a; b++) {
    p += "*";
  }
  console.log(p);
}

// loop control statement
// task-8

for (let c = 1; c <= 10; c++) {

    if (c == 5) {
        continue;
    }
    console.log(c);
    
}
// task-9

for (let d = 1; d <= 10; d++) {

    if (d == 7) {
        break;
    }
    console.log(d);
    
}

