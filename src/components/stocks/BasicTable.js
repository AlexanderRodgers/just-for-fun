import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getCompanyInfo, getQuote } from '../../api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const BasicTable = (props) => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let stockList = [];
      for (let company of props.companies) {
        // Try to make both of these run at the same time.
        let stockInfo = await getCompanyInfo(company).then(res => res.data);
        let stockData = await getQuote(company).then(res => res.data);
        // Figure out if reducing the number of keys will improve performance.
        stockInfo = { ...stockInfo, ...stockData }
        stockList.push(stockInfo);
      }
      setCompanyList(stockList);
      return;
    }

    getData();

  }, []);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Industry</TableCell>
            <TableCell align="right">Sector</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">P / E</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyList.length !== 0 && companyList.map(row => (
            <TableRow key={row.symbol}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row.symbol}</TableCell>
              <TableCell align="right">{row.companyName}</TableCell>
              <TableCell align="right">{row.industry}</TableCell>
              <TableCell align="right">{row.sector}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.marketCap}</TableCell>
              <TableCell align="right">{row.peRatio}</TableCell>
              <TableCell align="right">{row.changePercent}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;