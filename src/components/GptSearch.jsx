import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
// import client from "../../utils/openai";

const GptSearch = () => {
  const language = useSelector((store) => store.config.lang);

  const handleGptSearch = async () => {
    // api call

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
  };

  return (
    <>
      <img
        className="object-cover brightness-30 w-screen h-screen"
        src=".\Netflix-bg-img.jpg"
      ></img>
      <div className="absolute top-1/5 w-screen flex gap-2 justify-center">
        <input
          className="w-2/3 rounded-lg border-2 border-red-700 focus:outline focus:bg-red-50/90 focus:outline-red-700  bg-red-50/80 px-3 py-2.5"
          type="text"
          placeholder={lang[language].placeholder}
        ></input>
        <button
          className="px-5 rounded-lg font-bold text-white bg-red-700 hover:bg-red-800 duration-300 cursor-pointer"
          onClick={handleGptSearch}
        >
          {lang[language].search}
        </button>
      </div>
    </>
  );
};
export default GptSearch;
