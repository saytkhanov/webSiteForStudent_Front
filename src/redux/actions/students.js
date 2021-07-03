const initialState = {
  items: [],
  loading: false
}


export default function reducers( state= initialState, action) {
  switch (action.type){
    case "students/load/pending":
      return {
        ...state,
        loading: true
      }
    case "students/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case "postStudent/load/pending":
      return  {
        ...state,
        loading: true
      };
    case "postStudent/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case "student/delete/fulfilled": // удаление началось
      return {
        ...state,
        deleting: false,
        items: state.items.filter((todo) => todo.id !== action.payload)
      };
    case "student/delete/pending": // удаление началось
      return {
        ...state,
        deleting: true,
      };
    default:
      return state
  }
}


export const loadStudents = () => {
  return async (dispatch) => {
    dispatch({type: "students/load/pending" })
    const response = await fetch(`http://localhost:3004`)
    const json = await response.json();
    dispatch({
      type:"students/load/fulfilled",
      payload: json
    })
  }
}

export const postStudent = () => {
  return async (dispatch) => {
    dispatch({type: "postStudent/load/pending" });
    const response = await fetch('http://localhost:3004');
    const json = await response.json();
    dispatch({
      type: "postStudent/load/fulfilled",
      payload: json
    })
  }
}


export const deleteStudent = (id) => {
  return async (dispatch) => {
    dispatch({type: "student/delete/pending"})
    await fetch(`http://localhost:3004/student/${id}`, {
      method: "DELETE"
    })
    dispatch({
      type: "student/delete/fulfilled",
      payload: id
    })
  }
}