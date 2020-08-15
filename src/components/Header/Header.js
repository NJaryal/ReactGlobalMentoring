import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../Search/Search";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	MainLogo: {
		color: '#EF5350',
		position: 'relative'
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<div className="AppHeader">
			<Grid item container spacing={2}>
				<Grid item container>
					<Grid item xs={6}>
						<Typography variant="h4" gutterBottom className={classes.MainLogo}>
							netflixroulette
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Button
							variant="contained"
							color="default"
							className={classes.button}
							startIcon={<AddIcon />}
						>
							Add Movie
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Typography variant="h2" gutterBottom>
						Find your movie
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Search />
				</Grid>
			</Grid>
		</div>
	);
};
export default Header;
