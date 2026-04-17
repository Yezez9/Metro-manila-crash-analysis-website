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

    </nav>
  );
}
