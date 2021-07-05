import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loadStatuses } from "../../redux/actions/statuses";
import EditIcon from "@material-ui/icons/Edit";
import Preloader from "../Preloader";
import { postStudent } from "../../redux/actions/students";
import { patchNotes, postNote } from "../../redux/actions/notes";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Note({ note, stat, setIsEditing }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.notes.loading);

  useEffect(() => dispatch(loadStatuses()), [dispatch]);

  // const handleAdd = async (id) => {
  //   await dispatch(postNote(id, { text, status }));
  // };
  //
  // const handleChangeComment = (e) => {
  //   setText(e.target.value);
  // };
  //
  // const handleChangeStatus = (e) => {
  //   setStatus(e.target.value);
  // };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Box bgcolor={stat?.color}>{stat?.status}</Box>
        </Grid>
        <Grid item>{note.text}</Grid>
        <Grid item>
          <Fab color="secondary" aria-label="edit">
            <EditIcon onClick={() => setIsEditing(true)} />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
}

export default Note;
