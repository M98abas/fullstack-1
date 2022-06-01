// 8. Callback, Promise, Big O, Datastrctures, Algorithms
// Call Stack
/* 
const mknet = ()=>{
  console.log("Hello from MKnet");
  newFull();
  console.log("Hello from MKnet");

}
const newFull = ()=>{
  console.log("New Fullstack course");
}

mknet()

const calcuate = (num)=>{
  const y = fact(num) / 100;
  return y
}

const fact = (x)=>{
  ft = 1;
  for (let i = 1; i<=x;i++)
  ft *=i
  return ft;
}

console.log(calcuate(10));
let foo = ()=>{
  console.log("Foo");
  boo();
}
let boo = ()=>{
  setTimeout(()=>{
    console.log("Hello from MKnet");
  },3000)
}

foo();

// CallBack function
function feed(str, callback){
  console.log(str);
  callback();
}

let cb = ()=>{
  console.log("World");
}
feed("Hello",cb)
*/

// const getSalary = ()=>{
//   return 1000;
// }
// const feeSalary = (salary)=>{
//   return salary - 20
// }

// const rentSalary = (salary)=>{
//   return salary - 110
// }

// const lastSalary = ()=>{
//   let salary = getSalary()
//   salary = feeSalary(salary)
//   salary = rentSalary(salary)
//   return salary
// }

// console.log(lastSalary());

// // Promasies
// foo4 = ()=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>
//     {
//       resolve("Hello there")
//     },3000)
//   }
//   )
// }
// // > ["Panding"]

// foo4().then((result)=>{
//   console.log(result)
// })

// Token

// const foo5= ()=>{
//    return setTimeout(()=>{
//      "Hello there"
//     },9000)
// }
// async function doo() {
//   let a = await foo5();
//   return  a
// }
// let s = await doo()
// console.log(s)

// Next Lesson
// ASynce Await && DataStructre & Algorithems && classes

// Const => Constraint
// const x = 100

// let y = 10
// y += 10

// var z = 20
// z +=20

// const boo = ()=>{

//   var y = 20
//   for(let i= 0; i <= 33; i++)
// {
//   let y1 = i + 10;
// }

// console.log(y1);

//   let x = 10
//   return x
// }

// console.log(boo());
