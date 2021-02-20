'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declaration
//class 생성
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
//object 생성
const eroon = new Person('eroon', 24);
console.log(eroon.name);
console.log(eroon.age);
eroon.speak();

// 2. Getter and setters
// 클래스를 잘못 사용해도 방어적으로 만들어줌
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastname = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        // 공격적인 방법
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        // 젠틀한 방법
        this._age = value < 0 ? 0 : value;
    }
} 
//class: 커피 자판기
//methods: put coins, make coffee
//+property: number of coffee - 사용자가 바꾸지 못하도록 privit: 인캡슐레이션
// 사용자가 -1로 설정하면 안됨 -> setter에서 0으로 만들어줌

const user1 = new User('Steve', 'Jobs', -1); // 사용자가 실수로 -1로 설정
console.log(user1.age);

// 3. Fields (public, private)
// too soon!
class Experiment {
    publicField = 2;// 외부에서 접근 가능
    #privateField = 0; //class내부에서만 보여짐, 접근, 변경
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. static properties and methods
// too soon!
//object와 상관없이 class에서 공통적으로 사용되는 것 -> static, static method
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
//object와 상관없이 class의 고유한 값, 동일한 method -> class자체 연결
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //class로 값을 줘야함
Article.printPublisher();

// ***상속, 다양성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color !`)
    }
    getArea() {
        return this.width * this.height;
    }
}

// extends 사용!
//class Rectangle안에 class shape 자동으로 포함
class Rectangle extends Shape {}
class Triangle extends Shape {
    
    draw() {
        super.draw();//부모 안의 draw 호출 super.
        console.log('▲');
    }

    getArea() {
        return (this.width * this.height) / 2;
    } // 필요한 함수만 overwriting
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
// 왼쪽에 있는 object가 오른쪽 class에 있는 object인지 아닌지
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);