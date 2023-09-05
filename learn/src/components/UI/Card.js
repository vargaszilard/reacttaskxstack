import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-tag">{props.tag}</div>
      <div className="card-title">{props.title}</div>
      <div className="card-details">
        <span className="card-date">Date: {props.date}</span>
        <span className="card-time">Time to read: {props.timeToRead}</span>
      </div>
    </div>
  );
}

export default Card;
