// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-500">
      <div className="flex justify-between items-center container m-auto py-4">
        <div className="logo uppercase px-6 text-4xl font-extrabold cursor-pointer text-white hover:text-blue-900 focus:text-blue-900">
          Sport Club
        </div>
        <ul className="flex">
          <li className="px-6 uppercase text-lg font-semibold text-white hover:text-blue-900 focus:text-blue-900">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="px-6 uppercase text-lg font-semibold text-white hover:text-blue-900 focus:text-blue-900">
            <Link to="/matches">Matches</Link>
          </li>
          <li className="px-6 uppercase text-lg font-semibold text-white hover:text-blue-900 focus:text-blue-900">
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
