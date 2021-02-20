'use strict';

//Array 필수 APIs

// 1. Declaration
// array만드는 방법 2가지
const arr1 = new Array(); 
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //index-first
console.log(fruits[1]); //index
console.log(fruits[2]); //index
console.log(fruits[fruits.length - 1]); //index-end

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}
// c. forEach : callback함수를 받아옴
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
const poped = fruits.pop();
// unshift: add an item to the beginning
fruits.unshift('메론', '수박');
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
//++note! shift, unshift are much slower than pop, push

// splice: remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
// fruits.splice(1);
// console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '메론', '포도');
console.log(fruits);

//concat: combine two arrays
const fruits2 = ['유자','귤'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Seraching
console.clear();
console.log(fruits);
// indexOf: find the index
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('레몬'));
console.log(fruits.indexOf('라임'));//-1
// includes : true/false
console.log(fruits.includes('사과'));
console.log(fruits.includes('라임'));
//lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));//0, 제일 첫번째값 리턴
console.log(fruits.lastIndexOf('사과'));//5, 제일 마지막 값 리턴

