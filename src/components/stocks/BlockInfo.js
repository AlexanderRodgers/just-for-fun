import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

const BlockInfo = (props) => {
  console.log(props)
  return (
    <div>Hello
      {props.values && props.values.map((gainer, index) => {
      return (
        <Card key={index} style={{ maxWidth: "50%" }} color="secondary">
          <CardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography gutterBottom style={{ flexGrow: 1 }}><b>{gainer.symbol}</b></Typography>
              <Typography variant="h6">+{gainer.changePercent.toFixed(2)}%</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5" style={{ flexGrow: 1 }}>{gainer.companyName}</Typography>
              <Typography><b>{gainer.iexRealtimePrice}</b></Typography>
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