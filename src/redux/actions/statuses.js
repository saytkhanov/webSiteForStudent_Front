const initialState = {
  items: [],
  loading: false
}


export default function reducers( state= initialState, action) {
  switch (action.type){
    case "statuses/load/pending":
      return {
        ...state,
        loading: true
      }
    case "statuses/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case "postStatus/load/pending":
      return  {
        ...state,
        loading: true
      };
    case "postStatus/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state
  }
}


export const loadStatuses = () => {
  return async (dispatch) => {
    dispatch({type: "statuses/load/pending" })
    const response = await fetch(`http://localhost:3004/status`)
    const json = await response.json();
    dispatch({
      type:"statuses/load/fulfilled",
      payload: json
    })
  }
}

export const postStatus = () => {
  return async (dispatch) => {
    dispatch({type: "postStatus/load/pending" });
    const response = await fetch('http://localhost:3004/status');
    const json = await response.json();
    dispatch({
      type: "postStatus/load/fulfilled",
      payload: json
    })
  }
}