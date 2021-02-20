//함수의 타입
// ㄱ. 어떤 기능을 수행을 하고 끝남
// ㄴ. 어떤 계산을 한 후 특정한 값을 전달

//a.함수 선언: 선언을 할 때는 어떤 값을 전달받아 올건지 인자들을 정의하고 나서 코드블럭 작성함
// 선언만 하게되면 우리가 작성한 코드블럭은 수행되지 않음
//b.함수 호출: 우리가 정의한 함수를 수행하기 위해서 함수를 호출해야함
// 함수를 호출하기 위해서는 함수이름 옆에 괄호를 이용해서 함수에서 원하는 인자값들을 전달하면서 호출해야함
// 함수의 이름 자체는 함수를 가리키는 함수 자체가 됨 
// (괄호를 사용하지 않고 함수의 이름만 다른 함수의 인자로 전달하던지 다른변수에 할당 -> 함수자체를 가리킴)

//1. 함수 선언 &호출
//a. 함수 선언 
// function 원하는 함수의 이름(함수에 어떤 값을 전달받아 올건지 전달받는 인자){
//실제로 함수 안에서 어떤 코드가 작동하는 지 코드 작성}
function doSomething(params) {
  console.log('hello');
}
//b. 함수 호출
//(): 함수를 호출할때는 괄호를 써야한다
//괄호를쓰지 않고 함수 이름만 할당하거나 전달하면 함수자체를 전달하는것
// 함수를 호출할때는 함수마다 정의된 인자값들을 정확하게 전달해야함
doSomething();

//2. 값을 리턴하는 함수
//a. 함수 선언
function add(a, b) {
  const sum = a + b;
  return sum;
}
//b. 함수 호출
const result = add(1, 2);
console.log(result);

//3. 함수를 인자로 전달
//a. 함수 선언
function doFunction(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}
//b. 함수 호출
doFunction(add); 
//doFunction이라는 함수를 호출하면서 인자로 add라는 함수 자체 전달
//비교 doFunction(add()); -> add라는 함수를 먼저 호출하게 됨
//함수의 이름을 이용해서 전달해주고 나서 전달받은 함수를 이용해서 무언가를 할 수 있음

//4. 함수를 변수에 할당
const addFun = add;
console.log(addFun);
addFun(1,2);
console.log(result);
