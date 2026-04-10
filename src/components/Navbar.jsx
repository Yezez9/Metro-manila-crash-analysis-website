import { useState } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar" id="navbar">
      <span className="navbar__logo" onClick={() => handleNav('overview')}>
        MMARAS
      </span>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a
            className={activePage === 'overview' ? 'active' : ''}
            onClick={() => handleNav('overview')}
            href="#"
          >
            Overview
          </a>
        </li>
        <li>
          <a
            className={activePage === 'analysis' ? 'active' : ''}
            onClick={() => handleNav('analysis')}
            href="#"
          >
            Analysis &amp; Models
          </a>
        </li>
        <li>
          <a
            className={activePage === 'gis' ? 'active' : ''}
            onClick={() => handleNav('gis')}
            href="#"
          >
            GIS &amp; Policy
          </a>
        </li>
        <li>
          <a
            className={`${activePage === 'chatbot' ? 'active' : ''} nav-ai-link`}
            onClick={() => handleNav('chatbot')}
            href="#"
          >
            🤖 AI Assistant
          </a>
        </li>
      </ul>

      <div className="navbar__icons">
        {/* Search icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        {/* Bell icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        {/* User icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </div>
    </nav>
  );
}
