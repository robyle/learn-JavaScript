//JOSN
//JavaScript Object Notation

//1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); 

json = JSON.stringify(['apple', 'banana'])
console.log(json);

// Object를 json으로 변환
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
   // symbol: Symbol('id'), // symbol: 자바스크립트에만 있는 특별한 데이터, 함수 -> 제이슨에 포함X
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);//[]안에 내가 원하는 property만 골라서 정의 가능
console.log(json);
//콜백 함수를 이용해 더 세밀하게 통제 가능
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; //key가 name이면 무조건 ellie, name이 아니면 원래 value
});
console.log(json);

//2. JSON to Object
// parse(json)
console.clear;
json = JSON.stringify(rabbit);
console.log(json);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key ==='birthDate' ? new Date(value) : value;
    //만약 key가 birthDate이면 나는 Date라는 새로운 obj를 만들거고
    //만약 key가 birthDate가 아니면 원래있던 value그대로를 쓰자
})
console.log(obj);
// rabit이라는 obj에는 jump라는 함수 있음
rabbit.jump();
// But, 변환한 obj serialize가 된(string으로 만들어진) JSON으로 부터 다시 obj를 만듬
// 함수는 serialize될때 포함되지X
// 다시 json으로부터 obj를 만든 것에는 jump라는 API없음
  // obj.jump(); : ERROR

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); : ERROR
// birthdate는 string이기 때문 
console.log(obj.birthDate.getDate());



