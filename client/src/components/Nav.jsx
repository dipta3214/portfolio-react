import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <nav>
      <Link to="./index.html" className="home">
        &lt;Abidur/&gt;
      </Link>
      <div className="other-navs">
        <Link to="./about.html">About</Link>
        <Link to="#">Projects</Link>
        <Link to="#">Contact</Link>
      </div>
    </nav>
  );
}
