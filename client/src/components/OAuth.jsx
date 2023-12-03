import React from "react";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import { app } from "../Firebase";

function OAuth() {
  const handleGoogleClick = async() => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
const result = await signInWithPopup(auth,provider)

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={handleGoogleClick} className="bg-red-700 text-[white] hover:opacity-90 p-3 rounded-lg uppercase">
      Continue with google
    </button>
  );
}

export default OAuth;
