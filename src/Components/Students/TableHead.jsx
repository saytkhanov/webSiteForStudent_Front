import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import styles from "./styles.module.css";
import { TableHead, TableRow, TableCell } from "@material-ui/core";



function TableHeader(props) {
  return (
    <>
      <TableHead style={{backgroundColor: '#4c4dc3', height: 70}}>
        <TableRow>
          <TableCell style={{color: 'white', fontSize: 18}}> </TableCell>
          <TableCell style={{color: 'white', fontSize: 18}}>ФИО</TableCell>
          <TableCell style={{color: 'white', fontSize: 18}} align="center">Последнее изменение</TableCell>
          <TableCell style={{color: 'white', fontSize: 18}} align="center">Статус</TableCell>
          <TableCell style={{color: 'white', fontSize: 18}} align="center">Заметки</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
}

export default TableHeader;
