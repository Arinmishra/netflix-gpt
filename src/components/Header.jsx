import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const userSelector = useSelector((store) => store.user);
  // console.log(userSelector);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <>
      <div className="flex items-center justify-between absolute w-full z-30">
        <img src="/Netflix_Logo.png" className="ml-40 h-20"></img>
        {userSelector && (
          <div className="flex items-center gap-2.5">
            <p className="font-bold text-xl border-2 border-red-700 rounded-lg px-2.5 py-1">
              {userSelector.displayName}
            </p>
            <button
              className="m-2.5 px-2.5 py-1 rounded-lg font-bold text-white bg-red-700 cursor-pointer"
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
