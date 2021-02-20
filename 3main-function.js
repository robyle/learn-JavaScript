const num = 1; // 변수에 데이터 담기
const num2 = 2;
const result = num + num2;
console.log(result); //콘솔로그에 출력

//2-1. 함수
// 함수의 이름: 함수 자체를 가리키고 있음, 함수를 가리키고 있는 주소를 가지고 있음
// 함수를 호출하기 위해서는 괄호를 이용해서 필요한 데이터가 있다면 데이터를 전달하면 된다
//반복되는 일들(로직)이 있다면 함수로 만들게 됨
//함수로 만들면 재사용 가능
// function 우리가 지정하는 함수의 이름 (인자) {기능을 수행할 코드블럭}
// A. 함수 정의
function add(a, b) {
  return a + b;
}
// add라는 함수는 {코드블럭-기능}을 통해서 우리가 정의함 
// 함수의 의미를 정할때는 간결하지만 알아보기 쉽게!
// (a, b) 인자: 외부에서 어떤 값을 받아올건데 그 받아오는 값(데이터)을 인자를 통해 블럭 안에서 접근하도록 해줌
// TypeScript/Java같은 type이 있는 언어는 (a:number, b:number) a,b가 숫자라는 것을 직관적으로 이해 가능
// JavaScript는 type이 없기 때문에 유추해야함

// 함수 자체만으로는 a와 b에 어떤 값이 들어갈지는 알 수 없음
// 어떤 데이터가 들어갈지는 그 함수를 호출하는 사람이 결정

// B. 함수 호출
// sum이라는 변수를 선언하면서 add라는 함수를 호출
// add라는 미리 정의된 함수에 a에는 3이 b에는 4가 지정
// 함수가 호출되면서 우리가 정의한 코드블럭이 실행하면서 return함
const sum = add(3, 4);
console.log(sum);

//2-2. 함수 심화
// 함수도 object중 하나
// 함수를 가리키고 있는 reference(주소)같은 아이가 우리가 정의한 함수 이름에 들어있음
const doSomething = add; 
//doSomething이라는 변수에 add함수를 할당
// add가 가리키고 있는 reference = doSomething이 가리키고 있는 reference
// 함수 이름 자체는 함수가 정의된 곳을 가리키고 있음
// 함수를 실행하기 위해서는 필요한 데이터를 전달해줘야함
// doSomething이라는 변수 안에 함수 add가 들어있으니까 괄호를 통해 인자를 넣어줌
const result2 = doSomething(2, 3);
console.log(result2);
const result3 = add(2, 3);
console.log(result3);


// + 인자
//아무런 인자(input)도 받지 않는 함수
function print() {
  console.log('print');
}
// print함수를 호출할때 어떤 데이터를 전달하든, 몇가지 데이터를 전달하든 아무런 것도 일어나지 않음
// 아무리 많은 input을 전달해도 print는 input을 무시함
// 아무런 인자도 받지 않는 함수는 어떠한 input도 받지 않는다
print(8, 3, 333); //print

// 인자는 함수를 호출하는 사람으로부터 필요한 데이터를 받아오기 위해서 우리가 정의
// 필요한 데이터를 받아올 때 함수 내부에서 조금더 이해하기 쉬운 의미 있는 이름을 부여해 놓는 것
function print2(name, age) {
  console.log(`${name} ${age}`)
}
print2('eroon', 10);

function divide(a, b) {
  return a/ b;
}
function surprise(operator) {
  const result4 = operator(2, 3); // = 밑에 전달하는 함수와 동일한 결과값 divide(2, 3)
  console.log(result4);
}
surprise(divide);// 그냥 add를 수행하는 것과 동일
//함수의 이름을 변수에 할당하거나 다른 함수의 인자로 전달하는 것은 이름이 가리키고 있는 함수의 ref를 전달하는 것과 동일
// 즉, 이름을 통해서 함수를 호출할 수 있다.
