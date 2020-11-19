import actionTypes from "../actionTypes";
import MovieList from "../../components/common/Constant";
import createStore from "../../redux/createStore";

const initialState = {
  movies: MovieList,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_MOVIE: {
      console.log("inside get moview switch" + JSON.stringify(action));
      const movies = [...state.movies];
      return {
        movies
      };
    }
    case actionTypes.ADD_MOVIE: {
      const movies = [...state.movies];
      movies.push(action.movie.values);
      return {
        movies,
      };
    }
    case actionTypes.UPDATE_MOVIE: {
      const { index, movie } = action;
      let movies = [...state.movies];
      movies.forEach((movieItem, i) => {
        if (index == movieItem.id) {
          movies[i]=movie
        }
      });
      return {
        movies,
      };
    }
    case actionTypes.DELETE_MOVIE: {
      const { index } = action;
      console.log("dispatch delete called"+JSON.stringify(action))
      const movies = [];
      state.movies.forEach((movie, i) => {
        if (index !== movie.id) {
          movies.push(movie);
        }
      });
      console.log("dispatch delete after"+JSON.stringify(movies))
      return {
        movies,
      };
    }
    default:
      return state;
  }
};
