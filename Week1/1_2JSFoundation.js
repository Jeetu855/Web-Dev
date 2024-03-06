/*Storage(not running) in SSD, running things in RAM

Compilers convert High Level Code to low level code for 
machine to understood

Compiled Language : Write Code --> Compile It into a binary --> Run the binary
Interpreted Language : Write Code --> Run it(reads line by line, 
converts it to binary and runs it)

Strict Typing : need to mention data type(static language)
Loosely Typed : no need to mention data type(dynamic language)

Single Threaded Nature of JS : A program is ran on a core,single core cant run 
2 things at the same time, more the number of cores, more the number of 
process we can start(also have context switch between process if more 
    number of process and less number of cores)
If we have 2 JS programs, 1 running on 1 core and other on 2nd core,
Single threded means JS always restricted to a single core,cannot split program
into 2 different cores
Multi Threaded languages alllow to split the load of program across multiple cores
So JS bad language for scalable systems

let,const,var 
const : once assigned, cannot be reassigned

Data types : strings, numbers, booleans

*/

// let answer = 0;
// for (let i = 0; i <= 100; i++) {
//   answer = answer + i;
// }

// console.log(answer);

// let allUsers = [
//   {
//     fName: "harkirat",
//     gender: "male",
//   },
//   {
//     fName: "kirat",
//     gender: "male",
//   },
//   {
//     fName: "amy",
//     gender: "female",
//   },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//   if (allUsers[i]["gender"] == "male") {
//     console.log(allUsers[i]["fName"]);
//   }
// }

// function findSum(a, b) {
//   return a + b;
// }
// console.log(findSum(3, 4));

// const findSum = function (a, b) {
//   return a + b;
// };
// console.log(findSum(3, 4));

//! When we run it, core dosent go to 100% usage(check using htop command), the prgram takes 20-30 seconds to finish exe.
//! Thats because htop command does not work correctly xD(use top command)
// sum = 0;
// for (let i = 0; i <= 1000000000000; i++) {
//   sum = sum + i;
// }
// console.log(sum);

/*Function taking other function as a paramter 

*/
// Call only 1 function below to display the result, how?

// function sum(num1, num2, fnToCall) {
//   let result = num1 + num2;
//   fnToCall(result);
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayPassiveResult(data) {
//   console.log("Sum is : " + data);
// }

// sum(1, 2, displayResult);
// this is callback

// setTimeOut : global callback function in which argument 1 called after the
// number of seconds specified by argument 2

function greet() {
  console.log("Hello");
}

setTimeout(greet, 3000); // greet() function called after 3000ms(3s)
