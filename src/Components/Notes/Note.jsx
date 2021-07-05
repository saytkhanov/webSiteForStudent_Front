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
import Preloader from "../Preloader";
import { postStudent } from "../../redux/actions/students";
import { postNote } from "../../redux/actions/notes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Note({ note, status }) {
  const [text, setText] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.statuses.items);
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

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Grid>{status?.status}</Grid>
      <Grid>{note.text}</Grid>
    </>
  );
}

export default Note;
