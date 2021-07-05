import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { postStudent } from "../../redux/actions/students";
import { loadStatuses } from "../../redux/actions/statuses";

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

function Modals({ open, handleClose }) {
  const dispatch = useDispatch();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [avatar, setAvatar] = useState("");
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const handleAddFirstName = (e) => {
    setFirstname(e.target.value);
  };

  const handleAddLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleAddPatronymic = (e) => {
    setPatronymic(e.target.value);
  };

  const handleAddAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(
      postStudent({
        firstName,
        lastName,
        patronymic,
        avatar,
      })
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Добавить студента</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            value={firstName}
            onChange={handleAddFirstName}
          />
          <TextField
            name="lastName"
            value={lastName}
            onChange={handleAddLastName}
          />
          <TextField
            name="patronymic"
            value={patronymic}
            onChange={handleAddPatronymic}
          />
          <TextField name="avatar" value={avatar} onChange={handleAddAvatar} />
          <Button type="submit">Добавить</Button>
        </form>
        <Modals />
      </div>
    </Modal>
  );
}

export default Modals;
