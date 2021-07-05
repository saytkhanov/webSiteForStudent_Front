import React, { useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Toolbar,
  Typography,
  Button,
  Grid,
  TableCell,
  withStyles,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import Notes from "../Notes";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import { loadStatuses } from "../../redux/actions/statuses";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function Student({ student, key, elem }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  //
  // const statuses = useSelector((state) => {
  //   return state.statuses.items.filter(
  //     (item) => item.id === student.lastNote?.status
  //       .map(status => status)
  //   );
  // });

  console.log(student);
  return (
    <>
      <StyledTableRow className={styles.tr} key={key}>
        <StyledTableCell>
          <img src={student.avatar} alt={"avatar"} width="100px" />
        </StyledTableCell>
        <StyledTableCell className={styles.td}>
          <NavLink
            student={student}
            to={`/student/${student._id}/note`}
            className={styles.a}
          >
            {student.firstName} {student.lastName} {student.patronymic}
          </NavLink>
        </StyledTableCell>
        <StyledTableCell className={styles.td}>
          {dayjs(student.lastNote?.createdAt).format("YY.MM.DD HH:mm")}
        </StyledTableCell>
        <TableCell bgcolor={elem?.color}>{elem?.status}</TableCell>
        <StyledTableCell className={styles.td}>
          {student.notes.length}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}

export default Student;
