import React from "react";
import Button from "./Button";
import "./JoinUsBox.css";
import { Link } from "react-router-dom";

const JoinUsBox = (props) => {
  return (
    <div className="register-container">
      <h1 className="register-heading">Register as {props.role}</h1>
      <h4 className="register-subheading">
        Do consectetur proident proident id eiusmod deserunt consequat pariatur
        ad ex velit do Lorem reprehenderit.
      </h4>
      <Link to="/registration">
        <Button className="register-button">Join us</Button>
      </Link>
    </div>
  );
};

export default JoinUsBox;
