//3. 연산자
//if문: 무언가가 true면 실행이 되고 false면 실행되지 않음
// else: 만약 if에서 false면 else안이 실행
if([]) {
  console.log('true!');
} else {
  console.log('false!');
}
//false: 0, -0, '', null, undefined, NaN(숫자가 아닌 것들)...데이터가 없고 비어있는 것들
//true: -1, 'hello', [](empty array), 'false'

let number; //num이라는 변수를 선언하고 값을 할당하지 않는다면 undefined
if (number) {
  console.log('true!');
} else {
  console.log('false!');
}

let num;// undefined
if (num) {
  console.log('true!');
}
// &&: 앞에가 true이면 뒤에가 실행
//num이 true이면(num에 데이터가 있다면) num을 출력할거야
//num은 undefined. 즉 false이기 때문에 뒤에는 실행되지 않음
num && console.log(num);

let num2 = 9;
if (num2) {
  console.log(num2);
}
num2 && console.log(num2);//9

//*유효하지 않은 코드
// let obj; // undefined
// if (obj) {
//   console.log(obj);
// }
//console.log(obj.name);//error: 프로그래밍을 실행할때 없는 데이터에 접근하면 프로그램 자체가 죽음
let obj = {
  name: 'eroon',
}; 
if (obj) {
  console.log(obj.name);
}
// obj가 있다면 name에 접근하도록
obj && console.log(obj.name);

// &&연산자를 쓰는 것은 if문과 동일하지만 더욱 깔끔함