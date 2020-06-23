# JavaScript React

## 참고 자료
> [위키피디아] : ( https://en.wikipedia.org/wiki/React_(web_framework) )    
> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1720 )    
> [JavaScript_ES6] : ( https://www.w3schools.com/js/js_es6.asp )   
> [npm] : ( https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner )   
> [create-react-app] : ( https://github.com/facebook/create-react-app )   
> [React_PropTypes] : ( https://ko.reactjs.org/docs/typechecking-with-proptypes.html )   
> [React_LifeCycle] : ( https://ko.reactjs.org/docs/state-and-lifecycle.html )   
> [React_Hook] : ( https://ko.reactjs.org/docs/hooks-intro.html )   
 
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
>>    
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
>> ```
>> ※ 자세한 내용은 위의 참조링크를 확인   
>
> ## 3 STATE
> ### 3.0 Class Components and State
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1552 )   
>> [요약]   
>> 클래스 Component의 사용방법   
>> ``` 
>> class YOUR_CLASS extends React.Component {
>>      state = {       # state는 오브젝트로 class의 변수를 저장하는 역할 
>>          YOUR_VAR: 0 # 변수 초기화
>>      };
>>      YOUR_FUNCTION = () => {                 # 사용자 함수 선언 방법
>>          console.log("YOUR_FUNCTION_ACTIVE");
>>      };
>>      render() {      # react는 render를 자동 호출하여 화면에 출력 가능하게 한다.
>>          return ( 
>>                 <h1> YOUR CLASS COMPONENT TESTING ! <h1> 
>>                 <h2> YOUR STATE VAR IS {this.state.YOUR_VAR} <h2>        # this.state.VAR_NAME으로 참조하여 사용
>>                 <button onClick={this.YOUR_FUNCTION}>YOUR_FUNCTION</button>  # this.FUN_NAME으로 참조 가능
>>          );
>>      }
>> }
>> ```
>    
> ### 3.1 All you need to know about State
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1553 )   
>> [요약]   
>> ```
>> YOUR_FUNC() {
>>  this.state.YOUR_VAR = 0;    # 값 직접 수정 불가능 ERROR
>>  this.setState({YOUR_VAR= 1}) # setState를 통해 state를 새로운 값으로 전달하여 값 변환
>>  this.setState(current => ({ YOUR_VAR : current.YOUR_VAR + 1}))      # current를 사용해 현재 값에다 추가적인 작업도 가능
>> };   # setState 호출시 변경된 state값을 반영하기 위해 해당 부분의 render()를 새롭게 호출 값 반영하여 화면 출력
>> 
>> render () {
>>      return ( 
>>          <h1> MY STATE VAR IS {this.state.YOUR_VAR} </h1>    
>>          <button onClick={this.YOUR_FUNC}>FUNC</button>      # FUNC을 통한 값 직접 변경시 오류 발생
>> }
>> ```
>   
> ### 3.2 Component Life Cycle
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1554 )   
>> [요약]   
>> render() 함수와 마찬가지로 React.Component에서 기본 제공하는 함수들.   
>> Component가 호출되는 다양한 시점을 제공한다. 원하는 시점에 맞게 기능을 작성 할 수 있다.   
>> mounting   # Component 생성
>> updating   #           업데이트
>> unMounting #           제거
>> ※ 자세한 내용은 위의 참조링크를 확인   
>   
>> ### 3.3 Planning the Movie Component
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1555 )   
>   
> ## 4 MAKING THE MOVIE APP
> ### 4.0 Fetching Movies from API
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1556 )   
>> [요약]   
>> axios 네트워크 통신(http)을 지원   
>> ```
>> npm install axios # 설치
>> import axios from 'axios' # 사용
>> ``` 
>> YTS MovieList Api를 사용   
>> ```
>> # 비동기 함수 선언   
>> async function YOUR_FUNCTION(){      # async로 함수 선언시 await 사용 가능   
>>      const DATA = await axios.get(YOUR_URL); # axios의 작업이 끝날때 까지 대기한다.   
>> }
>> ``` 
>   
> ### 4.1 Rendering the Movies
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1557 )   
>   
> ### 4.2 Styling the Movies
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1558 )   
>> [요약]   
>> ```
>> <tag style={{css_code}} />       # style={{ }}을 통해서 css를 적용할수 있다.
>> ```
>   
> ### 4.3 Adding Genres
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1559 )   
>> [요약]   
>> JSX 내부   
>> ```
>> <tag class="ERROR_YOUR_CLASS_NAME">  # class는 javaScript의 class예약어와 충돌이 발생하기 때문에 className을 사용한다. 
>> <tag className="CORRECT_YOUR_CLASS_NAME> # render시 className => class로 출력이 된다.
>> ```   
>   
> ### 4.4 Styles Timelapse
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1560 )   
>   
> ### 4.5 Cutting the Summary
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1561 )   
>> [요약]   
>> ```
>> # javascript array slice
>> const YOUR_ARRAY = "TESTTESTTESTTESTTESTTEST";
>> YOUR_ARRAY.slice(START_POINT, END_POINT)         # 문자열을 시작과 끝지점을 잘라서 반환   
>> ```
>   
> ## 5 CONCLUSIONS
> ### 5.0 Deploying to Github Pages
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1562 )   
>> [요약]    
>> ```
>> npm install gh-pages     # Git Hub를 통한 웹 배포를 할 수 있다.
>> YOUR_APP > pakgae.json > 
>> """
>> "scripts" :{
>>  "build":  "react-scripts build" # pakage.json 수정후 적용 위해 build 실행 필요
>>  "deploy": "gh-pages -d build"            # script에 추가  
>>  "predeploy": "npm run build"    # 작성한 app/*.js를 배포전 최적화 위한 명령어 추가
>> }
>> """
>> "homepage": "https://{YOUR_GITHUB_USER_NAME}.github.io/{YOUR_PROJECT_NAME_IN_GITHUB}"        # 접근가능한 경로 설정 필요
>>   
>> npm run deploy       # deploy 호출시 predeploy를 호출 src/YOUR.js 작성된 파일을 기반으로 build/ 에 최적화하여 파일 생성 
>> 완료시 hompage의 링크로 페이지 접근 가능   
>> ```
>   
> ### 5.1 Are we done?
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1562 )   
>> [요약]   
>> class Component's state의 역할을 하는 React Hook을 알아보자. 위의 참조 링크 확인.   
>  
> ## 6 ROUTING BONUS
> ### 6.0 Getting Ready for the Router
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1564 )   
>> [요약]   
>> react-router-dom 접근하는 경로별 각각의 페이지를 보여줄 수 있다.   
>> ```
>> npm install react-router-dom # 설치
>> ```
>   
> ### 6.1 Building The Router
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1565 )   
>> [요약]   
>> ```
>> import { HashRouter, Route } from 'react-router-dom'     # react-router-dom 모듈 선언
>> import YOUR_COMPONENT from 'YOUR_COMPONENT_PATH'         # Router로 출력할 컴포넌트
>> """
>> <HashRouter>
>>  <Router path="YOUR_URL_PATH", component={YOUR_COMPONENT} />     # path에 지정된 경로로 접근시 component에 작성한 페이지 출력
>>  <Router path="1", component={YOUR_COMPONENT} />     
>>  <Router path="1/2", component={YOUR_COMPONENT} />     # 접근 url이 1/2일경우 2개의 컴포넌트가 출력된다.
>>  <Router path="1/2" exact={true}, component={YOUR_COMPONENT} />     # exact를 추가하면 url이 정확히 일치 할 때만 컴포넌트를 출력한다.
>> </HashRouter>
>> ```
>   
> ### 6.2 Building The Navigation
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1566 )   
>> [요약]   
>> ```
>> <a href="TARGET_URL"> href </a>            # href를 사용할시 페이지 새로고침이 발생
>> import {Link} from 'react-router-dom';
>> <Link to="TARGET_URL"> Link </Link>        # react 멈춤 없이 url 이동 가능
>> ```   
>   
> ### 6.3 Sharing Props Between Routes
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1567 )   
>> [요약]   
>> Route시 porps 전달하고 사용하는 방법   
>> ```
>> <Link to="URL"> LINK </Link>             # 앞서 Link를 통해 원하는 URL로 페이지를 이동했다면
>> <Link to={{                              # 단순 이동 뿐아니라 prop데이터를 전달할 수도 있다. 
>>      pathname: URL,                      # pathname으로 이동 url 지정
>>      state: {                            # 이동시 전달할 데이터 삽입  
>>          prop1: data1,
>>          prop2: data2,
>>          """"""   
>>      }
>> }}>
>> ```
>   
> ### 6.4 Redirecting
>> [강의] : ( https://nomadcoders.co/react-fundamentals/lectures/1568 )   
>> [요약]   
>> Route로 이동시 전달되는 prop은 기본적으로 다양한 데이터를 가지고 있다. 그 중   
>> history는 페이지 이동 기록을 가지고 있는데 props.history.push("YOUR_PATH")를 통해   
>> 원하는 경로로 이동(redirect)이 가능하다.   