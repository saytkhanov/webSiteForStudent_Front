import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStudents } from "../../redux/actions/students";
import Preloader from "../Preloader";
import Student from "./Student";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TableHead from "./TableHead";
import { loadStatuses } from '../../redux/actions/statuses'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    width: 1225,
  },
}));

function Students(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.students.items.map((item) => item);
  });

  const students = state.filter((item) => {
    return item.firstName.toLowerCase().includes(value.toLowerCase());
  });
  const loading = useSelector((state) => state.students.loading);
  const statuses = useSelector(state => state.statuses.items);


  useEffect(() => dispatch(loadStudents()), [dispatch]);

  useEffect(() => dispatch(loadStatuses()), [dispatch])

  if (loading) {
    return <Preloader />;
  }

  const handleChangeTrue = () => {
    setSearch(true);
  };
  const handleChangeFalse = () => {
    setSearch(false);
  };

  return (
    <div>
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
      <table className={styles.table}>
        <TableHead />
        <tbody>
          {students.map((student) => {
            const elem = statuses.find(item => {
              if(item._id === student.lastNote?.status) {
                return item
              }
              return item
            })
            console.log(elem)
            return (
              <Student
                student={student}
                key={student._id}
                elem={elem}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
