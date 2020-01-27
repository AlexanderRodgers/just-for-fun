import React from 'react';
import Layout from '../src/components/Layout';
import { Typography } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Layout>
      <Typography variant='h2'>Hello Person, Welcome Back!</Typography>
    </Layout>
  );
}

export default Dashboard;