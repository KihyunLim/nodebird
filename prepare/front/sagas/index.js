import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true; // 쿠키가 서버로 전달되는데 cors 걸리지 않도록 해 줌

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
