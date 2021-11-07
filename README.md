# local-server-practice

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

<hr>

🔨 2021.11.06

[X] npm 환경 설정

formatting에는 주로 Prettier 사용

<hr>

🔍 2021.11.07

[X] eslint 환경 설정

[ ] typescript 환경 설정

[ ] API 라우팅 처리 HTTPie 이용한 테스팅
