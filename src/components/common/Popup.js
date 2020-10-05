import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	dialogWrapper: {
		padding: theme.spacing(2),
		position: 'absolute',
		top: theme.spacing(5)
	}
}));

const Popup = (props) => {
	const classes = useStyles();

	const { title, children, openPopup, setOpenPopup } = props;

	const handleClose = () => {
		setOpenPopup(false);
	  };
		
	return (
		<Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}} onClose={handleClose} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">
		<div style={{display: 'flex'}}>
		</div>
		<Typography variant="h6" component="div" style={{flexGrow: 1}}>{title}</Typography>
		<Button color="secondary" text="X"></Button>
            
        </DialogTitle>
        <DialogContent dividers>
            {children}
        </DialogContent>
        </Dialog>
	);
};

Popup.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
  };

export default Popup;

