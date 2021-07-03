const initialState = {
  items: [],
  loading: false
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
    case "patchNotes/load/pending":
      return  {
        ...state,
        loading: true
      };
    case "patchNotes/load/fulfilled":
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

export const patchNotes = (id) => {
  return async (dispatch) => {
    dispatch({type: "patchNote/load/pending" });
    const response = await fetch(`http://localhost:3004/note/${id}`);
    const json = await response.json();
    dispatch({
      type: "patchNote/load/fulfilled",
      payload: { json, id }
    })
  }
}