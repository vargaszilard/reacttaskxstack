import React from "react";
import Field from "./Field";
import "./MyAccount.css";

const MyAccount = (props) => {
  return (
    <div className="my-account-container">
      <h1 className="my-account-header">My profile</h1>
      <div className="my-account-status">
        <h4>Status</h4>
        {props.status}
      </div>
      <div>
        <Field name="First Name" value={props.object["firstName"]} />
        <Field name="Last Name" value={props.object["lastName"]} />
        <Field name="User Name" value={props.object["userName"]} />
        <Field name="Date of Birth" value={props.object["dateOfBirth"]} />
        <Field name="Address" value={props.object["address"]} />
        <Field name="Email" value={props.object["email"]} />
      </div>
    </div>
  );
};

export default MyAccount;
