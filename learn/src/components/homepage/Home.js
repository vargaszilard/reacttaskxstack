import React from "react";
import BasicTable from "../UI/table/BasicTable";
import BasicToaster from "../UI/toaster/BasicToaster";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <BasicTable />
      <BasicToaster />
    </div>
  );
};

export default Home;
