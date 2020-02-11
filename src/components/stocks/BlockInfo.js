import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import './BlockInfo.css';

const BlockInfo = (props) => {
  return (
    <div className="block_card">
      {props.values && props.values.map((stock, index) => {
        return (
          <Card key={index} color="secondary">
            <CardContent>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography gutterBottom style={{ flexGrow: 1 }}><b>{stock.symbol}</b></Typography>
                <Typography variant="h6">{stock.changePercent.toFixed(2)}%</Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" style={{ flexGrow: 1 }}>{stock.companyName}</Typography>
                <Typography><b>{stock.iexRealtimePrice}</b></Typography>
              </div>
            </CardContent>
          </Card>
        );
      })
      }
    </div>
  );
}

export default BlockInfo;