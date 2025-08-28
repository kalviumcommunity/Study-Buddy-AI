import React from 'react';

const gold = '#C9B037';

function Navbar() {
  return (
    <nav className="w-full bg-black/90 border-b" style={{ borderColor: gold }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold" style={{ color: gold }}>🦉</span>
          <span className="text-xl font-bold font-serif" style={{ color: gold }}>Study Buddy AI</span>
        </div>
        <div className="flex gap-6">
          <a href="/" className="text-base font-medium" style={{ color: gold }}>Home</a>
          <a href="/upload" className="text-base font-medium text-gray-200 hover:text-yellow-400 transition">Upload Note</a>
          <a href="/ask" className="text-base font-medium text-gray-200 hover:text-yellow-400 transition">Ask Question</a>
          <a href="/login" className="text-base font-medium text-gray-200 hover:text-yellow-400 transition">Login</a>
          <a href="/register" className="text-base font-medium text-gray-200 hover:text-yellow-400 transition">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
