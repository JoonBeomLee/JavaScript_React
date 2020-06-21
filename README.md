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
> npx start             # 프로젝트 실행됨
> ```