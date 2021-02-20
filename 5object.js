// Objects
// one of the JavaScript's data types.
// a collection of  related data and/or functionality.
// Nearly all objects in JavaScript are instances of object
// Object = {Key : Value} : object는 key와 value의 집합체

// 1. Literals and Properties
// const name = 'eroon';
// const age = 24;
// print(name, age);
//인자가 많아지게 되면 추가할 것들 늘어남, 관리 어려움, 그룹 어려움

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
//개선하기 위해 object 사용
const eroon = {name: 'eroon', age: 24 };
print(eroon);

//object만드는 두가지 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// with JavaScript magic (dynamically typed language)
// can add properties later
//나중에 까먹은거 추가 가능 but 나중에 유지보수 힘들어짐
//가능하면 피해서 코딩
eroon.hasJob = false;
console.log(eroon.hasJob);


//can delete properties later
//나중에 삭제하고 싶은거 생기면 사용할 수 있음
delete eroon.hasJob;
console.log(eroon.hasJob);

//2. Computed properties
//key should be always string
console.log(eroon.name); // 코딩하는 순간 그 키에 해당하는 값을 받아오고 싶을때
console.log(eroon['name']);//string type!!, 정확하게 어떤키가 필요한지 모를때
eroon['hasJob'] = true;
console.log(eroon.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(eroon,'name');
printValue(eroon,'age');

// 3.Property value shorthand
const person1 = { name: 'bob', age : 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('ellie', 5);
const person5 = new Person('judy',6);
console.log(person4);
console.log(person5);
//class없었을 때
function makePerson(name, age) {
    return{
        name,
        age
    };
}

//4. Constructor Function
function Person(name, age) {
    //this = {}
    this.name = name;
    this.age = age;
    //return this;
}

//5. In operator: property existence check (key in obj)
console.log('name' in eroon);
console.log('age' in eroon);
console.log('random' in eroon);
console.log(eroon.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();//이전 것들 지워짐
for (key in eroon) {//eroon이 가지고 있는 키들이 블럭을 돌 때마다 key라는 지역변수에 할당
    console.log(key);
}
// for (value of iterable)
const array = [ 1, 2, 4, 5];
for(let i = 0; i< array.length; i++){
    console.log(array[i]);
}//너무 많이 입력해야해서 별로 좋지 않음
for(value of array) {
    console.log(value);
}

// 7.Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'eroon', age: '24'};
const user2 = user;
//user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// use object assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2); 
//뒤에 나오는 아이일 수록 동일한 property가 있으면 값을 덮어씌워짐
console.log(mixed.color); // blue
console.log(mixed.size); // big