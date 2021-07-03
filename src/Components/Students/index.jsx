import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStudents } from "../../redux/actions/students";
import Preloader from "../Preloader";
import Student from "./Student";
import Filter from "./Filter";
import { Book, Search } from "@material-ui/icons";
import { Box, Button, Typography } from "@material-ui/core";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Students(props) {
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

  useEffect(() => dispatch(loadStudents()), [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  const handleChange = () => {
    setSearch(true);
  };

  return (
    <div>
      {search ? (
        <Filter
          handleChange={handleChange}
          setSearch={setSearch}
          setValue={setValue}
        />
      ) : (
        <div>
          <Box>
            <Typography color="primary" variant="h5">
              Поиск студента
            </Typography>
            <Button
              color={"primary"}
              variant={"outlined"}
              onClick={handleChange}
            >
              Показать фильтр
            </Button>
          </Box>
          <Box>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}> </th>
                  <th className={styles.th}>ФИО</th>
                  <th className={styles.th}>Последнее изменение</th>
                  <th className={styles.th}>Статус</th>
                  <th className={styles.th}>Кол-во заметок</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  return (
                    <Student
                      student={student}
                      key={student._id}
                      handleChange={handleChange}
                      setEdited={setSearch}
                    />
                  );
                })}
              </tbody>
            </table>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Students;
