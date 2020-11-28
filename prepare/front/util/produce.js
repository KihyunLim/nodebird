// immer이 ie11에서 동작을 안하는데 이를 해결하기 위해 enableES5를 먼저 실행 시켜 줌
// ~ ie10 지원 안함
// 지원 안할 경우 나오는 에러 : [Immer] minified error nr 19: ES5. Find the full error at: ~~~
import { enableES5, produce } from 'immer';

const Produce = (...args) => {
  enableES5();
  return produce(...args);
};

export default Produce;
