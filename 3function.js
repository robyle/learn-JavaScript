//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

// 1. Function Declaration 함수 선언
// function name (param1, param2) {body...return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g  createCardAndPoint -> createCard, createPoint 함수 깨끗하게 만들기
// function is object in Js
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');
log(1234);
// TypeScript는 string인지 number인지 type중요!!

//2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
// ~ 함수안에서 object의 값을 변경하게 되면 변경된 사항이 그대로 메모리에 적용
// 추후에 변경된 사항들 확인 가능
const ellie = { name: 'ellie' };
function changeName(obj) {
    obj.name = 'coder';
}
changeName(ellie);
console.log(ellie);

//3. Default parameter (Added in ES6)
function  showMessage(message, from = 'unknown') {
    // if (from === undefined) {
    //     from = "unknown" }
    
    console.log(`${message} by ${from}`) ;
}
showMessage('Hi!');

//4. Rest Parameters ... (added in ES6)
//배열형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(`args(i)`);
    }
    //간단버전
    for (const arg of args) {
        console.log(arg);
    }
    //더 간단버전 : 배열
    args.forEach((arg) => console.log(arg));
    // args.forEach((args)=> {console.log(arg)
        
    // });
}
printAll('dream', 'coding', 'ellie');

//5.local scope
//block level scope/ global level scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
//{} block 안에서 변수를 선언 : 지역 변수,,안에서만 접근 가능

let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function  printAnother() {
        console.log(message);
        let childMessage = 'hello';// 함수 안에 함수
        //자식에서 부모 메시지 확인 가능
        //자식안에 정의된 메시지 부모한테서 확인 불가능
    }
    //console.log(childMessage);//error
    //return undefined; : 생략가능

}
printMessage();

//6. Return a value
function sum(a, b) {
    return a + b;    
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic..
    }
}
//good
function  upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
        //long upgrade logic..
}
// 조건이 맞지 않는 경우, 값이 undefined인 경우, 값이 -1인 경우 빨리 return

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. function expression
//a function declatrion can be called earlier than it is defined. (hoisted)
//a function expression is created when the execution reaches it.
const print = function () { //anonymous function <->named function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
//anonymous function
const printYes = function () { 
    console.log('yes!');    
};
//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//***Arrow function =>
//always anonymous function
const simplePrint = function () {
    console.log('simplePrint!');
}
const simplePrint = () => console.log('simplePrint!'); 
const add = (a, b) => a + b ; // 간결하게 사용 가능
const add = function (a, b) {
    return a + b;
}

//IIFE : Immediately Invoked Function Expression
(function help() {
    console.log('IIFE');    
})();

//function calculate(command, a, b)
//command: add, substract, div
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;      
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));