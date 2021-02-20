'use strict';

// Promise Obj is a JavaScript Obj for asynchronous operation.
// a. State: Pending -> fulfilled or rejected
// pending: 프로세스가 heavy한 operation을 시행하고 있는 중인지
// 기능 수행이 완료되어 성공했는지: fulfilled 실패했는지: rejected
// b. Producer와 Consumer의 차이
// Producer: 정보제공
// Consumer: 정보소비

//1. Producer
// promise obj 생성
// when new Promise is created, the executer runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('eroon');
        reject(new Error('no network'));
    }, 2000)
});  // promise를 만드는 순간 excuter함수 바로 실행
    // 만약 네트워크 통신을 하는 코드 작성-> 바로 네트워크 통신 실행
    // 만약 사용자가 요구했을때만 통신을 해야하는 경우 promise 사용X

//2. Consumer: then, catch, finally
promise
//a. then
// promise값이 정상적으로 잘 수행이 된다면(then) 어떤 값(value)를 받아올 거야
// 성공적인 케이스를 다룸
.then((value) => {
    console.log(value);
})
//b. catch
//  error가 발생했을때 어떻게 처리할지 콜백함수 등록
// promise에서 then호출-> promise return-> returned promise에 catch 등록
.catch((error) => {
    console.log(error);
})
//c. finally
// 성공하든지 실패하든지 상관없이 무조건 마지막에 호출
// 어떤 기능을 마지막으로 수행하고 싶을때
.finally(() => {
    console.log('finally');
});

//3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2) //2
.then(num => num * 3) //6
.then(num => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> resolve(num -1),1000);
    });
}) // 5
.then(num => console.log(num)); //5, 2초 소요

//4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
    setTimeout(()=> resolve('🐓'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(()=> reject(new Error(`error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(()=> resolve(`${egg} => 🍳`), 1000);
});

getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
.then(getEgg) // 콜백함수를 전달할때 받아오는 value를 다음 함수로 바로 호출할때 생략 가능
.catch(error =>{
    return '🥩';
}) // 계란을 받아오는 것은 실패했지만, 고기를 대신 전달해줌.
//promise chain이 실패하지 않고 요리까지 완성
.then(cook)
.then(console.log)
.catch(console.log);