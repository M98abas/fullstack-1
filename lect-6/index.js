console.log("Hello world");

console.log(1 + 3);
// Int string char boolean float

console.log(typeof "Hello");
console.log(typeof 12.3);
console.log(typeof true);

console.log(12 > 2);

// String

str = "Hello from Mknets";
console.log(str[1]);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.split(" "));

////////////////////////////////
// math
// + - / % **
console.log(10 + 2 * 5);
console.log((10 + 5) / 2);

console.log(Math.sqrt(8));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 100));
console.log(Math.log(10));
console.log(Math.sin(90));

// Number , String , Boolean
// var || const
let x = 120;
x = String(x);
// Casting => Converting From type to type
console.log(typeof x);

nb = 90;
console.log(`You dgree is ${nb}`);
if (x >= 5) {
  console.log("Greeter");
  console.log("Hi");
}
// Nested if
else if (x >= 0) console.log("Not Nagative");
else console.log("No");

y = x >= 5 ? console.log(true) : console.log(false);
switch (x) {
  case 10:
    console.log("hi");
  case 9:
    console.log("No");
}
// || => or
// && => and
// ! => not

x = 10;
if (!(x >= 5)) console.log("Less than 10");
else if (x <= 5 && x >= 0) console.log("Less than 5 and big than 0");
else console.log("Work after Not if work");

// # Task
// math.floor(math.random()) 0.. 10
// is divided by 3
// X take randpom value
x = Math.floor(Math.random() * 10);
if (x % 3 == 0) console.log("Divided");
else console.log("Not");

// // Clean Code

// Loop
// For
// Factorial 5
let fact = 5;
for (let i = fact - 1; i >= 1; i--) {
  fact *= i;
}
console.log(fact);
While;
x = -1;
while (x >= 0) {
  console.log("Hello");
  x--;
}

// do{console.log("Hello")
//   x--}
// while(x >=0)

for (let i = 0; i <= 100; i++)
  if (i % 2 == 0) console.log(i);
  else {
    continue;
    console.log("Hi");
  }
// Next Lesson
// array ,object
