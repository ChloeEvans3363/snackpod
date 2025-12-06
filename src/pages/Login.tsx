import Button from "../components/Button";
import TextInput from "../components/Form";
import logo from "../assets/logo_main.svg";
import "../style/Login.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <div className="loginLogo">
        <Link to="/">
          <img src={logo} className="logo snackpod" alt="Snackpod logo" />
        </Link>
        <h2>snackable audio, seriously addictive</h2>
      </div>

      <div className="inputContainer">
        <TextInput type="text">Email</TextInput>
        <TextInput type="password">Password</TextInput>
      </div>

      <div className="buttonContainer">
        <Link to="/Feed">
          <Button color="primary" buttonName="loginPage">
            Log In
          </Button>
        </Link>
        <p>OR</p>
        <Link to="/Feed">
          <Button color="outline-secondary" buttonName="loginPage">
            Sign Up
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Login;
