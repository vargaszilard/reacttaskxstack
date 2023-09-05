import ComplettInputField from "../UI/ComplettInputField";
import { useState } from "react";
import Button from "../UI/Button";

const StudentRegister = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const validation = () => {
    const newErrors = {};

    if (firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }

    props.errorHandler(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validation()) {
      console.log("Done");
    }
  };

  return (
    <form>
      <ComplettInputField
        labelName="First name"
        id="firstName"
        placeholder="Enter first name"
        changeHandler={handleFirstNameChange}
      />
      {props.errors.firstName && (
        <div className="error">{props.errors.firstName}</div>
      )}
      <ComplettInputField
        labelName="Last name"
        id="lastName"
        placeholder="Enter last name"
        changeHandler={handleLastNameChange}
      />
      {props.errors.lastName && (
        <div className="error">{props.errors.lastName}</div>
      )}
      <ComplettInputField
        htmlFor="date"
        labelName="Date"
        id="date"
        type="date"
        changeHandler={handleDateChange}
      />
      <ComplettInputField
        labelName="Address"
        id="address"
        placeholder="Enter address"
        changeHandler={handleAddressChange}
      />
      <Button submitHandler={handleRegister}>Register</Button>
    </form>
  );
};

export default StudentRegister;
