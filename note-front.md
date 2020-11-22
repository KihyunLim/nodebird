npm init
npm i react react-dom
npm i next@9
npm i prop-types
npm i -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
npm i -D babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react-hooks eslint-plugin-jsx-a11y
npm i antd styled-components @ant-design/icons
npm i babel-plugin-styled-components
npm i redux react-redux next-redux-wrapper redux-devtools-extension
- 일반적으로 redux를 설정하는 방법이 있는데 이 라이브러리가 쉽게 도와줌
npm i react-slick
- 이미지 슬라이드 라이브러리
npm i redux-saga next-redux-saga
- next-redux-saga는 나중에 안쓰긴 함
npm i immer
- 불변성 법칙 관련 코드 쉽게 처리
npm i axios
npm i shortid
- 랜덤으로 id 생성
npm i faker
- 더미데이터 생성

package.json 수정
- `"script": {"dev": "next"}`

.eslintrc 파일 생성
```json
{
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["import", "react-hooks"]
}
```

.babelrc 파일 생성
- 화면 스타일이 사라지는 경우(head태그에 ant 스타일이 사라짐)
- 첫 페이지는 SSR인데 이후 CSR로 화면 렌더링하면서 서버에서 받은 클래스 명이 달라지면서 나타나는 현상
  - 출처 : https://velog.io/@hwang-eunji/Styled-components-nextjs%EC%97%90%EC%84%9C-className-%EC%98%A4%EB%A5%98
- 경로 설정 오타로 발견 함
- 경고 코드 : `Warning : Props 'className' did not match. Server : "~~~" Client: :"~~~"`
```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      { "filename": true, "displayName": true, "pure": true }
    ]
  ]
}
---- 제로초 버전 
["babel-plugin-styled-components", { "ssr": true, "displayName": true }]
```

루트폴더에 pages 폴더 생성
- 여기에 생성된 파일을 next가 코드 스플릿팅을 해줌
- 구분될 페이지 js파일 생성
- 페이지 공통 부분 처리
  - `pages/_app.js`에 선언되면 모든 페이지에 공통 처리된다.
  - `{ Components }`로 매개변수 받은건 `index.js`에서 `<AppLayout/>` 리턴 받는 것

루트폴더에 components(== 프레젠터) 폴더 생성
- 재사용 가능한 컴포턴트 js파일 생성

---

화면 비율 기준 (반응형 디자인)
gutter: 컬럼 사이 간격 지정
xs: 모바일
sm: 태블릿
md: 작은 데스크탑
- n/24로 기준 잡고 100%는 24

---

npm i redux-thunk
npm rm redux-thunk
- redux에서 dispatch를 여러개 사용할 수 있도록 해줌
- saga를 대부분 사용해서 많이들 사용을 하진 않음