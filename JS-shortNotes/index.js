
//1. Ways to print in javascript
// alert("me");
document.write("This is document write");
// console.log("Hello World");

//2. JavaScript Console API
// console.warn("This is warning");
// console.error("This is an error");
// console.clear;
// console.assert(4==6);

// Js variables
// What are variables -> containers to store data values
var number1 = 4;
var number2 = 9;
// console.log(number1 + number2);

// 4. Data types in javascript
var str1 = "This is a string";
var str2 = 'This is another string';
// console.log(str1);
// 4.1 Objects (These are used with key value pair)
var marks = {
    ravi : 8,
    rohan : 3,
    shubham : 8
}
// console.log(marks);
// 4.2 Booleans
var a = true;
var b = false;
// console.log(a,b);
// 4.3 Undefined or null
var und = undefined;
var c;
var d = null;
// console.log(und);
// console.log(c);
// console.log(d);

/*At a very high level, there are two types of data types in JavaScript
1. Primitive : undefined, null, number, string, boolean, symbol
1. Reference : Arrays, objects
*/

//5 Arrays
var arr = [1, 2, 3,'hello', 4, 5];
// console.log(arr[3]);
// console.log(arr);

// 6. Operators in JavaScript
//6.1 Arithematic Operations
var a = 100;
var b = 10;
// console.log("The value of a+b is ", a+b);
b+= 2;
// console.log("b = ",b); 
// console.log(a==b);
// console.log(a>b);

//6.2 Logical Operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(true || false);
// console.log(false || false);
// console.log(!false);

//7. Functions in JavaScript
// DRY principle = Do Not Repeat yourself Principle
function avg(a, b){
    return (a+b)/2;
}
// console.log(avg(4, 6));

//8. Conditionals in JavaScript
var age = 18;
/*if(age>=18){
    // console.log("You're not a kid anymore, grow up!");
}*/
// following this there are if-else statements,for & while loop, break & continue statements same as C.
var arr = [1, 2, 3, 4];
/*arr.forEach(
    function(element){
        // console.log(element);
    }
)*/
// let is a block variable which loses its value after function is over, let is recommended to use over var.
let j = 0;
const t = 1;
// t+= 1;
// console.log(t); --- This will give error since constant value cannot be changed

//9. Array operations in JavaScript
let myarr = ['reshu', 'mummy', 10, 100];
// console.log(myarr.length);
myarr.pop();
myarr.push(27);
// console.log(myarr);
myarr.shift();
// console.log(myarr);
myarr.unshift('reshu');
// console.log(myarr);
const newLen = myarr.unshift("reshu");
// console.log(newLen)
myarr.toString();
myarr.sort();

//10. String methods in JavaScript
let myLovelyString = 'Reshu is a good girl';
console.log(myLovelyString.length);
console.log(myLovelyString.lastIndexOf("g"));
console.log(myLovelyString.slice(1,6));
i = myLovelyString.replace('Reshu', 'isha');
console.log(myLovelyString, i);