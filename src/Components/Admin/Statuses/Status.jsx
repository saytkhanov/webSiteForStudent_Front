import React from "react";
import {
  Box,
  makeStyles, TableCell, TableRow,
  Typography,
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  statusName: {
    color: '#4c4dc3',
    fontSize: 25,
    fontWeight: 'bold'
  }
}))

function Status({ status, key }) {
  const classes = useStyles();


  return (
  <TableRow key={key} >
    <TableCell style={{fontSize: 18}}>
      <Typography classes={{root: classes.statusName}}>{status.status}</Typography>
    </TableCell>
    <TableCell style={{width: 150, textAlign: 'center'}}>
      <Box bgcolor={status.color} style={{borderRadius: 100, width: 60, height: 60}}/>
    </TableCell>
  </TableRow>
  );
}

export default Status;
