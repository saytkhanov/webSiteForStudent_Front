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
    <Box key={key}>
      <Typography>{status.status}</Typography>
      <Box>{status.color}</Box>
    </Box>
  );
}

export default Status;
