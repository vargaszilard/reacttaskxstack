import ComplettInputField from "../UI/ComplettInputField";
import { useState } from "react";
import Button from "../UI/Button";

const TrainerRegister = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specification, setSpecification] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSpecificationChange = (event) => {
    setSpecification(event.target.value);
  };

  const validation = () => {
    const newErrors = {};

    if (firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }

    if (specification.trim() === "") {
      newErrors.specification = "Specificaiton is required";
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
        labelName="First Name"
        id="firstName"
        placeholder="Enter first name"
        changeHandler={handleFirstNameChange}
      />
      {props.errors.firstName && (
        <div className="error">{props.errors.firstName}</div>
      )}
      <ComplettInputField
        labelName="First Name"
        id="firstName"
        placeholder="Enter second name"
        changeHandler={handleLastNameChange}
      />
      {props.errors.firstName && (
        <div className="error">{props.errors.lastName}</div>
      )}
      <ComplettInputField
        labelName="Specification"
        id="specification"
        placeholder="Enter specification"
        changeHandler={handleSpecificationChange}
      />
      {props.errors.firstName && (
        <div className="error">{props.errors.specification}</div>
      )}
      <Button submitHandler={handleRegister}>Register</Button>
    </form>
  );
};

export default TrainerRegister;
