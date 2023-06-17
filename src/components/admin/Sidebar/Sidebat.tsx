import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-1/4 h-screen">
      <nav>
        <ul>
          <li>
            <a className="block py-2 px-4 text-gray-800 hover:bg-gray-300" href="#">Dashboard</a>
          </li>
          <li>
            <a className="block py-2 px-4 text-gray-800 hover:bg-gray-300" href="#">Analytics</a>
          </li>
          <li>
            <a className="block py-2 px-4 text-gray-800 hover:bg-gray-300" href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
