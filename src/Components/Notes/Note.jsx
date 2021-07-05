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
import EditIcon from "@material-ui/icons/Edit";
import { loadStatuses } from "../../redux/features/statuses";
import Preloader from "../Preloader";
import Fab from "@material-ui/core/Fab";
import { postNote } from '../../redux/features/notes'
import { useParams } from 'react-router-dom'
import { loadStudents } from '../../redux/features/students'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Note({ note,  stat, setIsEditing }) {
  const [text, setText] = useState("");
  const { id} = useParams()
  const [status, setStatus] = useState("");
  const classes = useStyles();
  const statuses = useSelector((state) => state.statuses.items);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.statuses.loading);
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
  const handleAdd = async (id) => {
    await dispatch(postNote(id, { text, status }));
  };

  const handleChangeComment = (e) => {
    setText(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

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
