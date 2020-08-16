import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: 400,
		minWidth: "85%",
		margin: "1rem",
	},
	media: {
		height: 100,
		paddingTop: "56.25%", // 16:9
	},
}));

const MovieCard = (props) => {
	const classes = useStyles();

	const { title, tagline, genres, release_year, imgSrc } = props;
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={imgSrc} />
			<CardHeader title={title} subheader={tagline} />
			<CardContent>
				<Grid container alignItems="center">
					<Grid item xs>
						<Typography gutterBottom variant="subtitle1">
						{genres}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="button" display="block" gutterBottom>
						{release_year}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default MovieCard;

MovieCard.propTypes = {
	title: PropTypes.string,
	tagline: PropTypes.string,
	genres: PropTypes.string,
	release_year: PropTypes.number,
	imgSrc: PropTypes.string,
};
