import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import ModalsForStatus from "./Modals";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Status({ status, key }) {
  return (
    <Grid container key={key} spacing={4}>
      <Grid item lg={"6"}>
        <Typography>{status.status}</Typography>
      </Grid>
      <Grid item lg={"6"}>
        <Box bgcolor={status.color}>1</Box>
      </Grid>
    </Grid>
  );
}

export default Status;
