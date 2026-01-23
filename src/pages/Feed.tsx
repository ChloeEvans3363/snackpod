import logo from "../assets/wordmark_black-butterontap.svg";
import { Layout } from "../components/Layout";
import "../style/Feed.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function Feed() {
  const { signOut } = useAuthenticator();
  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="logo snackpod" alt="Snackpod logo" />
      </div>
      <button onClick={signOut}>Sign out</button>
      <Layout></Layout>
    </>
  );
}

export default Feed;
