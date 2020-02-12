import React from 'react';
import Layout from '../src/components/Layout';
import BasicTable from '../src/components/stocks/BasicTable';
import Grid from '@material-ui/core/Grid';
import AttributeSelect from '../src/components/stocks/AttributeSelect'

const sp500Tickers = ['MSFT', 'AAPL', 'AMZN', 'FB', 'BRK.B', 'GOOGL', 'GOOG', 'JPM', 'JNJ', 'V'];

const Screener = () => {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <AttributeSelect />
        </Grid>
        <Grid item xs={6}>
          World
        </Grid>
      </Grid>
      <div style={{ width: '100%', height: '100vh' }}>
        <BasicTable companies={sp500Tickers} />
      </div>
    </Layout>
  );
}

export default Screener;