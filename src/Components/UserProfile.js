import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserProfile = (props) => {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/" +
            props.match.params.userId
        );
        setProfile(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [props.match.params.userId]);

  return (
    <div>
      {isLoading ? <Spinner animation="border" /> : <UserCard user={profile} />}
    </div>
  );
};

export default UserProfile;
