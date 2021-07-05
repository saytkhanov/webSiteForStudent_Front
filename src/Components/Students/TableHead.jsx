import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import styles from "./styles.module.css";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function TableHeader(props) {
  return (
    <>
      <TableHead>
        <TableRow>
          <StyledTableCell> </StyledTableCell>
          <StyledTableCell>ФИО</StyledTableCell>
          <StyledTableCell align="left">Последнее изменение</StyledTableCell>
          <StyledTableCell align="center">Статус</StyledTableCell>
          <StyledTableCell align="center">Кол-во заметок</StyledTableCell>
        </TableRow>
      </TableHead>
    </>
  );
}

export default TableHeader;
