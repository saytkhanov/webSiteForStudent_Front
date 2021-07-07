import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadStudents,
  selectLoadingStudents,
} from "../../redux/features/students";
import Preloader from "../Preloader";
import Student from "./Student";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TextField,
  Typography,
} from "@material-ui/core";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TableHeader from "./TableHead";
import { loadStatuses, selectStatuses } from "../../redux/features/statuses";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tableContainer: {
    marginTop: 30,
  },
}));

function Students(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => {
    return state.students.items
      .filter((item) => {
        return item.firstName.toLowerCase().includes(value.toLowerCase());
      })
  });

  const loading = useSelector(selectLoadingStudents);
  const statuses = useSelector(selectStatuses);

  useEffect(() => dispatch(loadStudents()), [dispatch]);

  useEffect(() => dispatch(loadStatuses()), [dispatch]);

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
    <Container>
      {search ? (
        <>
          <Box style={{ marginTop: 10 }}>
            <Typography
              color="primary"
              variant="h4"
              style={{ marginBottom: 12 }}
            >
              Поиск студента
            </Typography>
            <Button
              color={"primary"}
              variant={"contained"}
              onClick={handleChangeFalse}
            >
              Скрыть фильтр
            </Button>
          </Box>
          <TextField
            placeholder={"Поиск по имени..."}
            onChange={(e) => setValue(e.target.value)}
            variant={"outlined"}
            style={{ paddingLeft: 8 }}
            margin="normal"
            multiline
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </>
      ) : (
        <Box style={{ marginTop: 10 }}>
          <Typography style={{ marginBottom: 12 }} color="primary" variant="h4">
            Поиск студента
          </Typography>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={handleChangeTrue}
          >
            Показать фильтр
          </Button>
        </Box>
      )}
      <TableContainer
        classes={{ root: classes.tableContainer }}
        component={Paper}
      >
        <Table className={styles.table}>
          <TableHeader />
          <TableBody>
            {students.map((student) => {
              const elem = statuses.find((item) => {
                if (item._id === student.lastNote?.status) {
                  return item;
                }
                return null;
              });

              return (
                <Student student={student} key={student._id} elem={elem} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Students;
