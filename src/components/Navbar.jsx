import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button.jsx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className="flex items-center justify-between h-24 w-full px-12"
    >
      {!isMenuOpen && (
        <h1 className="text-white text-2xl font-semibold">Wallet</h1>
      )}
      <div className={`flex gap-7 ${!isMenuOpen && "max-sm:hidden"}`}>
        <button className="text-white text-lg">Sign up</button>
        <Button bgClass="bg-[#BFAFF2]">Log in</Button>
      </div>
      <button
        className={!isMenuOpen && "sm:hidden"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X size={30} className="text-white hover:text-gray-300 mt-1" />
        ) : (
          <Menu size={30} className="text-white hover:text-gray-300 mt-1" />
        )}
      </button>
    </header>
  );
}

export default Navbar;
