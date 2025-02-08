import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addVideo } from "../../utils/movieSlice";

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();

  const VideoTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailerType = json.results.filter(
      (result) => result.type === "Trailer"
    );

    const trailer = filterTrailerType ? filterTrailerType[0] : json.results[0];
    dispatch(addVideo(trailer));
  };
  useEffect(() => {
    VideoTrailer();
  }, []);
};

export default useVideoTrailer;
