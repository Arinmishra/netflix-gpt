import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addGptSearch } from "../../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../../utils/constants";
import { changeLang } from "../../utils/configslice";

const Header = () => {
  const userSelector = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSlice.showGptSearch);
  const config = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // console.log(user);
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // only render gpt search page when clicked
    dispatch(addGptSearch(!showGptSearch));
  };

  const handleLangSelect = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <>
      <div className="bg-gradient-to-b from-black to-100% flex items-center justify-between absolute w-full z-30">
        <img src="/Netflix_Logo.png" className="ml-25 h-20"></img>
        {userSelector && (
          <div className="flex items-center gap-2.5 m-2.5">
            {showGptSearch && (
              <select
                className="text-white px-2 rounded-lg"
                onClick={handleLangSelect}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.name} className="text-black">
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="bg-sky-600 hover:bg-sky-700 duration-300 px-2.5 py-2 rounded-lg text-white font-bold cursor-pointer"
              onClick={handleGptSearchClick}
            >
              {!showGptSearch ? "Gpt Search" : "Home"}
            </button>
            <p className="font-bold text-xl border-2 text-white border-red-700 rounded-lg px-2.5 py-1">
              {userSelector.displayName}
            </p>
            <button
              className=" px-2.5 py-1 rounded-lg font-bold text-white bg-red-700 hover:bg-red-800 duration-300 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
