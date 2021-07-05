import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader";
import { loadNotes, postNote } from "../../redux/actions/notes";
import { useParams } from "react-router-dom";
import Note from "./Note";
import { loadStudents } from "../../redux/actions/students";
import { loadStatuses } from "../../redux/actions/statuses";
import { makeStyles } from "@material-ui/core/styles";
import Edit from "./Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
  },
}));

function Notes(props) {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.statuses.items);

  useEffect(() => dispatch(loadStatuses()), [dispatch]);

  const handleAdd = async (id) => {
    await dispatch(postNote(id, { text, status }));
  };

  const handleChangeComment = (e) => {
    setText(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  // const notes = useSelector((state) => {
  //   return state.notes.items.filter((note) => note.student === Number(id));
  // });
  const notes = useSelector((state) => state.notes.items);
  const loading = useSelector((state) => state.notes.loading);
  const students = useSelector((state) => state.students.items);

  useEffect(() => dispatch(loadNotes(id)), [dispatch]);
  useEffect(() => dispatch(loadStudents(id)), [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Box>
      {students.map((student) => {
        return (
          <>
            <Grid container spacing={4}>
              <Grid item>
                <img src={student.avatar} width="220px" />
              </Grid>
              <Grid item>
                <Box>
                  <Typography variant={"h4"} color={"primary"}>
                    {student.firstName} {student.lastName}
                  </Typography>
                  <Typography variant={"h4"} color={"primary"}>
                    {student.patronymic}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item>
                <form>
                  <TextField
                    classes={{ root: classes.root }}
                    placeholder="Комментарий"
                    name="text"
                    value={text}
                    onChange={handleChangeComment}
                  />
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Native select"
                    name="status"
                    value={status}
                    onChange={handleChangeStatus}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select your currency"
                    variant="outlined"
                  >
                    {statuses.map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.status}
                      </option>
                    ))}
                  </TextField>
                  <Box>
                    <Button
                      onClick={() => handleAdd(student._id)}
                      type="submit"
                    >
                      Добавить
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </>
        );
      })}
      {notes.map((note) => {
        const stat = statuses.find((item) => {
          if (item._id === note.status) {
            return item;
          }
        });
        console.log(status);
        return <Edit stat={stat} note={note} key={note._id} />;
      })}
    </Box>
  );
}

export default Notes;
