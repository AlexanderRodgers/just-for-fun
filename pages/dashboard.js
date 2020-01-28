import React, { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import { Typography } from '@material-ui/core';
import BlockInfo from '../src/components/stocks/BlockInfo';

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ height: '100vh' }}>
        <Typography variant='h2'>Hello Person, Welcome Back!</Typography>
        <Typography variant='h5'>Gainers</Typography>
        <BlockInfo />
      </div>
    </Layout >
  );
}

export default Dashboard;