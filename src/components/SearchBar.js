import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, Icon } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getSymbols } from '../api/';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      let symbols = await getSymbols().then(res => res.data);
      if (active) {
        setOptions(symbols.map(symbol => {
          return { symbol: symbol.symbol, name: symbol.name }
        }));
      }

    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      style={{ width: 400 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={option => `${option.symbol} - ${option.name}`}
      options={options}
      loading={loading}
      renderInput={params => {
        return (
          <div>
            <TextField
              {...params}
              label="Search by Symbol"
              fullWidth
              variant="standard"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>
                ),
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          </div>
        )
      }}
    />
  );
}