import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Grid } from "@material-ui/core";
import CardList from "../common/Constant";

const MovieList = () => {
	const getMovieCard = (movieListObj) => {
		return (
			<Grid item container xs={12} sm={4} spacing={1}>
				<MovieCard {...movieListObj} />
			</Grid>
		);
	};
	return (
		<Grid container direction="row" justify="center">
			{CardList.map((movieListObj) => getMovieCard(movieListObj))}
		</Grid>
	);
};

export default MovieList;