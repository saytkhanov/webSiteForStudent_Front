const initialState = {
  items: [],
  loading: false,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "students/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "students/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "student/create/pending":
      return {
        ...state,
        loading: true,
      };
    case "student/create/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    case "student/delete/fulfilled": // удаление началось
      return {
        ...state,
        deleting: false,
        items: state.items.filter((student) => student.id !== action.payload),
      };
    case "student/delete/pending":
      return {
        ...state,
        deleting: true,
      };
    case "studentById/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "studentById/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    default:
      return state;
  }
}

export const loadStudents = () => {
  return async (dispatch) => {
    dispatch({ type: "students/load/pending" });
    const response = await fetch(`http://localhost:3004`);
    const json = await response.json();
    dispatch({
      type: "students/load/fulfilled",
      payload: json,
    });
  };
};

export const createStudent = (data) => {
  return async (dispatch) => {
    dispatch({ type: "student/create/pending" });
    const response = await fetch("http://localhost:3004", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    dispatch({
      type: "student/create/fulfilled",
      payload: json,
    });
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    dispatch({ type: "student/delete/pending" });
    await fetch(`http://localhost:3004/student/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: "student/delete/fulfilled",
      payload: id,
    });
    window.location.reload();
  };
};

export const loadStudentById = (id) => {
  return async (dispatch) => {
    dispatch({ type: "studentById/load/pending" });
    await fetch(`http://localhost:3004/student/${id}`);
    dispatch({
      type: "studentById/delete/fulfilled",
      payload: id,
    });
  };
};
