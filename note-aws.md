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
  - npm pull : 커밋된 소스 있으면 최신화

front에서
npm run build