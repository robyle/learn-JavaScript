//7. Optional Chaining
{
  const person1 = {
    name: 'Eroon',
    job: {
      title: 'Student',
      professor: {
        name: 'Hwang',
      },
    },
  };
  const person2 = {
    name: 'Hwang',
  };
  //XXXXXXXXXX
  {
    function printProfessor(person) {
      console.log(person.job.professor.name);
    }
    printProfessor(person1);
    //printProfessor(person2); //Error
  }
  //XXXXX
  {
    function printProfessor(person) {
    console.log(
      person.job
        ? person.job.professor 
          ?person.job.professor.name
          :undefined
        :undefined
      );
    }
  printProfessor(person1);//Hwang
  printProfessor(person2);//undefined
  }
  //XX
  function printProfessor(person) {
    console.log(person.job && person.job.professor && person.job.professor.name)
  }
  printProfessor(person1);//Hwang
  printProfessor(person2);//undefined
  
  //❤
  function printProfessor(person) {
    console.log(person.job?.professor?.name);
  }
  printProfessor(person1);//Hwang
  printProfessor(person2);//undefined  
}

//8. Nullish coalescing Operator
{
  //Logical OR operator
  //false: false, '', 0, null, undefined
  {
    const name = 'Eroon';
    //OR연산자는 앞에 있는 값이 false일때만 뒤에 값이 실행
    const uesrName = name || 'Guest'; // name의 값은 들어있기 때문에 false가 아니므로 name의 값이 출력
    console.log(uesrName);
  }

  {
    const name = null;
    const userName = name || 'Guest'; //'Guest'출력
    console.log(userName);
  }// 버그 발생 가능성 높음
  //name이 null이거나 undefined인 경우(아무것도 지정되어 있지 않은 경우)에만 게스트를 할당하고 싶은데
  {
    const name = '';
    const userName = name || 'Guest'; //'Guest'출력
    console.log(userName);
  //''처럼 문자열이 비어있는 상태에서도 false로 간주되기 때문에 'Guest'가 할당됨
  }
  {
    const num = 0;
    const message = num || 'undefined';
    console.log(message);
  //숫자 0을 할당했지만 0은 false로 간주되기 때문에 'undefined'로 출력
  }
  //❤
  {
    const name = '';
    const userName = name ?? 'Guest';
    //이름이 있다면 이름을 쓰고 이름에 아무런 값이 없다면 Guest를 이용하자
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    //num이라는 변수에 값이 있다면 num을 이용하고 num에 아무런 값도 없을때만 undefined를 이용하자
    console.log(message);
  }
}