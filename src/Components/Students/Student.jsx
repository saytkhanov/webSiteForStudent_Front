import React from "react";
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
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import Notes from "../Notes";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Student({ student, key }) {
  const classes = useStyles();
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
      <tr key={key} className={styles.tr}>
        <td>
          <img src={student.avatar} alt={"avatar"} />
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
          {dayjs(student.lastNote?.createdAt).format("YY.MM.DD HH:mm")}
        </td>
        <td>
          <button>{student.lastNote?.status}</button>
        </td>
        <td className={styles.td}>{student.notes.length}</td>
      </tr>
    </>
  );
}

export default Student;
