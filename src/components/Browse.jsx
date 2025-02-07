import { Provider } from "react-redux";
import Header from "./Header";
import appStore from "../../utils/appStore";

const Browse = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </div>
  );
};

export default Browse;
