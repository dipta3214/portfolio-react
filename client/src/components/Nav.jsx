import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <nav>
      <Link to="/" className="home">
        &lt;Abidur/&gt;
      </Link>
      <div className="other-navs">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="#">Contact</Link>
      </div>
    </nav>
  );
}
