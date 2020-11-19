import actionTypes from "../actionTypes";
import MovieList from "../../components/common/Constant";
import createStore from "../../redux/createStore";

const initialState = {
  movies: MovieList,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_MOVIE: {
      console.log("inmside get moview switch" + JSON.stringify(action));
      const movies = [...state.movies];
      return {
        movies
      };
    }
    case actionTypes.ADD_MOVIE: {
      console.log("inmside add moview switch" + JSON.stringify(action));
      const movies = [...state.movies];
      console.log("movies in reducers" + JSON.stringify(action.movie.state));
      movies.push(action.movie.state);
      console.log("movies in reducers after adding" + JSON.stringify(movies));
      return {
        movies,
      };
    }
    case actionTypes.UPDATE_MOVIE: {
      const { index, movie } = action;
      console.log("diapatch update called"+JSON.stringify(movie.state))
      console.log("diapatch update called Index"+JSON.stringify(index))
      let movies = [...state.movies];
      movies.forEach((movieItem, i) => {
        console.log("in for looppppppppppp"+JSON.stringify(i))
        if (parseInt(index) == movieItem.id) {
          console.log("in if conditionnnnnnnn"+JSON.stringify(movieItem))
          movies[i]=movie
        }
      });

      console.log("diapatch update called Movies"+JSON.stringify(movies))
      return {
        movies,
      };
    }
    case actionTypes.DELETE_MOVIE: {
      const { index } = action;
      console.log("diapatch delete called"+JSON.stringify(action))
      const movies = [];
      state.movies.forEach((movie, i) => {
        if (index !== movie.id) {
          movies.push(movie);
        }
      });
      console.log("diapatch delete after"+JSON.stringify(movies))
      return {
        movies,
      };
    }
    default:
      return state;
  }
};
