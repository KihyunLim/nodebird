접속하고자 하는 front/back ec2에서 연결 > ssh클라이언트 > '예'에 있는 주소 복사
.pem 파일이 있는 곳까지 터미널 이동 후 붙여 넣기
  yes 입력
git clone [prepare있는 깃 주소]
노드 설치
  - front/back 폴더 이동
  - sudo apt-get update
  - sudo apt-get install -y build-essential
  - curl -sL http://deb.nodesource.com/setup_14.x | sudo -E bash --
  - sudo apt-get install -y nodejs
node -v, npm -v 로 설치 확인
npm i 로 소스 받기
  - git pull : 커밋된 소스 있으면 최신화
    - Aborting 관련 에러 뜨면 git reset --hard 후 git pull

front에서 빌드
npm run build

back에서 msyql 설치
sudo apt-get i nstall -y mysql-server 했지만 5버전이 설치되고 8버전 사용을 위해 아래 명령어 사용
  - wget -c https://repo.mysql.com/mysql-apt-config_0.8.13-1_all.deb
  - sudo dpkg -i mysql-apt-config_0.8.13-1_all.deb
  - sudo apt-get update
  - sudo apt-get install mysql-server
sudo su
mysql_secure_installation 
- 비번 설정 같은거 함
mysql -uroot -p
- mysql 실행 후 버전 확인
  - 비밀번호 재설정 : ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Nodebird2@';
  - 비밀번호 강도 확인 : SHOW VARIABLES LIKE 'validate_password%' - 최소 8자, 대/소/숫자/특수 포함

back폴더에서
 - vim .env 생성 후 비밀번호 작성 (위의 비밀번호와 동일하게 설정해야함)
 - vim app.js 맨 하단의 포트 번호 변경 : 3065 > 80

npm start

back instance의 public ip 복사해서 주소줄에 입력하면 'hello express'로 루트로 입력해둿던 응답 돌아오는거 확인 가능

npm i pm2
- node app(=> npm start)로 서버 실행하다 `ctrl + c`로 나가면 서버도 같이 종료 됨(foreground process)
- 위를 방지하기 위해 background process 방식으로 실행 시켜줘야 함(node app $ 로 실행해도 되지만 pm2가 편리함)
package.json의 npm start 수정
- `cross-env NODE_ENV=production pm2 start app.js`로 수정 (npm i pm2 cross-env helmet hpp)
sudo npm start && sudo npx pm2 monit
- background process로 서버 실행 확인 가능
- 서버 모니터링 명령어
npx pm2 kill
- 서버 종료 명령어
npx pm2 logs
npx pm2 logs -error
- 에러 로그 확인 명령어
npx pm2 list
- 실행중인 프로세스 리스트
npx pm2 start app.js
- app.js 실행
npx pm2 reload all
- 리스트에 있는 서버 모두 재시작
**1023 이하의 포트는 sudo를 사용하여 루트 권한으로 실행해야 한다.**

sudo lsof -i tcp:[port번호]
- 실행되고 있는 포트 번호 확인
sudo npx pm2 kill

**Error: listen EADDRINUSE: address already in use :::80** 
node가 프로세스 계속 사용 중이면 killall -9 node



front 폴더에서

npm run build
- 백은 안해도 프론트는 빌드를 해줘야 함
sudo npx pm2 start npm -- start
- pm2를 이용해서 프론트 서버 실행