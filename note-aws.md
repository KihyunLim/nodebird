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