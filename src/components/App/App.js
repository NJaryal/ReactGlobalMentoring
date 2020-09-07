import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Grid } from "@material-ui/core";
import MovieList from "../MovieList/MovieList";
import ErrorBoundary from "../common/ErrorBoundary";

function App() {
	return (
		<ErrorBoundary>
			<Grid container direction="column">
				<Header />
				<MovieList />
			</Grid>
			<Footer />
		</ErrorBoundary>
	);
}

export default App;
