import React, { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import { Typography } from '@material-ui/core';
import quotes from '../mock/quotes.json'
import BlockInfo from '../src/components/stocks/BlockInfo';

const Dashboard = () => {
  const [stockList, getStocks] = useState([]);
  useEffect(() => {
    getStocks(quotes);
  }, []);

  return (
    <Layout>
      <div style={{ height: '100vh', width: '100%' }}>
        <Typography variant='h2'>Hello Person, Welcome Back!</Typography>
        {stockList && stockList.length !== 0 && <BlockInfo values={stockList} />}
      </div>
    </Layout >
  );
}

export default Dashboard;