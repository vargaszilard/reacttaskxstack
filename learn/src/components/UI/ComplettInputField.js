import React from "react";
import "./ComplettInputField.css";

const ComplettInputField = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.htmlFor}>{props.labelName}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
      />
    </div>
  );
};

ComplettInputField.defaultProps = {
  type: "input",
};

export default ComplettInputField;
