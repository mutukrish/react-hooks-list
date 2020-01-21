import React from "react";
import { StateProvider } from "./contexts";
import reducer, { initialState } from "./reducers";
import UsersList from "./components/UsersList";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <h3>Users list with Infinite load</h3>
        <UsersList />
      </div>
    </StateProvider>
  );
}

export default App;
