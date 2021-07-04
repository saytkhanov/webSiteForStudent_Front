import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../redux/actions/students";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: "2px solid grey",
  },
  name: {
    width: 700
  }
}))

function Student({ student, key }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
      <Grid key={key} classes={{root: classes.root}}>
        <Box>
          <img src={student.avatar} alt='avatar' width='100px' />
        </Box>
        <Box>
          <Typography classes={{root: classes.name}} variant={'h6'} color={'primary'}>
            {student.firstName} {student.lastName} {student.patronymic}
          </Typography>
        </Box>
        <Box>
          <Button
            color={"secondary"}
            variant={"contained"}
            onClick={() => dispatch(deleteStudent(student._id))}
          >
            Удалить
          </Button>
        </Box>
      </Grid>
  );
}

export default Student;
