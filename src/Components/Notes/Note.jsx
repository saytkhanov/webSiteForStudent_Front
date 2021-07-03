import React, { useEffect } from 'react'
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
  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.statuses.items);

  useEffect(() => dispatch(loadStatuses()), [dispatch])


  const classes = useStyles();
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
