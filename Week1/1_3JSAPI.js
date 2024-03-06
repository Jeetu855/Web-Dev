//------------------------Strings----------------

function getLength(str) {
  console.log("Original string : ", str);
  console.log("Length : ", str.length);
}
getLength("Hello World");

function findIndexOf(str, target) {
  console.log("Original String :", str);
  console.log("Index :", str.indexOf(target));
}
findIndexOf("Hello World", "World"); //Starting index of World
findIndexOf("Hello World", "asdf"); //Output = -1, means it did not find it
findIndexOf("Hello World World World", "World"); // Gives index of 1st appearence of World

function findLastIndexOf(str, target) {
  console.log("Original String :", str);
  console.log("Index :", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World World", "World"); //first index of last appearence of World

function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5); //0 inclusive, 5 exclusive [0,5)

function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hi my name is Jitesh", " "); //?returns array of words in the string

//----------------Numbers------------------------

function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px"); //42
explainParseInt("px42px"); //NaN
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");

//-------------Array-------------------------

function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4); // push() adds an element at the end of the array

function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]); // remove element from the end of array

function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]); // remove first element

function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0); // add element at begining of array

function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]); // concatenation of arrays

function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]); // forEach loop

//--------------------Classes----------------------

class Animal {
  constructor(name, legCount) {
    //attributes of the class
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    //method of the class
    return `${this.name} has ${this.legCount} legs`;
  }
  static myType() {
    // static method associated with the class itself not the object
    console.log("I am an animal"); // and is same for every object of that class
  }
}

let dog = new Animal("dog", 4);
console.log(dog.describe());

let cat = new Animal("cat", 4);
console.log(cat.describe());
Animal.myType();

//-----------------Date--------------------------

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

// ! Calculate the time taken by the below function to run
function calculateSum() {
  let a = 0;
  for (let i = 0; i < 100000000; i++) {
    a = a + i;
  }
  console.log(a);
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(
  "Time taken by function to complete execution is:",
  afterTimeInMs - beforeTimeInMs
);

//-------------------------JSON---------------

function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

// -----------------Math------------------

function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);

// ------------------Objects--------------------------

function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj); // Object is globally available
  console.log("After Object.keys():", keys); // keys is a static method on object class
  // puts the keys in an array
  let values = Object.values(obj); //array of values of object
  console.log("After Object.values():", values);

  let entries = Object.entries(obj); //array of array of key value
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); //has a property named property?
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
