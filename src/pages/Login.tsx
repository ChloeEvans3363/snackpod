import logo from "../assets/logo_main.svg";
import "../style/Login.css";
import { Link } from "react-router-dom";
import {
  Authenticator,
  ThemeProvider,
  useAuthenticator,
  Button,
  View,
  Text,
} from "@aws-amplify/ui-react";
import type { Theme } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "../style/Login.css";
import Feed from "./Feed";

Amplify.configure(outputs);

const components = {
  SignIn: {
    Footer() {
      const { toForgotPassword, toSignUp } = useAuthenticator();
      return (
        <View textAlign="center">
          <Text className="footer-text"> Or </Text>
          <Button fontWeight="normal" onClick={toSignUp}>
            Sign Up
          </Button>
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },
  SignUp: {
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View textAlign="center">
          <Text className="footer-text"> Already have an account? </Text>
          <Button fontWeight="normal" onClick={toSignIn}>
            Sign In
          </Button>
        </View>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Email",
      isRequired: true,
      label: "",
    },
    password: {
      placeholder: "Password",
      isRequired: true,
      label: "",
    },
  },
  signUp: {
    email: {
      placeholder: "Email",
      isRequired: true,
      label: "",
    },
    password: {
      placeholder: "Password",
      isRequired: true,
      label: "",
    },
    confirm_password: {
      placeholder: "Confirm Password",
      isRequired: true,
      label: "",
    },
  },
};

const theme: Theme = {
  name: "Auth Example Theme",
  tokens: {
    components: {
      authenticator: {
        router: {
          boxShadow: `0 0 0 rgba(0,0,0,0.1)`,
          borderWidth: "0",
        },
        form: {
          padding: `1rem 2rem 1rem`,
        },
      },
      button: {
        primary: {
          backgroundColor: "#fce38a",
          _hover: {
            backgroundColor: "#f9d976",
          },
          _active: {
            backgroundColor: "#fbbf59",
          },
          _focus: {
            backgroundColor: "#fbbf59",
          },
        },
      },
    },
  },
};

export function Login() {
  return (
    <>
      <div className="loginLogo">
        <Link to="/">
          <img src={logo} className="logo snackpod" alt="Snackpod logo" />
        </Link>
        <h2>snackable audio, seriously addictive</h2>
      </div>
      <ThemeProvider theme={theme}>
        <Authenticator
          formFields={formFields}
          initialState="signIn"
          components={components}
        >
          <Feed></Feed>
        </Authenticator>
      </ThemeProvider>
    </>
  );
}

export default Login;
