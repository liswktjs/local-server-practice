# local-server-practice

🔨 2021.11.06

[X] npm 환경 설정

formatting에는 주로 Prettier 사용

<hr>

##### 명령어 정리

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
