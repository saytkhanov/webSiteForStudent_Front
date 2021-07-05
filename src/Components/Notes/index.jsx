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
import { loadNotes, postNote, selectLoadingNotes, selectNotes } from '../../redux/features/notes'
import { useParams } from "react-router-dom";
import Note from "./Note";
import { loadStudents } from "../../redux/features/students";
import { loadStatuses } from "../../redux/features/statuses";
import { makeStyles } from "@material-ui/core/styles";
import Edit from "./Edit";
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'

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

  useEffect(() => dispatch(loadStudents()), [dispatch]);

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
  // const notes = useSelector((state) => {
  //   return state.notes.items.filter((note) => note.student === Number(id));

  useEffect(() => dispatch(loadStatuses()), [dispatch]);
  useEffect(() => dispatch(loadStudents(id)), [dispatch]);
  const students = useSelector(state => {
    return state.students.items.find(item => item._id === id)
  })

  const handleAdd = async (id) => {
    await dispatch(postNote(id, { text, status }));
  };

  const handleChangeComment = (e) => {
    setText(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  // });
  const notes = useSelector(selectNotes);
  // const loading = useSelector(selectLoadingNotes);
  // const students = useSelector((state) => {
  //   return state.students.items.find(stud => stud._id === id)
  // });
  // console.log(students?.firstName)

  useEffect(() => dispatch(loadNotes(id)), [dispatch]);

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item>
          <img src={students?.avatar} width="220px" />
        </Grid>
        <Grid item>
          <Box>
            <Typography variant={"h4"} color={"primary"}>
              {students?.firstName} {students?.lastName}
            </Typography>
            <Typography variant={"h4"} color={"primary"}>
              {students?.patronymic}
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
                <option key={option.value} value={option._id}>
                  {option.status}
                </option>
              ))}
            </TextField>
            <Box>
              <Button
                onClick={() => handleAdd(students._id)}
                type="submit"
              >
                Добавить
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
      {/*<Grid container spacing={4}>*/}
      {/*  <Grid item>*/}
      {/*    <form>*/}
      {/*      <TextField*/}
      {/*        // classes={{ root: classes.root }}*/}
      {/*        placeholder="Комментарий"*/}
      {/*        name="text"*/}
      {/*        value={text}*/}
      {/*        onChange={handleChangeComment}*/}
      {/*      />*/}
      {/*      <TextField*/}
      {/*        id="outlined-select-currency-native"*/}
      {/*        select*/}
      {/*        label="Native select"*/}
      {/*        name="status"*/}
      {/*        value={status}*/}
      {/*        onChange={handleChangeStatus}*/}
      {/*        SelectProps={{*/}
      {/*          native: true,*/}
      {/*        }}*/}
      {/*        helperText="Please select your currency"*/}
      {/*        variant="outlined"*/}
      {/*      >*/}
      {/*        {statuses.map((option) => (*/}
      {/*          <option key={option.value} value={option._id}>*/}
      {/*            {option.status}*/}
      {/*          </option>*/}
      {/*        ))}*/}
      {/*      </TextField>*/}
      {/*      <Box>*/}
      {/*        <Button*/}
      {/*          // onClick={() => handleAdd(student._id)}*/}
      {/*          type="submit"*/}
      {/*        >*/}
      {/*          Добавить*/}
      {/*        </Button>*/}
      {/*      </Box>*/}
      {/*    </form>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
      {notes.map((note) => {
        const stat = statuses.find((item) => {
          if (item._id === note.status) {
            return item;
          }
        });
        // const one = students.find((stud) => {
        //   if (stud._id === note.student) {
        //     return stud;
        //   }
        // });
        // console.log(status)
        return <Edit stat={stat} note={note} key={note._id} />;
      })}
    </Box>
  );
}

export default Notes;
