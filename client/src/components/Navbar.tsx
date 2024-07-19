import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-12 bg-zinc-950 flex justify-between items-center p-4 border-b border-gray-700">

      <div className="flex items-center space-x-1" id="logo">
        <div className="text-2xl text-white font-bold">Ani</div>
        <div className="text-2xl text-red-500 font-bold">Watch</div> {/* Changed to red-500 */}
      </div>
      <div className="" id="navbar">
        <ul className="flex gap-6 text-white">
          <li className="hover:text-red-500 transition duration-300"> {/* Changed to red-500 */}
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500 transition duration-300"> {/* Changed to red-500 */}
            <Link to="/anime">Anime</Link>
          </li>
          <li className="hover:text-red-500 transition duration-300"> {/* Changed to red-500 */}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="" id="profile">
        <Link to="/profile">
          <div className="text-white hover:text-red-500 transition duration-300"> {/* Changed to red-500 */}
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

