function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sum(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}
console.log(sum(2, 2, square));
console.log(sum(2, 2, cube));
//annonymous function
console.log(
  sum(2, 2, function (n) {
    return n * n * n * n;
  })
);

/*
Promise is a class in JS
Non Promsified Function : Dosent return anything, takes callback as an argument
Promisified Function : Dosent take callback as an argument, returns a promise
WebAPI is browsers C++ code that runs async code on different thread
fs.readFile asks kernel to perform the task

*/
