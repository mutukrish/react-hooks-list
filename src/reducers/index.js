import usersReducer, { usersInitialState } from "./users";

export const initialState = {
  usersState: usersInitialState
};

const mainReducer = ({ users }, action) => ({
  usersState: usersReducer(users, action)
});

export default mainReducer;
