import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function RemoveMovie() {
	const [ setOpen] = React.useState(false);

/* 	const handleClickOpen = () => {
		setOpen(true);
	}; */

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Typography variant="h6" gutterBottom>
				Are you sure you want to delete this movie ?
			</Typography>

			<Button autoFocus onClick={handleClose} color="primary">
				Cancel
			</Button>
			<Button onClick={handleClose} color="primary">
				Confirm
			</Button>
		</div>
	);
}
