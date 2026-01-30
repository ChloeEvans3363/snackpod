import "../style/Podcast.css";

interface PodcastProps {
  podcastName: string;
  username: string;
  podcastGenre: string;
  podcastAudioPath: string;
}

const PodcastComponent = ({
  podcastName,
  username,
  podcastGenre,
  podcastAudioPath,
}: PodcastProps) => {
  return (
    <div className="podcast">
      <h1>{podcastName}</h1>
      <audio src={podcastAudioPath} controls></audio>
      <h5>{username}</h5>
      <p>{podcastGenre}</p>
    </div>
  );
};

export default PodcastComponent;
