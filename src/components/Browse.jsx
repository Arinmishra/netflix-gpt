import Header from "./Header";
import TopContainer from "./TopContainer";
import ListContainer from "./ListContainer";
import Footer from "./footer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptSlice?.showGptSearch);
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <TopContainer />
          <ListContainer />
        </>
      )}

      <Footer />
    </>
  );
};

export default Browse;
