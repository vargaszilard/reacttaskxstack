import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button";

const BasicToaster = () => {
  const notify = () => toast("Toaster clicked!");

  return (
    <div>
      <Button submitHandler={notify}>Notify!</Button>
      <ToastContainer />
    </div>
  );
};

export default BasicToaster;
