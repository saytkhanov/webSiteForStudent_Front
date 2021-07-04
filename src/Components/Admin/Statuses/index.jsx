import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStatuses } from "../../../redux/actions/statuses";
import Status from "./Status";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ModalsForStatus from "./Modals";

function Statuses(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.statuses.items);

  useEffect(() => dispatch(loadStatuses()), [dispatch]);
  return (
    <div>
      {statuses.map((status) => {
        return <Status status={status} key={status.id} />;
      })}
      <Grid item>
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Grid>
      <Grid item>
        {open ? (
          <ModalsForStatus open={open} handleClose={handleClose} />
        ) : null}
      </Grid>
    </div>
  );
}

export default Statuses;
