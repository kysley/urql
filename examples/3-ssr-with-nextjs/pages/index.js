import React from 'react';
import Submit from '../components/Submit';
import PostList, { allPostsQuery, allPostsQueryVars } from '../components/PostList';
import withUrqlClient from '../src/with-urql-client';
import initUrqlClient from '../src/init-urql-client';

const Root = () => (
  <>
    <Submit />
    <PostList />
  </>
);

Root.getInitialProps = async () => {
  const [urqlClient] = initUrqlClient();
  // Prefetch data
  await urqlClient
    .query(allPostsQuery, allPostsQueryVars, undefined, true)
    .toPromise();
  return {};
}

export default withUrqlClient(Root);
