import { ADD_TODO, TOGGLE_COMPLETED, RESET } from "../actions/types";
import { initialState } from "../store";

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = !action.payload.completed;
          }
          return todo;
        }),
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
