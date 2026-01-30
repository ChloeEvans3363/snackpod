import logo from "../assets/wordmark_black-butterontap.svg";
import { Layout } from "../components/Layout";
import "../style/Feed.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPodcast } from "../../mutations";
import { listPodcasts } from "../../queries";
import { getUrl } from "aws-amplify/storage";
import Podcast from "../components/Podcast";

const client = generateClient();

// Update to match createPodcast mutation input
export async function createPostItem(
  name: string,
  owner: string,
  genre: string,
  audioPath: string,
) {
  await client.graphql({
    query: createPodcast,
    variables: {
      input: {
        name,
        owner,
        genre,
        audioPath,
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
  const [podcastGenres, setPodcastGrenres] = useState<string[]>([]);
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [usernames, setUsernames] = useState<string[]>([]);

  // Fetch all podcasts using GraphQL
  const fetchFeed = async () => {
    try {
      const result = await client.graphql({ query: listPodcasts });
      // Adjust the path below based on your actual query response structure
      const items = result.data?.listPodcasts?.items || [];
      setPodcastNames(items.map((item: any) => item.name));
      setPodcastGrenres(items.map((item: any) => item.genre));
      setUsernames(items.map((item: any) => item.owner));
      const urls = await Promise.all(
        items.map((item) => getUrl({ path: item.audioPath })),
      );
      setAudioUrls(urls.map((result) => result.url.toString()));
    } catch (error) {
      console.log("Error fetching feed:", error);
      setPodcastNames([]);
      setAudioUrls([]);
      setPodcastGrenres([]);
      setUsernames([]);
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
        {podcastNames.length === 0 ? (
          <p>No uploads found.</p>
        ) : (
          <ul>
            {podcastNames.map((name, index) => (
              <li key={name}>
                <Podcast
                  podcastName={name}
                  podcastGenre={podcastGenres[index]}
                  username={usernames[index]}
                  podcastAudioPath={audioUrls[index]}
                ></Podcast>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Layout></Layout>
    </>
  );
}

export default Feed;
