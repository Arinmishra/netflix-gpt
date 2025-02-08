import { IMG_BASE_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const ListContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const nowPlaying = useSelector((store) => store.movie?.nowPlaying);
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);

  if (!nowPlaying || !popularMovies || !topRatedMovies || !upcomingMovies)
    return;

  return (
    <div className="bg-black">
      <div className=" w-screen relative z-20">
        <div className=" ml-10 -mt-60">
          <h1 className="text-xl font-medium my-3 text-white">
            🍿 Now Playing
          </h1>
          <div className="movieList flex overflow-x-scroll z-30">
            {nowPlaying.map((movie) => (
              <img
                className="w-48 mr-5 rounded-lg"
                key={movie.id}
                src={IMG_BASE_URL + movie.poster_path}
                alt="imgCard"
              ></img>
            ))}
          </div>

          <h1 className="text-xl font-medium my-3 text-white">🎩 Top Rated</h1>
          <div className="movieList flex overflow-x-scroll">
            {topRatedMovies.map((movie) => (
              <img
                className="w-48 mr-5 rounded-lg"
                key={movie.id}
                src={IMG_BASE_URL + movie.poster_path}
                alt="imgCard"
              ></img>
            ))}
          </div>
          <h1 className="text-xl font-medium my-3 text-white">🌟 Popular</h1>
          <div className="movieList flex overflow-x-scroll">
            {popularMovies.map((movie) => (
              <img
                className="w-48 mr-5 rounded-lg"
                key={movie.id}
                src={IMG_BASE_URL + movie.poster_path}
                alt="imgCard"
              ></img>
            ))}
          </div>
          <h1 className="text-xl font-medium my-3 text-white">🫴 Upcoming</h1>
          <div className="movieList flex overflow-x-scroll">
            {upcomingMovies.map((movie) => (
              <img
                className="w-48 mr-5 rounded-lg"
                key={movie.id}
                src={IMG_BASE_URL + movie.poster_path}
                alt="imgCard"
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
