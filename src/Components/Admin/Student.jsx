import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, selectDeletingStudents } from '../../redux/features/students'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid grey",
  },
  name: {
    width: 700,
  },
}));

function Student({ student, key }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const deleting = useSelector(selectDeletingStudents)

  return (
    <Grid key={key} classes={{ root: classes.root }}>
      <Box>
        <img src={student.avatar} alt="avatar" width="100px" />
      </Box>
      <Box>
        <Typography
          classes={{ root: classes.name }}
          variant={"h6"}
          color={"primary"}
        >
          {student.firstName} {student.lastName} {student.patronymic}
        </Typography>
      </Box>
      <Box>
        <Button
          color={"secondary"}
          variant={"contained"}
          disabled={deleting}
          onClick={() => dispatch(deleteStudent(student._id))}
        >
          Удалить
        </Button>
      </Box>
    </Grid>
  );
}

export default Student;
