// components/WithContext
import React, { useRef } from "react";
import useUsers from "../services/Userservice";
import InfiniteLoading from "react-simple-infinite-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ListContainer, ListItem, Name, Loader } from "./UserListStyle";

function UsersList() {
  const ref = useRef();
  const [{ users, hasMoreUsers }, loadMoreUsers] = useUsers();
  return (
    <ListContainer>
      <InfiniteLoading
        itemHeight={30}
        loadMoreItems={loadMoreUsers}
        hasMoreItems={hasMoreUsers}
        placeholder={
          <Loader>
            <FontAwesomeIcon icon={faSpinner} className="icon" /> Loading
          </Loader>
        }
        customScrollbar
        ref={ref}
      >
        {users.map((user, index) => (
          <ListItem key={user.name}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <Name>{user.name}</Name>
          </ListItem>
        ))}
      </InfiniteLoading>
    </ListContainer>
  );
}

export default UsersList;
