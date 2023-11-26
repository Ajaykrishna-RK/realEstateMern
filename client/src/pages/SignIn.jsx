import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Signin() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
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
      navigate("/")
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="my-7 text-3xl text-center font-semibold"> Sign In </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    
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
          {loading ? "Loading" : "Sign In"} 
        </button>
      </form>

      <div className="flex items-center gap-2 mt-5">
        <p> Dont have an account ? </p>
        <Link to={"/sign-up"}>
          {" "}
          <span className="text-blue-700"> Sign Up </span>{" "}
        </Link>
      </div>

      {error  && <p className="text-red-500"> {error} </p>}
    </div>
  );
}

export default Signin;

