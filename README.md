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

[ ] 정규식 활용한 url 인자 추출

[ ] JSDoc 활용하여 타입 세이프티 챙기기

[ ] API 완성하기

[ ] 리팩토링 하기
