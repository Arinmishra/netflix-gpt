import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBg = ({ movieId }) => {
  useVideoTrailer(movieId);
  const video = useSelector((store) => store.movie?.video);
  if (!video) return;

  return (
    <>
      <iframe
        className=" w-screen  aspect-video pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          video.key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&fs=0&iv_load_policy=3&loop=1&playlist=" +
          video.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default VideoBg;
