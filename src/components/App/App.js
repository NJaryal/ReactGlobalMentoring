import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Grid } from "@material-ui/core";
import MovieList from "../MovieList/MovieList";
import ErrorBoundary from "../common/ErrorBoundary";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import AddMovie from "../Movie/Add/AddMovie";

function App() {
  return (
    <ErrorBoundary>
      <Grid container direction="column">
        <Header />
        <Router history={browserHistory}>
          <Route exact path={"/"} component={MovieList} />
          <Route exact path={"/add"} component={AddMovie} />
        </Router>
        <MovieList />
      </Grid>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
