# JavaScript React

## 참고 자료
> [위키피디아] : ( https://en.wikipedia.org/wiki/React_(web_framework) )    
> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1720 )    
> [npm] : ( https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner )   
> [create-react-app] : ( https://github.com/facebook/create-react-app )   
 
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
> ## JSX & PROPS
> ### 2.0 Creating your first React Component
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1547 )   
>> [요약] : Component는 HTML을 반환하는 함수의 기능   
>>         React의 문법은 JSX를 사용하며 이는 JavaScript를 확장한 문법이다.   
>>         따라서 코드 작성시    
>>         your.js > import React from "react"; 구문이 없으면 문법 오류가 발생한다.   
>>         ※ 함수형 컴포넌트의 첫글자는 대문자여야 한다. (아닐시 작동 안됨)    
>
> ### 2.1 Reusable Components with JSX + Props
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1548 )   
>> [요약] : Component에 인자 전달 및 사용방법   
>>         ```
>>          function YOUR_COMPONEMT(props){
>>              return <h1> YOUR PROPS {props.arg} </h1> # 참조
>>          }
>>          <YOUR_COMPONENT arg="blabla"> # 호출
>>          ```   
>   
> ### 2.2 Dynamic Component Generation
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1549 )   
>> [요약] : 