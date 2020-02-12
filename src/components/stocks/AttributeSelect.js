import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AttributeSelect = () => {

  const classes = useStyles();
  const [dividend, setDividend] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setDividend(event.target.value);
  };


  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="divident-yield">Dividend %</InputLabel>
      <Select
        labelId="dividend-yield"
        id="dividend-yield-select"
        value={dividend}
        onChange={handleChange}
      >
        <MenuItem value={10}>None (0%)</MenuItem>
        <MenuItem value={20}>Positive (> 0%)</MenuItem>
        <MenuItem value={30}>High (> 5%)</MenuItem>
      </Select>
    </FormControl>
  );
}

export default AttributeSelect;