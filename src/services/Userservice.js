import { captureUsers } from "../actions";
import { useEffect, useState } from "react";
import { useStateFromContext } from "../contexts";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [_, dispatch] = useStateFromContext(); // eslint-disable-line
  const [nextUsersUrl, setNextUsersUrl] = useState();

  useEffect(() => {
    fetch("https://swapi.co/api/people/?page=1")
      .then(res => res.json())
      .then(({ next, results }) => {
        setUsers(results);
        setNextUsersUrl(next);
        // storing results for further use via context
        dispatch(captureUsers(results));
      });
  }, []); // eslint-disable-line

  const loadMoreUsers = () => {
    fetch(nextUsersUrl)
      .then(res => res.json())
      .then(({ next, results }) => {
        setNextUsersUrl(next);
        setUsers([...users, ...results]);
        // storing results for further use via context
        dispatch(captureUsers(users));
      });
  };

  return [{ users, hasMoreUsers: Boolean(nextUsersUrl) }, loadMoreUsers];
}

export default useUsers;
