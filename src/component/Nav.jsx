import React from 'react';

//네비바
function Nav() {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-white font-bold text-xl">
            저메추 V.0.0
          </a>
        </div>
        {/* <div className="flex items-center">
          <a href="#" className="text-white mr-4">
            Home
          </a>
          <a href="#" className="text-white mr-4">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default Nav;
