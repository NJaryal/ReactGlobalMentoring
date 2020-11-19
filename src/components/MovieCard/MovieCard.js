import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import UpdateMovie from '../Movie/Update/UpdateMovie'
import PropTypes from "prop-types";
import {
	Grid,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	IconButton,
	Popover,
	Typography,
	Link,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popup from "../common/Popup";
import RemoveMovie from "../Movie/Remove/RemoveMovie";
import Movielist from '../MovieList/MovieList'

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: 400,
		minWidth: "85%",
		margin: "1rem",
	},
	media: {
		height: "100vh",
	},
	editDeleteAction: {
		background: "#c7c7c8",
		color: "#fff",
		float: "right",
	},
}));

const MovieCard = (props) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { title, tagline, genres, release_year, imgSrc } = props;
		  

	const handleClick = useCallback((event) => {
		setAnchorEl(event.currentTarget);
	}, []);

	const handleClose = useCallback(() => {
		setAnchorEl(null);
	}, []);

	useEffect(() => {
		console.log(`Component mounted`);
		document.title = `You clicked ${title} times`;
	}, []);


	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	const [openPopup, setOpenPopup] = useState(false);
	const [openPopupEdit, setOpenPopupEdit] = useState(false);
	const preventDefault = (event) => event.preventDefault();

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={imgSrc}>
				<IconButton
					aria-label="movie edit/delete"
					className={classes.editDeleteAction}
					onClick={handleClick}
				>
					<MoreVertIcon />
				</IconButton>
			</CardMedia>
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
							{release_year.toString()}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>

			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<Typography className={classes.root}>
					<Link href="#" onClick={()=>(setOpenPopupEdit(true) ,handleClose())}>
						Edit
					</Link>
				</Typography>

				<Typography className={classes.root}>
					<Link href="#" onClick={() => setOpenPopup(true)}>
						Delete
					</Link>
				</Typography>
			</Popover>

			<Popup
				title="DELETE MOVIE"
				openPopup={openPopup}
				setOpenPopup={setOpenPopup}
			>
				<RemoveMovie  {...props}/>
			</Popup>

			<Popup
				title="EDIT MOVIE"
				openPopup={openPopupEdit}
				setOpenPopup={setOpenPopupEdit}
			>
				<UpdateMovie {...props}/>
			</Popup >
		</Card>
	);
};

export default MovieCard;

MovieCard.propTypes = {
	title: PropTypes.string,
	tagline: PropTypes.string,
	genres: PropTypes.string,
	release_year: PropTypes.instanceOf(Date),
	imgSrc: PropTypes.string,
};
