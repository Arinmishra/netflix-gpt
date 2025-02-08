import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const TopContainer = () => {
  useNowPlayingMovies();
  const movie = useSelector((store) => store.movie?.nowPlaying);
  if (!movie) return;

  const mainMovie = movie[0];

  const { id, title, overview } = mainMovie;

  return (
    <>
      <VideoTitle title={title} overview={overview} />
      <VideoBg movieId={id} />
    </>
  );
};

export default TopContainer;
