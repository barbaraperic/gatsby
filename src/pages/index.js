import React from 'react';
import { Link } from 'gatsby';
import Layout from './components/layout';

export default () => {
  return (
    <Layout>
      <h2>Hello Frontend Masters!</h2>
      <Link to="/about">Learn more about me &rarr;</Link>
    </Layout>
  );
};
