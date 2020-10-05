import React from 'react';
import {TextField, Select, InputLabel, MenuItem, FormControl, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddMovie() {
  const classes = useStyles();
  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="filled-Title"
          label="Title"
          defaultValue="Enter Movie Name"
          variant="filled"
        />
        <TextField
          id="filled-release"
          label="Release Date"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Movie URL"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          onChange={handleChange}
        >
          <MenuItem value={1}>Action</MenuItem>
          <MenuItem value={2}>Drama</MenuItem>
          <MenuItem value={3}>Adventure</MenuItem>
          <MenuItem value={4}>Comedy</MenuItem>
        </Select>
      </FormControl>
        <TextField
          id="filled-number"
          label="Overview"

          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Runtime"
          defaultValue="Runtime Here"
          variant="filled"
        />
      </div>

      <Button
							variant="outlined"
							color="secondary"
						>
							Reset
						</Button>
            <Button
							variant="contained"
							color="secondary"
						>
							Submit
						</Button>
      
    </form>
  );
}