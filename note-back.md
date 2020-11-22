node는 서버가 아니다. node는 자바스크립트 실행을 할 수 있게 해주는 환경일 뿐이다.

get : 가져오다
post : 생성하다
put : 전체 수정 (한 row 전체 정보 수정하거나 덮어 씌울 때)
delete : 제거
patch : 부분 수정 (특정 필드만 수정 시 사용)
options : 찔러보기
head : 헤더만 가져오기

back를 구현할 폴더에 app.js 생성 후

npm init
- back를 구현할 폴더에서 실행

npm i express
- 기존 노드 http보다 코드를 깔끔하게 구현하게 해 줌

npm i express-session
npm i cookie-parser
npm i dotenv
- 비밀번호 같은 하드코딩 정보 관리

npm i mysql2 sequelize sequelize-cli
- mysql2@2.1.0 / sequelize@5.21.13 / sequelize@5.5.1
- mysql2 : 노드와 sql 연결 드라이버
- sequelize : js로 sql 작성해주는 라이브러리

npm i -D nodemon
- 코드 수정 시 서버 재실행

package.json script 수정
- `"dev": "nodemon app"`로 수정

npx sequelize init

/config/config.json에 디비 정보 입력
/models/index.js 파일 수정

테이블 설정 파일 작성
- /models/user,post,comment,hastag,image.js 작성

npx sequelize db:create
- squelize로 db 생성

npm i bcrypt
- 비밀번호 암호화 시 사용

npm i cors
- cors 방지

npm i passport passport-local
- passport : 네이버, 카카오, 구글 등 로그인 전략에 사용
- passport-local : 이메일/비번, 아이디/비번처럼 직접 입력하는 로그인에 사용

npm i morgan
- 프론트에서 백으로 보낸 요청이 터미널에 기록 됨

npm i multer
- multpart/form-data 처리

---

utf8mb4 : 이모티콘을 넣을 수 있는 글자 형식
swagger : api 작성 툴?