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
import { useFormik } from 'formik';
import * as yup from 'yup';

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

const validationSchema = yup.object({
  title: yup
    .string('Enter Title')
    .required('Title is required'),
    tagline: yup
    .string('Enter movie Tagline')
    .required('Overview is required'),
    imgSrc: yup
    .string('Enter movie url')
    .required('Movie url is required'),
    genres: yup
    .string('Enter movie Genre')
    .required('Genre is required'),
    runtime: yup
    .number('Enter movie Runtime')
    .min(0, 'Runtime should be of minimum value 0')
    .max(128, 'Runtime should be of maximum value 128')
    .required('Runtime is required'),
});

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
  const formik = useFormik({
    initialValues: {
      id: movieId,
      title: '',
      tagline: '',
      release_year: new Date(),
      imgSrc: '',
      genres: [],
      runtime: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values) {
        dispatch(
          moviesActions.addMovie({
            values,
          })
        );
      }
      setSuccess(true);
      store.dispatch({
        type: actionTypes.GET_ALL_MOVIE,
        movie: store.getState().movies.movies,
      });
    },
  });

  const [success, setSuccess] = useState(false);

   const dispatch = useDispatch();

  return (
    <form onSubmit={formik.handleSubmit} className={classes.root}>
      {success == false && (
        <>
          <div>
            <TextField
              id="filled-Title"
              name="title"
              label="TITLE"
              variant="filled"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />

            <DatePicker
              id="filled-release"
              name="release_year"
              label="RELEASE DATE"
              placeholder="Select Date here"
              hintText="Select Date"
              value={formik.values.release_year}
              onChange={formik.handleChange}
              error={formik.touched.release_year && Boolean(formik.errors.release_year)}
              helperText={formik.touched.release_year && formik.errors.release_year}
            />

            <TextField
              id="filled-password-input"
              name="imgSrc"
              label="MOVIE URL"
              autoComplete=""
              variant="filled"
              placeholder="Movie URL here"
              value={formik.values.imgSrc}
              onChange={formik.handleChange}
              error={formik.touched.imgSrc && Boolean(formik.errors.imgSrc)}
              helperText={formik.touched.imgSrc && formik.errors.imgSrc}
            />
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Select Genre
              </InputLabel>
              <Select
                name="genres"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.genres}
                onChange={formik.handleChange}
                error={formik.touched.genres && Boolean(formik.errors.genres)}
                helperText={formik.touched.genres && formik.errors.genres}
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
              value={formik.values.tagline}
              onChange={formik.handleChange}
              error={formik.touched.tagline && Boolean(formik.errors.tagline)}
              helperText={formik.touched.tagline && formik.errors.tagline}
            />
            <TextField
              id="filled-helperText"
              name="runtime"
              label="RUNTIME"
              placeholder="Runtime Here"
              variant="filled"
              value={formik.values.runtime}
              onChange={formik.handleChange}
              error={formik.touched.runtime && Boolean(formik.errors.runtime)}
              helperText={formik.touched.runtime && formik.errors.runtime}
            />
          </div>

          <Button type="reset" variant="outlined" color="secondary">
            Reset
          </Button>
          <Button type="submit"
            variant="contained"
            color="secondary"
           
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
