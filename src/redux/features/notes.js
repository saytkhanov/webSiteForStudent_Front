import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

const initialState = {
  items: [],
  loading: false,
  editing: false
}


export default function reducers( state= initialState, action) {
  switch (action.type){
    case "notes/load/pending":
      return {
        ...state,
        loading: true
      }
    case "notes/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case "notes/create/pending":
      return {
        ...state,
        loading: true
      }
    case "notes/create/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload]
      }
    case "notes/edit/pending":
      return  {
        ...state,
        loading: true
      };
    case "note/edit/fulfilled":
      return {
        ...state,
        loading: false,
        items: state.notes.map((item) => {
          if(item.id === action.payload) {
            return {
              ...item,
              firstName: item.firstName,
              lastName: item.lastName,
              patronymic: item.patronymic
            }
          }
          return item
        })
      }
    default:
      return state
  }
}


export const loadNotes = (id) => {
  return async (dispatch) => {
    dispatch({type: "notes/load/pending" })
    const response = await fetch(`http://localhost:3004/student/${id}/note`)
    const json = await response.json();
    dispatch({
      type: "notes/load/fulfilled",
      payload: json
    })
  }
}

export const editNote = (id, data) => {
  return async (dispatch) => {
    dispatch({type: "notes/edit/pending" });
    const response = await fetch(`http://localhost:3004/note/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    const json = await response.json();
    dispatch({
      type: "notes/edit/fulfilled",
      payload: { json, id }
    })
  }
}

export const postNote = (id, data) => {
  return async (dispatch) => {
    dispatch({type: "notes/edit/pending" });
    const response = await fetch(`http://localhost:3004/student/${id}/note`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    const json = await response.json();
    dispatch({
      type: "notes/edit/fulfilled",
      payload: { json, id }
    })
  }
}


export const selectNotes = (state) => state.notes.items;
export const selectLoadingNotes = (state) => state.notes.loading
export const selectEditingNotes = (state) => state.notes.deleting

// <Grid container spacing={4}>
//   <Grid item>
//     <img src={student.avatar} width="220px" />
//   </Grid>
//   <Grid item>
//     <Box>
//       <Typography variant={"h4"} color={"primary"}>
//         {student.firstName} {student.lastName}
//       </Typography>
//       <Typography variant={"h4"} color={"primary"}>
//         {student.patronymic}
//       </Typography>
//     </Box>
//   </Grid>
// </Grid>
// <Grid container spacing={4}>
//   <Grid item>
//     <form>
//       <TextField
//         classes={{ root: classes.root }}
//         placeholder="Комментарий"
//         name="text"
//         value={text}
//         onChange={handleChangeComment}
//       />
//       <TextField
//         id="outlined-select-currency-native"
//         select
//         label="Native select"
//         name="status"
//         value={status}
//         onChange={handleChangeStatus}
//         SelectProps={{
//           native: true,
//         }}
//         helperText="Please select your currency"
//         variant="outlined"
//       >
//         {statuses.map((option) => (
//           <option key={option._id} value={option._id}>
//             {option.status}
//           </option>
//         ))}
//       </TextField>
//       <Box>
//         <Button
//           onClick={() => handleAdd(student._id)}
//           type="submit"
//         >
//           Добавить
//         </Button>
//       </Box>
//     </form>
//   </Grid>
// </Grid>
// </>
// );
// })}
