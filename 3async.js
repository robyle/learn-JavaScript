// async & await
// clear style of using promise
// promise를 유지해서 써야하는 경우도 있고
// async와 await로 변환해야지 조금더 깔끔해지는 경우도 있음

// 1. async
function  fetchUser() {
  //do network request in 10secs..
  //no.1 
  //return 'eroon';
  //no.2
  return new Promise((resolve, reject) => {
    //return 'eroon'; 
    // promise{<pending>}: resolve, reject 호출하지 않았을때
    resolve('eroon');
  });
}
// 비동기적인 데이터 처리를 하지 않으면 사용자의 데이터를 받아오는데 10초나 걸림
const user = fetchUser();
user.then(console.log);
console.log(user);
//no.3
// async만 사용하면 promise사용하지 않아도 자동적으로 promise로 변환
async function fetchUSer() {
  return 'eroon';
}
const user2 = fetchUser();
user2.then(console.log);
console.log(user2);

//2. await
// promise를 리턴, 정해진 ms가 지나면 resolve가 호출
function  delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// await: async가 붙은 함수 안에서만 사용 가능
async function getApple() {
  await delay(3000); // delay가 끝날때까지 기다려줌
  throw 'error';
  return '🍎';
}

async function getBanana() {
  await delay(3000);
  return '🍌';
}
// 비교! Promise를 이용했을때
// function getBanana() {
//   return delay(3000);
//   .then(()=> '🍌');  
// }

// promise도 너무 중첩적으로 사용하면 콜백지옥과 비슷한 문제에 빠짐
// function pickFruits() {
//   return getApple()
//   .then(apple =>{
//     return getBanana()
//     .then(banana => `${apple}+${banana}`);
//   });
// }

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`; 
}
pickFruits().then(console.log);

// async function pickFruits() {
//   //error 처리
//   try {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;  
//   } catch() {
//   }
// }

//awit 병렬처리 XXX더러움
// async function pickFruits() {
//   const applePromise = getApple();
//   const bananaPromise = getBanana();
//   const apple = await applePromise;
//   const banana = await bananaPromise;
//   return `${apple} + ${banana}`;  
//   } 
// pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  //all을 사용해 배열 -> 병렬적으로 빠르게 출력
  .then(fruits => fruits.join('+'));//join을 사용해 string으로 나타냄
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}// race를 사용하면 먼저 수행되는 딱 하나만 출력
pickOnlyOne().then(console.log);