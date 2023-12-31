import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

function SignUp() {
  const [formData, setFormData] = useState({});

  const {loading,setLoading,error}  = useSelector((state)=>state?.user || {})

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data?.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in")
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="my-7 text-3xl text-center font-semibold"> Sign Up </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus:outline-none"
          id="userName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
          onChange={(e) => handleChange(e)}
        />

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70">
          {" "}
          {loading ? "Loading" : "Sign Up"} 
        </button>
        <OAuth/>
      </form>

      <div className="flex items-center gap-2 mt-5">
        <p> Have an account ? </p>
        <Link to={"/sign-in"}>
          {" "}
          <span className="text-blue-700"> Sign In </span>{" "}
        </Link>
      </div>

      {error  && <p className="text-red-500"> {error} </p>}
    </div>
  );
}

export default SignUp;
