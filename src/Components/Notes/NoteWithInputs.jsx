import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStatuses } from "../../redux/actions/statuses";
import { editNote } from "../../redux/actions/notes";
import Preloader from "../Preloader";
import { Box, Grid, TextField } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import CachedTwoToneIcon from "@material-ui/icons/CachedTwoTone";

function NoteWithInputs({ stat, note, key, setIsEditing }) {
  const [status, setStatus] = useState(stat?.status);
  const [text, setText] = useState(note.text);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.notes.loading);
  const statuses = useSelector((state) => state.statuses.items);

  useEffect(() => dispatch(loadStatuses()), [dispatch]);

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeComment = (e) => {
    setText(e.target.value);
  };

  const handleEdit = async () => {
    // ждем пока выполнится диспетч...
    await dispatch(editNote(note._id, { status, text }));

    // и затем переключаемся на компонент TableRowReadOnly
    setIsEditing(false);
  };
  // const handleAdd = async (id) => {
  //   await dispatch(postNote(id, { text, status }));
  // };
  //
  // const handleChangeComment = (e) => {
  //   setText(e.target.value);
  // };
  //
  // const handleChangeStatus = (e) => {
  //   setStatus(e.target.value);
  // };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Box>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Native select"
              name="status"
              value={status}
              onChange={handleChangeStatus}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
              variant="outlined"
            >
              {statuses.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.status}
                </option>
              ))}
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <TextField value={text} onChange={handleChangeComment}>
            {note.text}
          </TextField>
        </Grid>
        <Grid item>
          <Fab color="secondary" aria-label="edit">
            <CachedTwoToneIcon onClick={handleEdit} />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon onClick={() => setIsEditing(false)} />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
}

export default NoteWithInputs;
