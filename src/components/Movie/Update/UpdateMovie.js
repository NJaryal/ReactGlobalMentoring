import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moviesActions from "../../../redux/actions/moviesActions";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Alert from "@material-ui/lab/Alert";
import DatePicker from "../../common/datePicker";
import DateFnsUtils from "@date-io/date-fns";
import store from "../../../redux/createStore";

import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import actionTypes from "../../../redux/actionTypes";
import { parse } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UpdateMovie(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log(
    "inside update componenet !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" +
      JSON.stringify(props)
  );
  let [state, setState] = useState({
    id: props.id,
    title: props.title,
    tagline: props.tagline,
    release_year: props.release_year,
    imgSrc: props.imgSrc,
    genres: props.genres,
    runtime: props.runtime,
  });

  const generesOptions = props.genres;
  const [redirect, setRedirect] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    console.log(
      "handlechange called !!!!" +
        event.target.name +
        "value" +
        event.target.value
    );
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const reset = (event) => {
    console.log("reset called !" + JSON.stringify(props));
    setState({
      state: props
    });

    setState(prevState => {
      let state = { ...prevState };// creating copy of state variable jasper
      state.title = props.title;                     // update the name property, assign a new value                 
      return { state };                                 // return new object jasper object
    })

    console.log("reset done !" + JSON.stringify(state));
  };

  const updateMovie = () => {
    if (state) {
      console.log("Updating movie  !!!!!!!!!!!!!!!" + JSON.stringify(state));
      dispatch(moviesActions.updateMovie(state.id, state));
      console.log(
        "Updated movie  !!!!!!!!!!!!!!!" + JSON.stringify(store.getState())
      );
      setSuccess(true);
    }
  };

  // console.log("genere!!!!!!!!!!!!!!!!!!"+props.genres[0])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {success == false && (
        <>
        
          <div>

          <TextField
              required
              defaultValue={state.id}
              id="filled-ID"
              name="id"
              label="MOVIE   ID"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />

            <TextField
              required
              defaultValue={state.title}
              id="filled-Title"
              name="title"
              label="TITLE"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />

            <DatePicker
              id="filled-release"
              defaultValue={new Date().setFullYear(
                parseInt(state.release_year)
              )}
              name="release_year"
              label="RELEASE DATE"
              onChange={(e) => handleChange(e)}
            />

            <TextField
              id="filled-password-input"
              defaultValue={state.imgSrc}
              name="imgSrc"
              label="MOVIE URL"
              autoComplete="current-password"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Select Genre
              </InputLabel>
              <Select
                name="genres"
                // defaultValue={props.genres[0]}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => handleChange(e)}
              >
                {/* {generesOptions.map((item) => (
                  <option key={item.name} value={item.value}>
                    {item.name}
                  </option>
                ))} */}
              </Select>
              {/* 
Adding ultiple select */}
            </FormControl>
            <TextField
              id="filled-number"
              name="tagline"
              defaultValue={state.tagline}
              label="OVERVIEW"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="filled-helperText"
              name="runtime"
              defaultValue={state.runtime}
              label="RUNTIME"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <Button variant="outlined" color="secondary" onClick={() => reset()}>
            Reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => updateMovie()}
          >
            Save
          </Button>
        </>
      )}
      {success == true && (
        <Alert severity="success">
          The Movie has been Updated successfully!
        </Alert>
      )}
    </form>
  );
}
