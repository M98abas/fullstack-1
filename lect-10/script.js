function result(x, funcCall) {
  let res = x + funcCall(x);
  return res;
}

function myCall(x) {
  return x ** 2;
}

console.log(result(10, myCall));
setTimeout(() => console.log("Hello"), 3000);
setInterval(() => console.log("Hello there"), 3000);

function result() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi there this is Me ");
    }, 3000);
  });
}
const res = result();
res.then((res) => {
  console.log(res);
});

function result() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi there this is Me ");
    }, 3000);
  });
}
// Async/await
async function afterResult() {
  console.log("Hi there");
  let res = await result();
  console.log(res);
}
afterResult();

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return "Hello I am Eat";
  }

  greeting() {
    return `Hello there your name ${this.name}`;
  }
}

const h1 = new Human("Ali", 12);
console.log(h1.eat());
console.log(h1.greeting());

const h2 = new Human("Moh", 52);
console.log(h2.greeting());

//

// Task
function interval() {
  let i = 2;
  setInterval(() => {
    console.log(i);
    i += 2;
  }, 3000);
}
interval();

// Inherit

class Parnet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hi() {
    console.log("Hello there");
  }
  ageing() {
    console.log(`My age ${this.age} years old`);
  }
}

class Child extends Parnet {
  constructor(name, age) {
    super(name, age);
  }
  cid() {
    console.log("Hi I am Child ");
  }
}

class SubChild extends Child {
  constructor(name, age) {
    super(name, age);
  }
  subC() {
    console.log("Hello there this is Sub");
  }
}

const obj = new SubChild("Ali", 22);
obj.hi();
obj.ageing();

// Encapsolation

class Parnet {
  #name = "Hi there";
  eat() {
    console.log("Hi there this is Me");
  }
}
const p1 = new Parnet();
console.log(p1.name);
