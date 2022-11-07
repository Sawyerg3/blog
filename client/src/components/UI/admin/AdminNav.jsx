import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <>
      <nav className="flex justify-center space-x-4">
        <div className="nav-container">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="rounded-lg px-3 py-2 text-5xl text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
              <Link to="/admin/posts">Posts</Link>
            </li>
            <li className="rounded-lg px-3 py-2 text-5xl text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
              <Link to="/admin/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminNav;
