import actionTypes from "../actionTypes";

export default {
  getAllMovie: (movie) => ({
    type: actionTypes.GET_ALL_MOVIE, 
    movie
  }),

  addMovie: (movie) => ({
    type: actionTypes.ADD_MOVIE,
    movie,
  }),
  updateMovie: (index, movie) => ({
    type: actionTypes.UPDATE_MOVIE,
    index,
    movie,
  }),
  deletMovie: (index) => ({
    type: actionTypes.DELETE_MOVIE,
    index,
  }),
};
