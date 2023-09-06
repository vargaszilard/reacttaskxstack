import React from "react";
import "./App.css";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import JoinUsBox from "./components/UI/JoinUsBox";
import MyAccount from "./components/myaccount/MyAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/join-us" element={<JoinUsBox />} />
          <Route path="/registration" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
