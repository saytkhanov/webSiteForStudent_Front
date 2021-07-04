import React, { useEffect, useState } from 'react'
import {
  Box, Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loadStatuses } from '../../redux/actions/statuses'
import Preloader from '../Preloader'
import { postStudent } from '../../redux/actions/students'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Note({ note }) {
  const [comment, setComment] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.statuses.items);
  const loading = useSelector(state => state.statuses.loading);

  useEffect(() => dispatch(loadStatuses()), [dispatch]);

  const handleSubmit = (e) => {
    dispatch(postStudent({

    }))
  }


  const handleChangeComment = (e) => {
    setComment(e.target.value)
  }


  if(loading) {
    return <Preloader/>
  }


  return (
    <>
      <Grid container spacing={4}>
        <Grid item>
          <img src={note.student.avatar} width="220px" />
        </Grid>
        <Grid item>
          <Box>
            <Typography variant={"h4"} color={"primary"}>
              {note.student.firstName} {note.student.lastName}
            </Typography>
            <Typography variant={"h4"} color={"primary"}>
              {note.student.patronymic}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item>
          <TextField
            classes={{ root: classes.root }}
            placeholder="Комментарий"
            value={comment}
            onChange={handleChangeComment}
          />
        </Grid>
        <Grid item>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Статус</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {statuses.map((item) => {
                return <MenuItem value={item._id}>{item.status}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <Box>
            <Button>Добавить</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid>
        {note.text}
      </Grid>
    </>
  );
}

export default Note;
