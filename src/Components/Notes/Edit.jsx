import React, { useEffect, useState } from 'react'
import NoteWithInputs from "./NoteWithInputs";
import Note from "./Note";
import { Box, Button, Grid, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { loadStatuses } from '../../redux/features/statuses'
import { postNote } from '../../redux/features/notes'

function Edit({ stat, note, key }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  // const statuses = useSelector(state => state.statuses.items);
  useEffect(() => dispatch(loadStatuses()), [dispatch]);


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

  return isEditing ? (
    <NoteWithInputs
      setIsEditing={setIsEditing}
      note={note}
      stat={stat}
      key={key}
    />
  ) : (
    <Note setIsEditing={setIsEditing} note={note} stat={stat} key={key} />
  );
}

export default Edit;
