import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import moviesActions from "../../../redux/actions/moviesActions";
import { connect } from "react-redux";
import store from "../../../redux/createStore";

 function RemoveMovie(props) {
  const [open,setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const cancel = () => {
    setOpen(false);
  };
  const confirm = () => {
    deleteMovie();
    setOpen(false);
  };

  const deleteMovie = () => {
	  console.log("deleteing movie !!"+JSON.stringify(props))
	dispatch(moviesActions.deletMovie(props.id));
	dispatch(moviesActions.getAllMovie(store.getState().movies.movies));
  };

  
  return (
	  
    <div>
      <Typography variant="h6" gutterBottom>
        Are you sure you want to delete this movie ?
      </Typography>

      <Button autoFocus onClick={cancel} color="primary">
        Cancel
      </Button>
      <Button onClick={confirm} color="primary">
        Confirm
      </Button>
    </div>
  );
}

export default  RemoveMovie;

