import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const dispatch = useDispatch();

  const handleSignInSignUp = () => {
    setSignInForm(!signInForm);
  };

  const handleLogin = () => {
    // validation
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = signInForm ? null : nameRef.current.value;

    const message = checkValidData(email, password);
    setErrorMessage(message);

    if (message) return;
    // authentication
    if (signInForm === false) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          // console.log(user);

          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                })
              );

              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("🤔 " + errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
            })
          );
          // console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("🤔 " + errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <img
        src="/Netflix-bg-img.jpg"
        className="object-cover brightness-50 h-screen w-screen"
      ></img>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit px-16 py-7 bg-black/70 rounded-md shadow-lg">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col w-70"
        >
          <h1 className="text-3xl text-white font-bold my-7">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>

          {signInForm === false && (
            <>
              <input
                ref={nameRef}
                type="name"
                placeholder="Name"
                className="border rounded-md border-neutral-500 p-4 my-2 bg-black/35 placeholder-neutral-400 text-white"
              ></input>
            </>
          )}

          <input
            ref={emailRef}
            type="email"
            placeholder="Email Id"
            className="border rounded-md border-neutral-500 p-4 my-2 bg-black/35 placeholder-neutral-400 text-white"
          ></input>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className=" text-white border rounded-md border-neutral-400 p-4 my-2 bg-black/35 placeholder-neutral-400"
          ></input>

          <p className="text-red-600 font-medium mt-2 mb-4">{errorMessage}</p>

          <button
            className=" text-white font-medium bg-red-600 duration-300 hover:bg-red-700 p-2 my-2 rounded-md mb-7 cursor-pointer "
            onClick={handleLogin}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>

          <p>
            <span className="text-neutral-300">
              {signInForm ? "New to Netflix? " : "Already a user? "}
            </span>
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleSignInSignUp}
            >
              {signInForm ? "Sign Up Now!" : "Sign In Now!"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
