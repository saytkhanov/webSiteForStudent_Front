import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStudents } from "../../redux/features/students";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Student from "./Student";
import Preloader from "../Preloader";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modals from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    width: 1225,
  },
}));

function StudentsAdmin(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const state = useSelector((state) => {
    return state.students.items.map((item) => item);
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const students = state.filter((item) => {
    return item.firstName.toLowerCase().includes(value.toLowerCase());
  });
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadStudents()), [dispatch]);
  const loading = useSelector((state) => state.students.loading);
  const handleChangeTrue = () => {
    setSearch(true);
  };
  const handleChangeFalse = () => {
    setSearch(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Container>
      {search ? (
        <Box>
          <Typography color="primary" variant="h5">
            Поиск студента
          </Typography>
          <Button
            color={"primary"}
            variant={"outlined"}
            onClick={handleChangeFalse}
          >
            Скрыть фильтр
          </Button>
          <TextField
            placeholder={"Поиск по имени..."}
            onChange={(e) => setValue(e.target.value)}
            classes={{ root: classes.input }}
          />
        </Box>
      ) : (
        <Box>
          <Typography color="primary" variant="h5">
            Поиск студента
          </Typography>
          <Button
            color={"primary"}
            variant={"outlined"}
            onClick={handleChangeTrue}
          >
            Показать фильтр
          </Button>
        </Box>
      )}
      {students.map((student) => {
        return <Student student={student} key={student._id} />;
      })}
      <Grid item>
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Grid>
      <Grid item>
        {open ? <Modals open={open} handleClose={handleClose} /> : null}
      </Grid>
    </Container>
  );
}

export default StudentsAdmin;
