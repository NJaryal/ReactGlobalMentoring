import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moviesActions from "../../../redux/actions/moviesActions";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Alert from "@material-ui/lab/Alert";
import DatePicker from "../../common/datePicker";
import DateFnsUtils from "@date-io/date-fns";
import store from "../../../redux/createStore";
import { uniqueId } from "uniqid";

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

export default function AddMovie(props) {
  const classes = useStyles();
  const generesOptions = [
    {
      name: "Action",
      value: "Action",
    },
    { name: "Drama", value: "Drama" },
    { name: "Adventure", value: "Adventure" },
    { name: "Comedy", value: "Comedy" },
  ];
  var uniqid = require("uniqid");
  const movieId = uniqid("MOV-");
  const [state, setState] = useState({
    id: movieId,
    title: "",
    tagline: "",
    release_year: "",
    imgSrc: "",
    genres: [],
    runtime: 0,
  });

  const [redirect, setRedirect] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(
      "handlechange called !!!!" +
        event.target.name +
        "value" +
        event.target.value
    );
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const addMovie = () => {
    if (state) {
      console.log("inside add movie !!!!!!!!!!!!!!" + JSON.stringify(state));
      dispatch(
        moviesActions.addMovie({
          state,
        })
      );
    }
    console.log(
      "store states !!!!!!!!!!!!!!!" + JSON.stringify(store.getState())
    );
    setSuccess(true);
    store.dispatch({
      type: actionTypes.GET_ALL_MOVIE,
      movie: store.getState().movies.movies,
    });
  };

  const updateMovie = () => {
    if (state) {
      dispatch(
        moviesActions.updateMovie(state.id, {
          state,
        })
      );
    }
  };

  const deleteMovie = () => {
    dispatch(moviesActions.deletMovie(state.id));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {success == false && (
        <>
          <div>
            <TextField
              required
              id="filled-Title"
              name="title"
              label="TITLE"
              placeholder="Enter Movie Name"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />

            <DatePicker
              id="filled-release"
              name="release_year"
              label="RELEASE DATE"
              placeholder="Select Date here"
              onChange={(e) => handleChange(e)}
            />

            <TextField
              id="filled-password-input"
              name="imgSrc"
              label="MOVIE URL"
              autoComplete=""
              variant="filled"
              placeholder="Movie URL here"
              onChange={(e) => handleChange(e)}
            />
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Select Genre
              </InputLabel>
              <Select
                name="genres"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => handleChange(e)}
              >
                {generesOptions.map((item) => (
                  <option key={item.name} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="filled-number"
              name="tagline"
              label="OVERVIEW"
              placeholder="Overview Here"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="filled-helperText"
              name="runtime"
              label="RUNTIME"
              placeholder="Runtime Here"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <Button variant="outlined" color="secondary">
            Reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => addMovie()}
          >
            Submit
          </Button>
        </>
      )}
      {success == true && (
        <Alert severity="success">The Movie has been added successfully!</Alert>
      )}
    </form>
  );
}
