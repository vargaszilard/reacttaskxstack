import "./App.css";
import LoginPage from "./components/login/LoginPage";
import Header from "./components/navbar/Header";
import RegisterPage from "./components/register/RegisterPage";
import Footer from "./components/navbar/Footer";
import JoinUsBox from "./components/UI/JoinUsBox";
import Card from "./components/UI/Card";
import MyAccount from "./components/myaccount/MyAccount";
import BasicTable from "./components/UI/table/BasicTable";
import BasicModal from "./components/UI/modal/BasicModal";
import BasicToaster from "./components/UI/toaster/BasicToaster";
import BasicDatePicker from "./components/UI/date/BasicDatePicker";

function App() {
  const object = {
    firstName: "Marta",
    lastName: "Black",
    userName: "Marta_b",
    dateOfBirth: "01.01.2001",
    address: "123 Main Street Boston",
    email: "marta_1234@gmail.com",
  };
  return (
    <div className="App">
      <Header />
      <LoginPage />
      <RegisterPage />
      <JoinUsBox role="Student" />
      <Card
        tag="Technology"
        title="Introduction to React Components"
        date="August 15, 2023"
        timeToRead="5 min"
      />
      <MyAccount status="active" object={object} />
      <BasicTable />
      <BasicModal />
      <BasicToaster />
      <BasicDatePicker />
      <Footer />
    </div>
  );
}

export default App;
