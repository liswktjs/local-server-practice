# local-server-practice

### node.js 익히기 위한 토이 프로젝트 웹 서버 만들기

- 블로그 포스팅 서비스

  > > 1.  로컬 파일을 데이터 베이스로 사용 (JSON)
  > > 2.  인증 로직은 넣지 않는다
  > > 3.  RESTful API를 사용

- Post(=블로그 글) 조건들

> > GET /posts : 포스트 전체 글을 볼 때
> > GET /posts/:id : 특정 id를 가진 포스트들만 보여줄 때
> > POST /posts : 새로운 포스트를 작성할 떄

<hr>
### 명령어 정리

npm init -y : package.json 설치

npm install --save-dev prettier : Prettier 설치
-> .prettierrc 파일 생성 -> vscode에 적용시 .vscode폴더에 settings.json 파일 생성 -> settings.json에 해당 코드 입력하기

```
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```

npm install --sav-dev eslint : eslint설치 -> .eslintrc.js 파일 생성 ->
npm intsall --sav-dev eslint-config-airbnb-base eslint-plugin-import(에어비엔비에서 개발한 eslint룰 package 설치)
-> eslint, prettier의 충돌 방지를 위해서 npm install --sav-dev eslint-config-prettier 설치 -> .eslintrc.js에 아래의 코드 입력

```
module.exports = {
  extends: ['airbnb-base', 'prettier'],
```

- tip! 특정기능에 대해 eslint기능을 끄고 싶을 때에 아래 줄 입력

```
/* eslint-disable-next-line no-console */
```

npm install --save-dev eslint-plugin-node -> .eslintrc.js의 extends에 'plugin:node/recommanded' 추가

npm install --save-dev typescript : 타입스크립트 설치

-> 사용을 위해서는 타입스크립트를 적용하고자 하는 파일 맨 첫 줄에 아래 내용 입력

```
//@ts-check
```

npm install --save-dev @types/node : 타입스크립트가 노드 환경에서 동작 할 수 있도록 하기 위한 패키지 설치 (노드에서 주로 사용하는 객체에 대한 정보들이 들어가 있음)

jsconfig.json 파일 생성 (타입스크립트를 통해 오타와 같은 상황들을 잡기 위해서 설정이 필요) -> 아래와 같은 설정 추가

```
{
  "compilerOptions": {
    "strict": true
  }
}

```

와 같은 설정 추가

npm install nodemon --save-dev : nodemon 설치하기 server을 매번 재 시작 하지 않고 수정되면 바로 서버가 다시 실행된다

package.json 의 script에 nodemon 부분 추가하기

```
"server": "nodemon src/main.js"
```

<hr>

🔨 2021.11.06

[X] npm 환경 설정

formatting에는 주로 Prettier 사용 , Lintting에는 ESLint 사용

<hr>

🔍 2021.11.07

[X] eslint 환경 설정

[X] typescript 환경 설정

[X] API 라우팅 처리 그리고 테스트

자바스크립트의 경우 미리 데이터 자료형을 설정해 두지 않기 때문에 실행시 에러가 발생할 수 있다
그렇기 때문에 타입스크립트를 활용하여 이 점을 보안한다

<hr>

🥓 2021.11.08

[X] 정규식 활용해서 url 인자에서 id 값 추출하기

[X] JSDoc 활용하여 타입 세이프티 챙기기

[X] API 완성하기

[X] 리팩토링 하기

- 정규식에서 값을 추출하고자 하는 대상인 postid가 해당하는 부분에 ()를 쳐준다 -> 정규식에.exec(넘겨지는 url 변수넣기 ) 를 하게 되면 배열이 return 되는데 이때 배열 안에 괄호를 쳤던 postId가 원소중 하나로 들어가 있다 -> id를 추출하기 위해서 인덱스를 통해 접근한다

- JSDoc 활용해 탕비 미리 정의하기 : 자바스크립트의 경우 사전에 데이터 자료형을 정의할 수 없기때문에 사전에 JSDoc을 활용해서 데이터 자료형을 정의하게 되면 미리미리 데이터 자료형을 검사 확인 할 수 있다

```
/**
 * @typedef  Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */   -> Post라는 형식을 가진 배열의 데이터 타입을 확인한다는 의미 (확인하고자 하는 데이터들 위에 기재해준다)
```

<hr>

🎨 2021.11.09

[X] JSON 파일을 데이터베이스로 읽기 쓰기 기능 구현

[X] require 모듈 개념 정리

[X] npm, yarn 패키지 매니저 관리

[X] node.js 컨벤션

#### require

: 다른 js 파일에서 export한 모듈을 불러올 수 있다

\*모듈이란? node.js에서는 각 파일 하나 하나가 모듈로 취급이 된다

사용방법

```
//commonJS
module.exports = animals // 다른 파일에서 추출

require('./animals)

//ECMA

export default animals
import animals from './animals.js"
```

- node_modules 폴더 안에 있는 파일들의 경우 require로 불러올 때 상대경로를 쓰지않고 절대 경로를 써도 불러 올 수 있다

#### package.json

: npm을 통해서 설치한 것들의 대략적인 내용이 들어가 있음

package-lock.json 현재 설치되어 있는 것들의 정확한 버전 정보 등이 들어 가 있음 협업을 할때에 중요한 확인 사항이다

- scripts: 유저가 설정하는 명령어 ,실행시에는 지정한 변수명을 npm run 변수명 에 넣어서 실행 시킨다

#### yarn

파일 설치 명령어 : yarn add 패키지이름

파일 삭제 명령어 : yarn remove 패키지이름

#### 컨벤션

: 파일 이름, 글쓰는 방식, api를 어떻게 생성하는 지 등의 규칙

- 파일이름 : 소문자로만 이루어져야 한다 / - \_ 기호를 넣을 수 있다
  (export를 할때에 소문자와 대문자를 섞어서 사용할 때에 잠재적인 문제가 발생이 가능하다 )

#### 노드의 데이터 구조

- buffer : 고정된 길이의 byte sequence를 나타낼때 사용 /파일을 읽을 때 사용됨
  사용예시

```
const buf = Buffer.from([97,98,99,100]) // abcd 의 dec 값
```
