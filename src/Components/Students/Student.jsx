import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Paper,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.css";
import Notes from "../Notes";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import { loadStatuses } from '../../redux/actions/statuses'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

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
      <tr  className={styles.tr} key={key}>
        <td>
          <img src={student.avatar} alt={"avatar"} width='100px'/>
        </td>
        <td className={styles.td}>
          <NavLink
            student={student}
            to={`/student/${student._id}/note`}
            className={styles.a}
          >
            {student.firstName} {student.lastName} {student.patronymic}
          </NavLink>
        </td>
        <td className={styles.td}>
          {dayjs(student.lastNote?.updatedAt).format("YY.MM.DD HH:mm")}
        </td>
        <td bgcolor={elem?.color}>
          {elem?.status}
        </td>
        <td className={styles.td}>{student.notes.length}</td>
      </tr>
    </>
  );
}

export default Student;
