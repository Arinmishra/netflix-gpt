const VideoTitle = ({ title, overview }) => {
  return (
    <div className="bg-gradient-to-r from-black pt-48 w-xl pl-25 absolute h-screen">
      <h1 className="text-6xl text-neutral-100 font-bold mb-5">{title}</h1>
      <p className="text-lg text-neutral-300">{overview}</p>
      <div className="my-5">
        <button className="w-32 py-2.5 mr-5 mt-2 rounded-lg font-bold cursor-pointer bg-neutral-100 text-xl text-neutral-800 hover:bg-neutral-400 duration-300">
          Play
        </button>
        <button className="w-32 py-2.5 mr-5 mt-2 rounded-lg font-bold cursor-pointer bg-neutral-600/80 text-neutral-200 hover:bg-neutral-800/80 duration-300">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
