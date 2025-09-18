import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-1">
      <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-orange-900 via-black to-black text-white shadow-md">
        <h1 className="text-xl font-bold">KINGCART</h1>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Solutions
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <div className="hidden md:block">
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200">
            Contact
          </button>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-orange-500 py-4 gap-4">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Solutions
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Contact
          </a>
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200">
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

