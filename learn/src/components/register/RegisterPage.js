import { useState } from "react";
import StudentRegister from "./StudentRegister";
import TrainerRegister from "./TrainerRegister";

const RegisterPage = () => {
  const [switcher, setSwitcher] = useState("student");
  const [errors, setErrors] = useState({});

  const handleSwitcherChange = (event) => {
    setSwitcher(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1>Registration</h1>
      <select name="target" id="targets" onChange={handleSwitcherChange}>
        <option value="student">Student</option>
        <option value="trainer">Trainer</option>
      </select>
      {switcher === "student" ? (
        <StudentRegister errorHandler={setErrors} errors={errors} />
      ) : (
        <TrainerRegister errorHandler={setErrors} errors={errors} />
      )}
    </div>
  );
};

export default RegisterPage;
