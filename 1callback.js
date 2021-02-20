'use strict';
// callback 나중에 실행하는 함수

// JavaScript is synchronous. 자바스크립트는 동기적
// Execute the code block by order after hoisting.
// 호이스팅이 된 이후로부터 코드가 순서에 맞춰서 동기적으로 실행
// hoisting: var, function declaration
// 자동적으로 선언이 제일 위로 올라가는 것
// Synchronous: 정해진 순서에 맞게 코드가 실행
console.log('1');
console.log('2');
console.log('3');

// Asynchronous: 비동기적으로 언제 코드가 실행될 지 예측할 수 없음
console.log('1');
    // 우리가 지정한 시간이 지나면 우리가 전달한 콜백 함수를 호출
    // callback 함수: 우리가 전달해준 함수를 나중에 너가 불러줘
        // setTimeout(function (params) {
        //     console.log('2'); 
        // }, 1000); 
    setTimeout(() => console.log('2'), 1000); 
    //우리가 지정한 시간 msec 1000msec=1sec
    // 1초가 지나면 우리가 전달한 함수 실행
console.log('3');

// 1. Synchronous callback: 즉각적으로, 동기적으로 실행
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// 2. Asynchronous callback: 나중에, 언제 실행될지 모름
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
// 1-> 3-> hello-> 2-> async callback

// JavaScript는 함수를 다른 콜백함수의 인자로 전달 가능, 변수에 할당 가능

//----------------------------
// callback hell example
// 콜백 체인의 문제점: 가독성 떨어짐, 한눈에 가늠하기 어려움, 로직 이해하기 어려움
// + error 발생, debugging 굉장히 어려움, 유지보수 어려움
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if(
                (id === 'eroon' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000); 
        // loginUser 함수 호출-> 2초뒤 코드블럭 실행
        // id가 'eroon'이고 PW가 'dream' 이거나
        // id가 'coder'이고 PW가 'academy' 이라면
        // onSuccess콜백 불러줌, id 전달
        // 만약 포함되지 않는다면 onError콜백 불러줌, Error라는 object전달
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'eroon') {
                onSuccess({ name: 'eroon', role: 'admin'});
            } else {
                onError(new Error('not found'));
            }
        }, 1000);
        // 사용자가 역할을 받아올 때 1초 뒤 실행
        // 사용자가 'eroon'이면 onSuccess를 호출
        // + 이름 'eroon', 역할 'admin' object를 전달
        // 만약 eroon이 아니라면 onError 콜백 호출, Eroor에 object를 만들어서 전달
    }
}
// 1. 사용자에게 id와 pw 받아옴
// 2. 서버 ~ 로그인 성공 
// 3. 성공 후 받아온 id로 roles을 요청해서 받아옴
// 4. 성공 후 사용자의 object 출력

//userStorage변수 선언, UserStorage class 생성
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
        },
        error => {
            console.log(eroor)
        }
        );
    },
    error => {
        console.log(eroor);
    }
    );