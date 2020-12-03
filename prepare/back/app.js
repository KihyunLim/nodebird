const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined')); // 로그를 더 자세하게 보여줌
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: ['http://localhost:3000', 'nodebird.com'], // true로 설정 시 보낸 곳의 주소가 자동으로 입력 됨
    credentials: true, // 쿠키가 서버로 전달되는데 cors 걸리지 않도록 해 줌
  })
);
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/', (req, res) => {
  res.send('hello api');
});

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);

app.listen(3065, () => {
  console.log('서버 실행 중!');
});
