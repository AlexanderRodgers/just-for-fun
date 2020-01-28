import React, { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import { Typography } from '@material-ui/core';
import { testFunction } from '../src/api/';

const Dashboard = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    testFunction().then(result => {
      setData[result.data];
      console.log(result.data);
    });
  }, [data]);
  return (
    <Layout>
      <Typography variant='h2'>Hello Person, Welcome Back!</Typography>
    </Layout>
  );
}

export default Dashboard;