import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Minnesota!</p>
      <Link to="/about/">Learn about me &rarr;</Link>
      <h2>Read my posts</h2>
      {posts.map(post => (
        <div>
          <h2>{post.title}</h2>
          <h2>{post.author}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};
