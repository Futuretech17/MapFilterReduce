var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// var newNumbers = numbers.map(function (num) {
//   return num * 2;
// });

// console.log(newNumbers);

// var newNumbers = [];

// numbers.forEach(function (num) {
//   return newNumbers.push(num * 2)

// })

// console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.

// let newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// let newNumbers = [];

// numbers.forEach(function (num) {
//   if (num > 10){
//     return newNumbers.push(num)
//   }

// })

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// let newNumbers = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

let initialnum = 0;
numbers.forEach((num) => {
  return (initialnum += num);
});

// console.log(initialnum);

//Find - find the first item that matches from an array.

// let found = numbers.find((num) => num > 10);

// numbers.forEach((num) => {
//   if (num > 10) {
//     console.log(`The first number greater than three is ${num}`);
//     return;
//   }
// });

//FindIndex - find the index of the first item that matches.
console.log(numbers.findIndex((num) => num === 48));

import emojipedia from "./emojipedia";

console.log(emojipedia);

const newArray = emojipedia.map((emojiItem) => {
  return emojiItem.meaning.substring(0, 100);
});

console.log(newArray);
