//4. callback함수
// Counter라는 class생성
class Counter { 
  constructor() { // 생성이 되면
    this.counter = 0; // counter라는 변수가 있는데 0부터 시작
  }//Counter라는 class에는 자체적으로 counter라는 변수가 있다
   //counter는 이 클래스를 이용해서 object를 만드는 순간 0으로 초기가 됨

// class안에는 increase라는 함수가 있음
  increase() { // class에서 함수를 선언할때에는 function을 작성하지 않아도 됨
    this.counter++;// increase를 호출할때마다 counter의 숫자를 하나씩 증가
    console.log(this.counter); 
  }
}
//class는 다양한 object를 만들기 위한 청사진
// coolCounter라는 변수에다가 new라는 연산자를 이용해서 class를 생성
const coolCounter = new Counter();
//a. class Counter안에 있는 constructor가 실행
//b. this counter를 0으로 초기화함
coolCounter.increase(); //1
//c. coolCounter라는 변수는 우리가 만든 object를 가리킴, object안에 increase라는 함수를 호출
coolCounter.increase(); //2
coolCounter.increase(); //3

// 숫자가 하나씩 증가함, 5의 배수일때를 알고싶을 때
//1. counter class 안 increase함수 자체에서 this.counter가 5로 나눴을때 나머지 값이 없다면 그때마다 'yo!'출력
// increase() {
//   this.counter++;
//   console.log(this.counter); 
//   if(this.counter % 5 === 0) {
//     console.log('yo!');
//   }
// }
// const coolCounter = new Counter();
// coolCounter.increase();
// 문제점: Counter Class 자체에서 하기 때문에 coolCounter를 쓰는 사람이 조절할 수 없음
// 만약 다른걸 출력하고 싶다면? 사용자에게 팝업을 보여주고 싶다면?

//2.callback 함수로 전달
// increase(runIf5Times) {
//   this.counter++;
//   console.log(this.counter); 
//   if(this.counter % 5 === 0) {
//     runIf5Times();
//   }
// }
// const coolCounter = new Counter();
// function printSomething() {
//   console.log('yo!');
// }
// coolCounter.increase(printSomething);
// ++만약 정확한 숫자를 알고 싶다면?
// increase(runIf5Times) {
//   this.counter++;
//   console.log(this.counter); 
//   if(this.counter % 5 === 0) {
//     runIf5Times(this.counter);
//   }
// 
// const coolCounter = new Counter();
// function printSomething(num) {
//   console.log(`yo! ${num}`);
// }
// coolCounter.increase(printSomething);
// 장점: 우리가 'yo'를 'wow'/'alert'로 바꿀 수 있음, 우리가 원하는 기능을 수행할 수 있음
// function alertNum(num) {
//   alert(`Wow! ${num}`);
// }
// 문제점: increase라는 함수를 호출할때마다 모두 전달하려니까 불편함
//3. constructor에서 callback함수를 받게함
// class Counter {
//   constructor(runEveryFiveTimes) { 
//     //constructor도 함수기 때문에 인자로 받아온 아이들을 class자체에서 기억을 해야하기 때문에
//     this.counter = 0;
//     this.callback = runEveryFiveTimes;//callback이라는 변수에 runEveryFiveTimes를 할당
//   }
//   increase() {
//     this.counter++;
//     console.log(this.counter); 
//     if(this.counter % 5 === 0) {
//       this.callback(this.counter);
//   }
// }
// function printSomething(num) {
//   console.log(`wow! ${num}`); 
// }
// const coolCounter = new Counter(printSomething);
//카운터를 만들때 생성자에 우리가 원하는 콜백함수를 전달
//coolCounter라는 object는 Counter라는 class의 청사진을 이용해서 만들었기 때문에 
//coolCounter안에는 Counter와 동일하게 안에 들어있는 counter, callback, increase가 들어있음
//counter는 0부터 시작, callback은 printSomething을 가리키고 있음, 
//increase가 호출될때 마다 counter가 5배가 되면 콜백함수를 호출(this.callback)
//호출할때 class안에있는 counter라는 데이터를 전달해줌(this.counter)
//callback은 결국 printSomething이라는 것을 가리키기 때문에 function printSomething이 수행
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// class에 우리가 원하는 callback함수를 전달하면서 만들고 필요할 때마다 들으면됨

//만약 Counter를 만들때 어떠한 콜백도 전달하지 않으면 constructor의 인자는 undefined
//-> typeError가 발생함
// undefined는 호출할 수 없기 때문에 콜백이 데이터가 있는지 없는지 확인하고 
// undefined가 아닐때만 callback을 불러야함
  // increase() {
  //   this.counter++;
  //   console.log(this.counter); 
  //   if(this.counter % 5 === 0) {
  //   this.callback && this.callback(this.counter); //간단버전
  //     if(this.callback) { //this.callbac이 true이면, undefined가 아니라면
  //       this.callback(this.counter);
  //     }
  //   }
  // }
// 하나의 class로 다양한 object를 만들어서 서로 다른 기능을 수행하는 object를 만들 수 있음
// class의 재사용 가능성이 높아짐
// const printerCounter = new Counter(printSomething);
// const alertCounter = new Counter(alertNum);