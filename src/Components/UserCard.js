import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const spanStyle = {
    backgroundColor: "#0069D9",
    borderRadius: "50%",
    fontSize: "20px",
    fontColor: "white",
    padding: "10px",
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <span style={spanStyle}> {user.name[0]} </span>
          <Card.Title> {user.name} </Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Button variant="primary">
            <Link style={{ color: "white" }} to={`/profile/${user.id}`}>
              View profile
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
