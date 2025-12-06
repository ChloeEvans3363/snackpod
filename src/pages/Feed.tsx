import logo from "../assets/wordmark_black-butterontap.svg";
import { Layout } from "../components/Layout";
import "../style/Feed.css";

export function Feed() {
  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="logo snackpod" alt="Snackpod logo" />
      </div>

      <Layout></Layout>
    </>
  );
}

export default Feed;
