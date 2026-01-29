import logo from "../assets/wordmark_black-butterontap.svg";
import { Layout } from "../components/Layout";
import "../style/Feed.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPodcast } from "../../mutations";
import { listPodcasts } from "../../queries";

const client = generateClient();

// Update to match createPodcast mutation input
export async function createPostItem(name: string, genre: string) {
  await client.graphql({
    query: createPodcast,
    variables: {
      input: {
        name,
        genre,
      },
    },
  });
}

export async function fetchFeed() {
  const response = await client.graphql({
    query: listPodcasts,
    variables: {
      limit: 20,
    },
  });

  return response.data.listPodcasts.items;
}

function Feed() {
  const { signOut } = useAuthenticator();
  const [podcastNames, setPodcastNames] = useState<string[]>([]);

  // Fetch all podcasts using GraphQL
  const fetchFeed = async () => {
    try {
      const result = await client.graphql({ query: listPodcasts });
      // Adjust the path below based on your actual query response structure
      const items = result.data?.listPodcasts?.items || [];
      setPodcastNames(items.map((item: any) => item.name));
    } catch (error) {
      console.log("Error fetching feed:", error);
      setPodcastNames([]);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <>
      <div className="logoContainer">
        <img src={logo} className="logo snackpod" alt="Snackpod logo" />
      </div>
      <button onClick={signOut}>Sign out</button>
      <div className="uploads-list">
        <h2>Uploaded Podcasts</h2>
        {podcastNames.length === 0 ? (
          <p>No uploads found.</p>
        ) : (
          <ul>
            {podcastNames.map((name) => (
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
