import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [myerror, setError] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${domain}/user/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "/";
      }
    } catch (error) {
      setError(1);
      console.error("ERROR: ", error);
    }
  };

  return (
    <>
      <div className="flex mt-52 justify-center bg-cover bg-center text-white">
        <div className="w-96 p-8 rounded-lg border-2 border-gray-100 ">
          <h1 className="text-3xl font-extrabold text-center mb-6">Log in</h1>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full h-12 px-5 py-2 text-lg rounded-full border-2 border-gray-200 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i className="bx bxs-user-circle absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl"></i>
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-12 px-5 py-2 text-lg rounded-full border-2 border-gray-200 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl"></i>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="accent-green-500 mr-2 transform scale-125" />
                Remember me
              </label>
              <Link to="/forgot_password" className="hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600 transition"
            >
              Login
            </button>

            <div className="text-center mt-6">
              Don't have an account?{" "}
              <Link to="/sign_up" className="text-green-500 font-medium hover:underline">
                Register
              </Link>
            </div>
            {myerror ? <div className="text-center text-red-500 mt-4">! Invalid Credentials !</div> : ""}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

