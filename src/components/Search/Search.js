import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.15),
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(2, 1, 2, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

const Search = () => {
	
	const classes = useStyles();

	return (
		<div className={classes.search}>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item sm={2}>
					
				</Grid>
				<Grid item sm={6}>
				<InputBase
						placeholder="What do you want to watch?"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ "aria-label": "What do you want to watch?" }}
					/>
				</Grid>
				<Grid item sm={2}>
					<Button variant="contained" color="secondary">
						Search
					</Button>
				</Grid>
				<Grid item sm={2}></Grid>
			</Grid>
		</div>
	);
};

export default Search;
