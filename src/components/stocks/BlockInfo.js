import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import { getGainers } from '../../api';

const BlockInfo = () => {
  const [gainers, setGainers] = useState([]);

  useEffect(() => {
    getGainers().then(res => {
      setGainers(res.data);
    })
  }, [gainers]);

  return (
    <div>
      {gainers.length !== 0 &&
        gainers.map(stock => {
          <Card>
            <CardContent>
              <Typography>{stock.symbol}</Typography>
            </CardContent>
          </Card>
        })}
    </div>
  );
}

export default BlockInfo;