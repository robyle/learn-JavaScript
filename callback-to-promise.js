// callback hell example -> promise chaining

class UserStorage {
    loginUser(id, password) {
        return new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                if(
                    (id === 'eroon' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000); });
        }
        
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'eroon') {
                    resolve({ name: 'eroon', role: 'admin'});
                } else {
                    reject(new Error('not found'));
                }
            }, 1000);
        });
    }
}


//userStorage변수 선언, UserStorage class 생성
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);


// 연습
// const userStorage = () =>
// new Promise((resolve, reject) => {});
// const id = () =>
// new Promise((resolve, reject) =>{
//     setTimeout(()=> resolve('enter your id'));
// });
// const password = () =>
// new Promise((resolve, reject) => {
//     setTimeout(()=> resolve("enter your password"));
// });

// userStorage()
// .then(id)
// .then(password)
// .then(console.log)
// .catch(console.log);