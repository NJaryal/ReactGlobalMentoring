import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
				<Typography variant="body2" color="textSecondary" component="p">
					{genres}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{release_year}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MovieCard;
