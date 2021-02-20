// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // join
  // const result = fruits.join();
  // console.log(result);
  const result = fruits.join('|'); //<- 원하는 구분자 선택 가능
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // const result = fruits.split(',');
  // console.log(result);
  const result = fruits.split(',', 2); //<- limit은 optional
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // array자체를 reverse 함
}

// Q4. make new array without the first two elements
{
  // const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2);
  // console.log(result);
  // console.log(array);
  // XXX array 자체가 변형됨

  const result = array.slice(2, 5); // 마지막 숫자는 배제됨: index4까지 나타내려면 5라고 써야함
    console.log(result);
    console.log(array);

  // splice : 배열 자체를 수정
  // slice : 배열에서 원하는 부분만 return해서 받아오고 싶을 때
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result = students.find(function (student, index) {
  //   console.log(students, index);    
  // });

  // const result = students.find(function (student) {
  //   return student.score  === 90; 
  // });
  // console.log(result);

  // with arrow function
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);// true - 50점보다 낮은 사람이 한명이라도 있으면

  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);// 배열에 있는 모든 요소들이 이 조건을 충족해야지 true
  console.log(true); //true
  console.log(!true); // false
  //some: 배열 중에 어떤 것이라도 하나 만족되는 것이 있는지 없는지 검사
  //every: 모든 배열의 조건이 만족되어야 할때
}
console.clear();
// Q9. compute students' average score
{
  // const result = students.reduce((prev, curr) =>{
  //   console.log('-------'); // 구분선
  //   console.log(prev);
  //   console.log(curr);
  //   return curr; // return하는 값들이 순차적으로 previous로 연결 
  // }, 0);// 0으로 시작

  // reduce: 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 쓰임
  // reduceRight: 배열의 제일 뒤에서 부터 시작
  // const result = students.reduce((prev, curr) =>{
  //   console.log('------');
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);
  // console.log(result);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);

  const result2 = students
  .map((student) => student.score) // 점수로 변환
  .filter((score) => score >= 50) // 50점 이상 필터링
  .join(); // string으로 조인
  console.log(result2);

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90' : 정렬
{
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b) // 정렬
  // .sort((a, b) => b - a)// 큰 수부터 작은 수로 정렬
  .join();
  console.log(result)
}
