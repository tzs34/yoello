import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AlertLoader = ({ active, message, type }) => {
  const [open, setOpen] = useState(active);
  const classes = useStyles();

  const TransitionUp = (props) => <Slide {...props} direction="up" />;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <div>
        {active ? (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            TransitionComponent={TransitionUp}
          >
            <Alert severity={type}>{message}</Alert>
          </Snackbar>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default AlertLoader;
