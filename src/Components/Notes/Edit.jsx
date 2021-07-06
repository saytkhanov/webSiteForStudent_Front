import React, { useEffect, useState } from 'react'
import NoteWithInputs from "./NoteWithInputs";
import Note from "./Note";
import { Box, Button, Grid, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { loadStatuses } from '../../redux/features/statuses'


function Edit({ stat, note, key }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();


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
