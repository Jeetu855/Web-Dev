function sum(a, b) {
  return a + b;
}

const Sum = (a, b) => {
  return a + b;
};

const ans = Sum(1, 2);
console.log(ans);

/* Given an arrya, give back a new array in which every value is multiplied
by 2 
*/

const inputArray = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = 0; i < inputArray.length; i++) {
  newArray.push(inputArray[i] * 2);
}
console.log(newArray);

// map(initialInput,transformationFunction) returns an array

function transform(i) {
  return i * 2;
}

const newArr = inputArray.map(transform);
console.log(newArr);

/*Given an input array, return all even values in it */
const arr = [1, 2, 3, 4, 5];
//filter(inputArray,filterFunction)

const filterLogic = function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
const answer = arr.filter(filterLogic);
console.log(answer);

// arr.filter((n)=>{
//    if(n%2==0){
//    return true
//    }else{
//        return false
//    }
//})
