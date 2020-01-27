import axios from 'axios';

export const baseUrl = 'https://sandbox.iexapis.com/';

export const testUrl = 'https://sandbox.iexapis.com/stable/time-series/REPORTED_FINANCIALS/AAPL?token=';

export const testFunction = async () => {
  const result = await axios.get(`${testUrl}${process.env.testApiKey}`).then(data => data);
  console.log(result);
} 