import React, { useEffect } from "react";
import { Box, Container, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader";
import { loadNotes } from "../../redux/actions/notes";
import { useParams } from "react-router-dom";
import Note from "./Note";

function Notes(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const notes = useSelector((state) => {
  //   return state.notes.items.filter((note) => note.student === Number(id));
  // });
  const notes = useSelector(state => state.notes.items)
  const loading = useSelector((state) => state.notes.loading);

  useEffect(() => dispatch(loadNotes(id)), [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Box>
      {notes.map((note) => {
        return <Note note={note} key={note._id} />;
      })}
    </Box>
  );
}

export default Notes;
