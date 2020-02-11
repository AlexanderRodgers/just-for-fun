import axios from 'axios';

export const baseUrl = 'https://sandbox.iexapis.com';

export const testUrl = 'https://sandbox.iexapis.com/stable/time-series/REPORTED_FINANCIALS/AAPL?token=';

export const gainers = `${baseUrl}/stable/stock/market/list/gainers?token=`

export const getDummyData = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos').then(data => data);
  return result;
}

export const getGainers = async () => {
  const result = await axios.get(`${gainers}${process.env.testApiKey}`).then(data => data);
  return result;
}

export const getSymbols = async () => {
  const result = await axios.get(`${baseUrl}/stable/ref-data/symbols?token=${process.env.testApiKey}`);
  return result;
}

export const getQuote = async (symbol) => {
  const result = await axios.get(`${baseUrl}/stable/stock/${symbol}/quote?token=${process.env.testApiKey}`);
  return result;
}

export const getCompanyInfo = async (stock) => {
  const result = await axios.get(`${baseUrl}/stable/stock/${stock}/company?token=${process.env.testApiKey}`);
  return result;
}