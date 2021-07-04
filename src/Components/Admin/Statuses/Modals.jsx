import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalsForStatus({ open, handleClose }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Добавить студента</h2>
      <ModalsForStatus />
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}

export default ModalsForStatus;
