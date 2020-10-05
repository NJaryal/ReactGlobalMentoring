import React, {Component} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { Grid } from "@material-ui/core";
import CardList from "../common/Constant";

class MovieList extends Component {
	constructor(props){
        super(props)
        this.state = {}
    }

	getMoviesData() {
		return CardList;
	} 

	componentDidMount() {
        this.getMoviesData();        
	};

	getMovieCard = (movieListObj) => {
		return (
			<React.Fragment>
				<Grid item xs={12} sm={4} spacing={1}>
					<MovieCard {...movieListObj} />
				</Grid>
			</React.Fragment>
		);
	};

	
	
	render() {
		return(
			<Grid container direction="row" justify="center">
			{CardList.map((movieListObj) => this.getMovieCard(movieListObj))}
		</Grid>
		)
		
	};
};

export default MovieList;
