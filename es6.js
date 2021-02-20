//1.Shorthand roperty names
{
  const eroon1 ={
    name: 'Eroon',
    age: '20',
  };

  const name = 'Eroon';
  const age = '20';
// 변수를 통해서 새로운 object를 만들때
  const eroon2 ={
    name: name,
    age: age,
  };
//❤
  const eroon3 ={
    name,
    age,
  };
  console.log(eroon1, eroon2, eroon3);
}

//2. Destructuring assignment
{
  //object
  const student = {
    name: 'anna',
    level: 1,
  }
  //XX
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }
  //❤
  {
    const{ name, level } = student;
    console.log(name, level);
      //만약 다른 이름으로 선언하고
      const{ name: studentName, level: studentlevel } = student;
      console.log(studentName, studentlevel);
  }

  //array
  const animals = ['😺','🐶']
  //XX
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }
  //❤
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

//3.Spread Syntax
//object안에 들어있는 키들을 모두다 하나하나씩 복사해 오는 것이 아니라
//object가 가리키고 있는 주소의 참조 값만 복사해서 오기때문에 
//spread syntax를 이용해서 복사해 온다고 해도 원래의 object를 변경하게 되면 전부다 영향이 갈 수 있음
{
  const obj1 = { key: 'key1'};
  const obj2 = { key: 'key2'};
  const array = [obj1, obj2];

  //array copy
  const arrayCopy = [...array];//간단하게 배열 복사 가능
  //...: array안에 있는 배열 하나하나씩을 각각 낱개로 가져와서 복사하는 것
  console.log(array,arrayCopy);
  // copy+새롭게 추가
  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = "newKey";// 3가지 전부 다 값이 변경
  console.log(array, arrayCopy, arrayCopy2);

  //object copy
  const obj3 = {...obj1 };
  console.log(obj3);

  //array concatenation
  const fruits1 = ['사과', '복숭아'];
  const fruits2 = ['딸기', '포도'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  //object merge
  const dog1 = {dog1: '🐶'};
  const dog2 = {dog2: '🐕'};
  const dog = {...dog1, ...dog2};
  console.log(dog);
  // 만약 키가 동일한 object를 병합한다면 제일 뒤에오는 아이가 앞에오는 아이를 덮어씌움
  // const dog1 = {dog: '🐶'};
  // const dog2 = {dog: '🐕'};
  // const dog = {...dog1, ...dog2};
  // console.log(dog);
}

//4. Default parameters
{
  //XX
  function printMessage(message) {
    if (message == null) {
      message = 'default message';
    }
    console.log(message);
  }
  printMessage('hello');
  printMessage();//undefined
  
  //❤
  {// 인자 다음에 기본적으로 원하는 초기값을 정해둠
    //인자가 전달될 때는 인자의 값을, 인자가 전달되지 않는다면 기본적으로 설정된 default값을 설정
    function printMessage(message = 'default message') {
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
}

//5. Ternary Operator
{// isCat이라는 변수가 true인지 false인지에 따라서 다른 컴포넌트를 정의하고 싶다면
  const isCat = true; 
  //XX
  {
    let component; 
    if (isCat) {
      component = '😺';
    } else {
      component = '🐶';
    }
    console.log(component);
  }
  //❤
  //isCat이 true이면 고양이를 아니면 강아지를
  const component = isCat ? '😺': '🐶';
  console.log(component);
  console.log(isCat ? '😺': '🐶')
}

//6. Template Literals
{
  const weather= '❄';
  const temparature = '-10';
  //XX
  console.log(
    'Today weather is ' + weather + 'and temperature is ' + temparature +'.' 
  )
  //❤
  console.log(
    `Today weather is ${weather} and temperature is ${temparature}.` 
  )

}