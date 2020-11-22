import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true; // 쿠키가 서버로 전달되는데 cors 걸리지 않도록 해 줌

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
