import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h2>About me</h2>
      <p>This is my personal website</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
};
