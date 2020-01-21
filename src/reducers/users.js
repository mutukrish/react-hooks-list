import { CAPTURE_USERS } from "../actions/types";

export const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case CAPTURE_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export const usersInitialState = {
  users: []
};

export default usersReducer;
