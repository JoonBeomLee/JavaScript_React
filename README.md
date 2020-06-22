# JavaScript React

## 참고 자료
> [위키피디아] : ( https://en.wikipedia.org/wiki/React_(web_framework) )    
> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1720 )    
> [npm] : ( https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner )   
> [create-react-app] : ( https://github.com/facebook/create-react-app )   
> [React_PropTypes] : ( https://ko.reactjs.org/docs/typechecking-with-proptypes.html )
 
## 사전 준비
> node.js 설치
> 사용중인 OS에 맞게 [설치] : ( https://nodejs.org/ko/download/ )   
> ```
> CMD
> node -v 설치된 버전이 출력되면 정상 설치됨. 
> ```
>    
> 앞선 작업으로 node.js, npm이 설치됨 추가적으로 npx를 설치해야함.   
> npm과 npx에 관한 자료는 참고자료를 확인해보자.   
> ```
> # npx 설치
> CMD > 
> npm install npx -g 
> ```
> 두 작업 모두 끝났다면 사전 준비는 완료가 되었다.   

## 프로젝트 생성
> ```
> npx create-react-app YOUR_APP_NAME
> ```
> 명령어를 실행한 경로에 YOUR_APP_NAME으로된 app이 생성될것이다.    
> app_name에 대문자는 사용하지 못한다.   

## 프로젝트 실행
> ```
> cd YOUR_APP_NAME 
> npx start             # 프로젝트 실행됨 | 터미널에서 제공하는 링크로 페이지 확인 가능
> ```

## Normad Coders React 강의
> ## 2 JSX & PROPS
> ### 2.0 Creating your first React Component
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1547 )   
>> [요약]   
>> Component는 HTML을 반환하는 함수의 기능   
>> React의 문법은 JSX를 사용하며 이는 JavaScript를 확장한 문법이다.   
>> 따라서 코드 작성시    
>> your.js > import React from 'react'; 구문이 없으면 문법 오류가 발생한다.   
>> ※ 함수형 컴포넌트의 첫글자는 대문자여야 한다. (아닐시 작동 안됨)    
>
> ### 2.1 Reusable Components with JSX + Props
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1548 )   
>> [요약]   
>> Component에 인자 전달 및 사용방법   
>> ```
>> function YOUR_COMPONEMT(props){   
>>  return <h1> YOUR PROPS {props.arg} </h1> # 참조   
>> }   
>> <YOUR_COMPONENT arg="blabla"> # 호출   
>> ```   
>   
> ### 2.2 Dynamic Component Generation
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1549 )   
>> [요약]   
>> Component에서의 동적 데이터 처리 및 렌더링 방법
>
> ### 2.3 map Recap
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1550 )   
>
> ### 2.4 Protection with PropTypes
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1551 )   
>> [요약]   
>> propTypes    //  전달받은 props의 데이터 체크 가능   
>> ```
>> npm install prop-types      # 설치
>> YOUR_APPS > package.json > dependencies 추가 확인
>> import PropTypes from 'prop-types';      # module추가
>> ```   
>> function YOUR_COMPONENT({args1, args2, args3}){
>>      return (
>>         <h1>TESTING TYPE {args1} </h1> 
>>         <h1>TESTING TYPE {args2} </h1> 
>>         <h1>TESTING TYPE {args3} </h1> 
>>  );    
>> }
>> YOUR_CONPONENT.proptypes = {                 # 전달되는 props의 args의 타입을 제한할 수 있다.
>>  args1: PropTypes.string.isRequired,    
>>  args1: PropTypes.string.isRequired,    
>>  args1: PropTypes.string.isRequired,    
>> }
>>
>> function PRINT_COMPONET(){
>>    return (
>>        <div>
>>          <YOUR_COMPONENT args1="args1" args2=2 args3="1234">         # args2의 타입이 string이 아니면 오류
>>    )
>> }
>> ※ 자세한 내용은 위의 참조링크를 확인   
>
> ## 3 STATE
>> ### 3.0 Class Components and State
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1552 )