import React from 'react';
import Layout from '../src/components/Layout';
import { Typography } from '@material-ui/core';
import BasicTable from '../src/components/stocks/BasicTable';

const sp500Tickers = ['MSFT', 'AAPL', 'AMZN', 'FB', 'BRK.B', 'GOOGL', 'GOOG', 'JPM', 'JNJ', 'V'];

const Screener = () => {
  return (
    <Layout>
      <div style={{ width: '100%', height: '100vh' }}>
        <Typography>hello</Typography>
        <BasicTable companies={sp500Tickers} />
      </div>
    </Layout>
  );
}

export default Screener;