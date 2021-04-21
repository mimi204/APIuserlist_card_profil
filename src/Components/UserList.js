import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));
    };
    fetchUsers();
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <Spinner animation="border" />;
  }
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UserList;
