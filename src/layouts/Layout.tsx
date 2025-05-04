import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserModal from '../pages/UserModal'; // Adjust the path as necessary

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReturningUser, setIsReturningUser] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-yellow-100">
      <header className="bg-yellow-300 p-4 text-center">
        <h1 className="text-2xl font-bold text-yellow-800">PHASIONISTAR</h1>
      </header>
      <nav className="flex justify-center gap-6 py-8 px-4 bg-yellow-300 shadow-md relative top-0 w-full z-50">
          <Link to="/" className="text-yellow-800 font-bold hover:underline">Home</Link>
          <Link to="/about" className="text-yellow-800 font-bold hover:underline">About</Link>
          <Link to="/services" className="text-yellow-800 font-bold hover:underline">Services</Link>
          <Link to="/contact" className="text-yellow-800 font-bold hover:underline">Contact</Link>
      </nav>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-yellow-300 p-4 text-center">
        <p className="text-sm">© 2023 My Application. All rights reserved.</p>
      </footer>
      {/* Modal */}
      
    </div>
  );
};

export default Layout;