const fs = require("fs");
/* Synchoronous : Together, one after other in sequential manner, only 1 thing
happening at a time
Asynchronous : Happens in parts, multiple things are context switching with each other

fs.readFile : asunc function
Fetch : Fetch some data from an API endpoint
*/

// function findSum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// function findSumTill100() {
//   console.log(findSum(100));
// }

//busyWaiting
// function syncSleep() {
//   let a = 0;
//   for (let i = 0; i <= 100000000000000; i++) {
//     a++; // this function is useless, odes nothing but helps us achieve our goal
//     //of waiting which setTimeout also provides,this function keeps the thread
//     //busy for few seconds so next statement is ran after some time
//   }
// }

//setTimeout(findSumTill100, 1000); //this is an example of async function as
//console.log("Hello World"); //the control flow dosent wait for 1 sec for setTImeout
//to complete and goes on to execute the next statemnt in execution sequence

// fs.readFile("1_2JSFoundation.js", "utf-8", function (err, data) {
//   console.log(data);
// }); //pass the path to file,character encoding and an anonymous function
// console.log("hi there"); // first this ran then the fileRead, as fileRead asl oasync  function
// //it takes tike to read a file from file system

// let a = 0;
// for (let i = 0; i <= 10000000000; i++) {
//   a++;
// } //the fileRead async function waits for this function to complete, even if the file read
// has complete, currently the thread is busy in this loop and the callback is only resolved
// after the execution of this loop

// console.log("hi there 2");

/*1st : "hi there"  2nd : "hi there 2"  3rd: "data of file from fileRead"
after the thread becomes idle, the control flow will go to pending callbacks
while in loop, the fileRead is completed but the execution dosent go there until thread becomesidle again, 
so when thread reaches "hi there 2" after that it becomes idle and goes back to pending callbacks */
// visualization of aynchronous nature of js : latentflip.com/loupe

/* Call Stack, Web API, Callback Queue , Event Loop
Call stack : what is being put onto the stack to actually run, the line of code currently executing
If we only have synchronous code then No need to worry about web API, callback queue and event loop
Web API : the entity we delegate our task to, once the task is finished by the delegate(Web API)
it sits in the callback Queue, after thread becomes idle is when we pull it from
the callback Queue and put it on the stack
While our thread is busy, does not matter what is in the callback queue, they will keep waiting
When thread gets idle, event loop checks if there is anything in the callback queue
if there is, it takes it and puts it in the call stack
The callback function which finishes execution beofre is put first in callback queue
Dosent matter if it was later on in the sequential code, if it finishes execution first
then it is put in the callback queue first
eg : setTimeout(fn,20000)
     setTimeout(fn,10000) This callback comes after in the control flow but finishes first
so put in the callback queue first


In promises, there are no callbacks, Promises introduced to get rid of callbacks

*/

// function jeetuReadFile() {
//   console.log("Inside JeetuReadFile");
//   return new Promise(function (resolve) {
//     //creating instance of Promise class
//     console.log("Inside Promise");
//     fs.readFile("1_2JSFoundation.js", "utf-8", function (err, data) {
//       console.log("Before resolve");
//       resolve(data);
//     });
//   }); // whatever passed to resolved reaches onDone()
// }
// function onDone(data) {
//   console.log(data);
// }

// // jeetuReadFile().then(onDone);
// let a = jeetuReadFile();
// console.log(a); // Promise { <pending> }
// a.then(onDone);
//Synchronously return the promise but asynchronously return the data
/*State of promises : Pending, Resolved, Rejected
Pass function as first argument to promise and that functions first arguement is resolve
.then() gets called whenever the async function gets resolved
*/
// ! argument to function inside .then() is same as the data inside resolve()

function jeetuAsyncFunc() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 3000);
  });
  return p;
}

async function main() {
  jeetuAsyncFunc().then(function (value) {
    console.log(value);
  });
  let value1 = jeetuAsyncFunc();
  let value2 = await jeetuAsyncFunc();
  console.log("hi there 2"); // also gets logged after setTimeout
  console.log(value1); // logs <Promise { 'hi there' }'> if we dont use await and setTimeout
  console.log(value2); // logs "hi there" if we use await and setTimeout
}
// logs <Promise { <pending> }> if we use setTimeout and dont use await

main();
console.log("after main");
/* When using .then() , "hi there2" dosent wait for setTimeout and "hi there" comes after setTimeout
all logging after await gets stuck, not the same case when using .then()
async written on caller side and not on the side we write async function
every await need to be wrapped inside an async function
*/
