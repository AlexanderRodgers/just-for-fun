import React, { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import { Typography } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ height: '100vh', width: '100%' }}>
        <Typography variant='h2'>Hello Person, Welcome Back!</Typography>
      </div>
    </Layout >
  );
}

export default Dashboard;