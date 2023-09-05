import React from "react";

const Field = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      {props.value}
    </div>
  );
};

export default Field;
