import logo from "../assets/wordmark_black-butterontap.svg";
import { Layout } from "../components/Layout";
import "../style/Feed.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { list } from "aws-amplify/storage";
import { useEffect, useState } from "react";

function Feed() {
  const { signOut } = useAuthenticator();
  const [fileNames, setFileNames] = useState<string[]>([]);

  const OnLoadFeed = async () => {
    let response;
    try {
      response = await list({
        path: "podcast-submissions",
        options: {
          listAll: true,
        },
      });
      if (response && Array.isArray(response.items)) {
        setFileNames(response.items.map((item: any) => item.path));
      }
    } catch (error) {
      console.log("Error ", error);
      setFileNames([]);
    }
  };

  useEffect(() => {
    OnLoadFeed();
  }, []);

  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="logo snackpod" alt="Snackpod logo" />
      </div>
      <button onClick={signOut}>Sign out</button>
      <div className="uploads-list">
        <h2>Uploaded Files</h2>
        {fileNames.length === 0 ? (
          <p>No uploads found.</p>
        ) : (
          <ul>
            {fileNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </div>
      <Layout></Layout>
    </>
  );
}

export default Feed;
