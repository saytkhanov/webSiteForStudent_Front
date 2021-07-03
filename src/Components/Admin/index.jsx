import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStudents } from "../../redux/actions/students";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

  const students = state.filter((item) => {
    return item.firstName.toLowerCase().includes(value.toLowerCase());
  });
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadStudents()), [dispatch]);

  const handleChangeTrue = () => {
    setSearch(true);
  };
  const handleChangeFalse = () => {
    setSearch(false);
  };

  return (
    <>
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
    </>
  );
}

export default StudentsAdmin;
