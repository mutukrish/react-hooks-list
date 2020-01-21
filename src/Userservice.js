import { setUsers } from "../actions";
import React, { useEffect, useState } from "react";
import { useStateFromContext } from "../contexts";

function useUsers() {
  const [users] = useState([]);
  const [_, dispatch] = useStateFromContext();
  const [nextUsersUrl, setNextUsersUrl] = useState();

  useEffect(() => {
    fetch("https://swapi.co/api/people/?page=1")
      .then(res => res.json())
      .then(({ next, results }) => {
        //setUsers(results);
        setNextUsersUrl(next);
        dispatch(setUsers(users));
      });
  }, []);

  const loadMoreUsers = () => {
    fetch(nextUsersUrl)
      .then(res => res.json())
      .then(({ next, results }) => {
        setNextUsersUrl(next);
        dispatch(setUsers(users));
        //setCharacters([...characters, ...results]);
      });
  };

  return [{}, loadMoreUsers];
}

export default useUsers;
