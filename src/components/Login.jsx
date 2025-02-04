import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const handleform = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div className="relative">
      <Header />
      <img
        src="/Netflix-bg-img.jpg"
        className="object-cover brightness-50 h-screen w-screen"
      ></img>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit px-16 py-7 bg-black/60 rounded-mdshadow-lg">
        <form className=" flex flex-col w-fit">
          <h1 className="text-3xl text-white font-bold my-7">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>

          {signInForm === false && (
            <>
              <input
                type="name"
                placeholder="Name"
                className="border rounded-md border-neutral-500 p-4 my-2 bg-black/35 w-70 placeholder-neutral-400 text-white"
              ></input>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-md border-neutral-500 p-4 my-2 bg-black/35 w-70 placeholder-neutral-400 text-white"
              ></input>
            </>
          )}

          <input
            type="email"
            placeholder="Email Id"
            className="border rounded-md border-neutral-500 p-4 my-2 bg-black/35 w-70 placeholder-neutral-400 text-white"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className=" text-white border rounded-md border-neutral-400 p-4 my-2 bg-black/35 placeholder-neutral-400"
          ></input>
          <button className=" text-white font-medium bg-red-600 duration-300 hover:bg-red-700 p-2 my-2 rounded-md mb-7 cursor-pointer ">
            {signInForm ? "Sign In" : "Sign Up"}
          </button>

          <p>
            <span className="text-neutral-300">
              {signInForm ? "New to Netflix? " : "Already a user? "}
            </span>
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleform}
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
