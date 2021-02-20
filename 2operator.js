// 1. String Concatenation "+"
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
//string litersals
//'''' : 그대로 문자열로 변환
//console.log('ellie's book') : 's 인식 불가
console.log('ellie\'s book');
//\n: 줄바꿈 \t :tab키

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //mutiply
console.log(5 % 2); //remainder 나누고 나머지값
console.log(2 ** 3); //exponentiation 2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;//바로 업데이트돼서 할당이 됨
// counter = counter +1;
// preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;//할당을 해놓고 업데이트
// postIncrement = counter;
// counter counter +1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`)
const preDecrement = --counter;
// counter = counter -1;
// preDecrement = counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`)
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter -1;
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators  || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// check는 true를 리턴하는 함수
function check() {
    for (let i = 0; i <10; i++) {
        //wasting time
        console.log('으아')
    }
    return true;
}

//***|| (or), finds the first truthy value
console.log;(`or: ${value1 || value2 || check()}`); //true
//3개중에 하나라도 true가 있으면 true로 계산
    //simple한 value들을 먼저 앞에 배치, 마지막에 마지못해 호출

//***&& (and), finds the first falsy value
console.log;(`and: ${value1 && value2 && check()}`); //false
//3개가 다 true가 되어야지 true로 계산
    // 첫번째 value가 false가 나오면 뒤에 것들 신경안쓰고 false
    // often used to compress long if-statement
    // nullableObject && nullableOject.something
    // null체크할때 많이 쓰임
        // if (nullaleObject != null) {
        //     nullaleObject.something;
        // }

//***! (not) const value1: true
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 문자열이긴 한데 안에 들어있는게 숫자잖아 그러니까 똑같아
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type consersion
// 다른 타입이니까 너넨 달라!
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive)

//object equality by reference
const eroon1 = {name: 'eroon'};
const eroon2 = {name: 'eroon'};
const eroon3 = eroon1;
console.log(eroon1 == eroon2); // false
console.log(eroon1 === eroon2); // false
console.log(eroon1 === eroon3); // true

//equality - puzzler
console.log(0 == false); //true : 0, null, empty false로 간주 될 수 있음
console.log(0 === false); // false : 0은 boolean타입이 아님
console.log('' == false); // true
console.log('' === false); // false : boolean타입이 아님
console.log(null == undefined); //true
console.log(null === undefined); // false

//8. Conditional operators: if
// if, else if, else
const name = 'eroon';
if (name === 'ellie') { //if가 true면 block안에 실행
    console.log('Welcome, eroon!');
} else if (name === 'coder') { // 그럼 너는 coder니?
    console.log('You are amazing coder');
} else {//다 아니면 마지막 else 실행
    console.log('unknown');
}

//9. Ternary operator: ?
// condition ? value : value2;
console.log(name === 'eroon' ? 'yes' : 'no')
// true니? -> true면 왼쪽에 있는 것 실행, 아니면 오른쪽에 있는 것 실행
// 간단할 때만 사용!

//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
// ++while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0) {
    console.log(`while: ${1}`);
    i--;
}
//false로 나오기 전까지 무한대로 반복
// 조건문이 맞을때만 블럭을 실행하고 싶을 때 : while

//++do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${1}`);
    i--;
} while (i > 0);
//먼저 블럭을 실행한 다음 조건이 맞는지 안맞는지 검사
// 블럭을 먼저 실행하고 싶을 때 : do while

//++for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${1}`);
} 

//++nested loops
for (let i = 0; i < 10; i++);
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${1}, j:${j}`);
    }
    //CPU에 안좋아서 대부분 피함

// break : 루프를 완전히 끝냄
// continue : 지금것만 스킵하고 다시 다음 스텝으로 넘어가기

//Q1. iterate from 0 to 10 and print only even numvers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) { // 숫자가 홀수인 경우에 괄호 안에 실행
        continue; // 숫자가 홀수인 경우만 스킵하고 다음단계 실행
    }
    console.log(`q1. ${i}`);
}

for (let i = 0; i < 11; i++) {
    if(i % 2 === 0) { // 숫자가 짝수인 경우에 괄호 안에 실행
        console.log(`q1-2. ${i}`)
    }
}
//Q2. iterate from 0 to 10 and print numbers untril reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

