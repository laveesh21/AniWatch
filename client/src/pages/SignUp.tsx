import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || agreement !== true) {
      alert('Please fill in all fields and agree to the terms.');
      return;
    }

    try {
      const response = await axios.post(`${domain}/user/register`, {
        username,
        email,
        password,
      });

      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const inputClass = "w-80 h-12 px-5 py-2 text-lg rounded-full border-2 border-gray-200 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-white";

  return (
    <div className="flex h-auto m-20 justify-center bg-cover bg-center text-white">
      <div className="w-auto py-10 px-14 rounded-lg bg-opacity-20 border-2 border-gray-200 backdrop-blur-lg">
        <h1 className="text-3xl font-extrabold text-center mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <label htmlFor="username" className="block text-sm mb-2">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className={inputClass}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="email" className="block text-sm mb-2">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="password" className="block text-sm mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={inputClass}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="agreement" className="flex items-center text-sm">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                className="mr-2 transform scale-125"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
                required
              />
              I agree to the <a href="https://google.com" className="text-green-500 hover:underline">terms and conditions.</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-green-500 text-black text-xl font-semibold rounded-full hover:bg-green-600 transition"
          >
            Sign Up
          </button>

          <p className="mt-6 text-center text-base">
            Already a user?{' '}
            <a href="/login" className="text-green-500 hover:underline">
              Login here
            </a>
          </p>


        </form>
      </div>
    </div>
  );
}

export default SignUp;

