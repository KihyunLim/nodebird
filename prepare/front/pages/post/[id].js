import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import Head from 'next/head';

import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { backUrl } from '../../config/config';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);

  /**
   * getStaticPaths
   */
  // if (router.isFallback) {
  //   return <div>로딩중...</div>;
  // }

  return (
    <AppLayout>
      <Head>
        <title>{singlePost.User.nickname}님의 글</title>
        <meta name="description" content={singlePost.content} />
        <meta
          property="og:title"
          content={`${singlePost.User.nickname}님의 게시글`}
        />
        <meta property="og:description" content={singlePost.content} />
        <meta
          property="og:image"
          content={
            singlePost.Images[0]
              ? singlePost.Images[0].src
              : `${backUrl}/favicon.ico`
          }
        />
        <meta property="og:url" content={`${backUrl}/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
    </AppLayout>
  );
};

/**
 * fallback: (boolean)
 * - true : 없는 게시물이면 getStaticProps를 통해 해당 게시물을 불러옴(위의 isFallback 상태 확인 후 재랜더)
 * - false : 없는 게시물이면 에러로 리턴 됨
 *
 * getStaticPaths는 미리 html로 서버사이드 랜더링을 해놓기 때문에 적정량의 페이지를 랜더링 해놓을 때 사용하는게 좋음
 */
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: '1' } },
//       { params: { id: '3' } },
//       { params: { id: '4' } },
//     ],
//     fallback: true,
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log(context);

    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Post;
