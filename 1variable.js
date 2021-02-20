
// 1. Use strict
// added in Es 5
// use this for vanilla JavaScript.
'use strict';

// 2. Variable 변수, rw(read/write)
// let (added in Es6) : 변수 선언 키워드
let globalName = 'global name';

{
let name = 'Eroon'; //하나의 박스
console.log(name);
name = 'hello';
console.log(name);
}

console.log(name);// undefined
console.log(globalName);//'global name'

// var (don't ever use this!)
// var hoisting(move, declaration from bottom to top)
// hoisting: 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려줌
// has no block scope
console.log(age);
age = 4;
var age;

console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constant, r(read only)
//use constant whenever possible.
//only use let if variable needs to change.

// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistake
const daysInWeek = 7;
const maxNumber = 5;

// **JavaScript에서 변수를 선언할때
// Mutable type : let
// Immutable type : const

//Note!
// Immutable data types 변할 수 없는: premitive types, frozen objects(i.e. object.freeze())
// Mutuable data types 변할 수 있는: all objects by default are mutable in JS
// favor immutable data type always for a few reasons; 
// -security
// -thread safety
// -reduce human mistake

// 4. Variable types
// primitive(variable: 값 자체가 메모리에 저장/value로 값이 저장), single items : number, string, boolean, null, undefiedn, symbol
// object(너무커서 reference를 통해/object를 가리키는 reference가 메모리에 저장), box container
// function, first-class function 

//*** number type
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${count}, type: ${typeof size}`);

//*** number- special numeric values:
// infinity, -infinity, NaN
const infinity = 1 / 0 ;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890; //over(-2**53~2*53)
console.log(`value; ${bigInt}, type:${typeof bigInt}`);

//*** string
const char = 'c';
const brendan = 'brendan';
const greeting = 'bello' + brendan;
console.log(`value: ${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`;//template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: '+ helloBob + 'type: ' + typeof helloBob);

//*** boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${canRead}`);
console.log(`value: ${test}, type: ${test}`);

//*** null
let nothing = null;
console.log(`value: ${nothing}, type:${nothing}`);

//*** undefined
let x //=undefined;
console.log(`value:${x}, type:${x}`);

//*** symbol, create unique identifiers for objects
//
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);//false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`)
//+.description string으로 변환 후 출력

//object, real-life object, data structure
const Eroon = {name: 'Eroon', age: 20};
Eroon.age= 24; //object 변경 가능

//5. Dynamic typing: dynamically typed language
// C, Java : statically typed languages
let text = 'hello';
//프로그래밍에서 인덱싱 숫자 0부터 인식
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
text = '7' + 5; //'':string +number
console.log(`value: ${text}, type:${typeof text}`);
text = '8' / '2'; // string을 나누기? number로 인식
console.log(`value: ${text}, type:${typeof text}`);

