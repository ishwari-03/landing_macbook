import React from 'react';
import { navLinks } from '../constants';

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" className="logo" />

        {/* Labels */}
        <ul className="nav-links">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={`/${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex-center gap-3 icons">
          <button>
            <img src="/search.svg" alt="Search" className="icon" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" className="icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
