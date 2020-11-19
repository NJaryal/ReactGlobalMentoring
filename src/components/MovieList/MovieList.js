import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Grid } from "@material-ui/core";
import CardList from "../common/Constant";
import store from "../../redux/createStore";
import { connect } from "react-redux";
import getAllMovie from "../../redux/actions/moviesActions";

const mapStateToProps = (state) => {
	console.log("inside mapstatetoProps!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify( state.movies.movies))
  return {
    MovieData: state.movies.movies,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     getAllMovie: function () {
//       dispatch(getAllMovie());
//     },
//   };
// }

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieData: [],
    };
  }

  componentDidMount() {
	  
    console.log(
      "returning movie list" + JSON.stringify(store.getState().movies.movies)
    );
    this.setState({ MovieData: store.getState().movies.movies });
  }

  getMovieCard = (movieListObj) => {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={4}>
          <MovieCard {...movieListObj} />
        </Grid>
      </React.Fragment>
    );
  };

  render() {
    const MovieData = store.getState().movies.movies;
    return (
      <Grid container direction="row" justify="center">
        {MovieData.map((movieListObj) => this.getMovieCard(movieListObj))}
      </Grid>
    );
  }
}

export default  connect(mapStateToProps,)(MovieList);
