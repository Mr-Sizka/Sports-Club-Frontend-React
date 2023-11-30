// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({setUpdate}) => {
  return (
    <aside className="bg-red-500 h-screen w-64 fixed top-0 left-0">
      <div className="flex flex-col justify-start items-start h-full py-4">
        <div className="logo ms-3 mb-9 uppercase text-4xl font-extrabold cursor-pointer text-white hover:text-red-900 focus:text-red-900">
          Admin Panel S.C
        </div>
        <ul className="flex flex-col space-y-4">
          <li className="ms-3 uppercase text-lg font-semibold text-white hover:text-red-900 focus:text-red-900">
            <Link to="/admin-players-view" onClick={()=>setUpdate(false)}>Profiles</Link>
          </li>
          <li className="ms-3 uppercase text-lg font-semibold text-white hover:text-red-900 focus:text-red-900">
            <Link to="/admin-match-view" onClick={()=>setUpdate(false)}>Matches</Link>
          </li>
          <li className="ms-3 uppercase text-lg font-semibold text-white hover:text-red-900 focus:text-red-900">
            <Link to="/admin-team-view" onClick={()=>setUpdate(false)}>Teams</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
