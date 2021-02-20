// 1. 변수: 프로그래밍 언어에서 우리가 처리해야하는 언어를 담을 수 있도록 도와줌(데이터를 담고 있음)
//변수를 통해 데이터에 접근, 업데이트 가능

//A. primitive data type: 담을 수 있는 가장 작은 단위의 데이터
//number, string, boolean, null, undefined, (symbol)
//작은 단위의 아이들은 변수를 선언하는 동시에 메모리에 우리의 변수를 위한 공간이 생김
// 변수라는 공간안에 데이터가 들어감
// = 메모리에 어느 정도의 바이트사이즈의 공간이 확보된다
let number = 2; // 숫자 2가 number라는 변수에 할당
//변수의 이름은 우리가 원하는 대로 지정 가능
// 로직과 연관된 의미있는 이름을 지정하는게 좋음(어떤 정보를 가지고 있는지 유추 쉬움)
let age = 23;
let num = '2'; // 숫자도 되고, 문자열도 됨

let number2 = number;
console.log(number);//2
console.log(number2);//2
//number2에 숫자3으로 업데이트
number2 = 3;
console.log(number);//2 
console.log(number2);//3

//B. Object: Primitive data type를 제외한 모든 데이터 타입
// Obj란 최소한 한두가지의 다양한 데이터를 한군데에 묶어놓은 아이
// 배열, 리스트, 함수
// 큰 데이터가 들어있기 때문에 우리가 단순히 변수를 선언하는 곳에 담아둘 수 없음
// obj는 key와 value로 구성
// 각각 키마다 메모리가 할당 + 이것들을 묶어서 위치를 나타내는 reference있음
// obj 변수에는 각 키들을 묶어놓은 주소가 들어가 있음
let obj = {
  name: 'eroon',
  age: 20,
}
//obj가 가리키고 있는 곳의 name이라는 값
console.log(obj.name);

let obj2 = obj; //obj2안에도 obj가 가지고 있는 주소가 복사됨
console.log(obj2.name);

// 변수를 할당할때 변수안에 들어있는 값이 복사되어 들어온다.
// primitive type:  데이터 자체가 복사되어 들어옴
// object : obj가 가리키고 있는 주소가 복사되어 들어옴

obj.name = 'james';
console.log(obj.name); // james
console.log(obj2.name); // james
// obj, obj2 가리키고 있는 obj가 동일. 어떤 곳을 통해서 업데이트해도 둘다 변경

//let은 선언하고 나면 나중에 값을 또 바꿀 수 있음
let a = 2;
a = 9;

//const는 한번 선언하고 나면 변경이 절대로 불가
const num = 5;

//obj3가 담겨있는 곳을 가리키는 reference가 담겨있음
//const를 이용하면 obj3에는 이제 다른 값을 할당할 수 없음, 공간이 잠기게 됨
const obj3 = {
  name: 'ellie',
  age: 5,
}
//reference자체를 다른 reference로 변경은 불가
//but, obj3가 가리키고 있는 이름을 다른 것으로 변경은 가능
//공간은 잠겨서 변경은 불가능하지만 가리키고 있는 키들은 변경할 수 있음
obj3.name = 'james';
//const(상수변수)를 사용할때 primitive type data를 넣으면 그 공간 안에 그 값 자체가 담기게 되어서 변경 불가능
// but, object를 넣으면 object자체가 담겨있는 것이 아니라 object를 가리키는 reference가 담겨있기 때문에
// reference는 다른 reference로 변경은 불가능하지만, reference가 가리키고 있는 object안의 내용은 변경 가능





