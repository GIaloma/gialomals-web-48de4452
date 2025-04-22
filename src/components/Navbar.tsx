import React from "react";

const Navbar = () => (
  <header className="bg-white relative shadow-sm">
    <nav className="container mx-auto flex items-center py-3">
      <a
        href="/"
        className="flex items-center gap-2 text-xl font-extrabold text-gray-900 hover:opacity-80 transition"
      >
        <img
          src="/lovable-uploads/237f2b3a-fc46-4b28-b6c9-52aa72036706.png"
          alt="Gialoma Logo"
          className="h-10 w-10 object-contain"
        />
        <span>Gialoma Life Solutions</span>
      </a>
      {/* Removed nav buttons */}
    </nav>
  </header>
);

export default Navbar;
