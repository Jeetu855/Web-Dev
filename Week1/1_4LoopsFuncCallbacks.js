let ans = 0; //initialiation --> condition check --> code run --> increment --> condition check --> code run --> increment .....
for (let i = 0; i <= 50; i++) {
  ans = ans + i;
}
console.log(ans);

// Callback Function: passing one fucntion as an argument to another function

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
