import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {

  const location = useLocation();

  return (
    <nav id="nav">
    <Link to={'/Portfolio/'} className={location.pathname === '/Portfolio/' ? 'active' : ''} title="Main">
      <button className={location.pathname === '/Portfolio/' ? 'active' : ''}>
        <img className="house" src="/Portfolio/house-solid.svg" alt="House"/>
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
    <Link to={'/Portfolio/websoftware'} className={location.pathname === '/Portfolio/websoftware' ? 'active' : ''} title="Web & Software Artifacts">
      <button className={location.pathname === '/Portfolio/websoftware' ? 'active' : ''}>
        <img className="code" src="/Portfolio/code-solid.svg" alt="Code Bracket"/>
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
    <Link to={'/Portfolio/gamedev'} className={location.pathname === '/Portfolio/gamedev' ? 'active' : ''} title="Game Dev Artifacts">
      <button className={location.pathname === '/Portfolio/gamedev' ? 'active' : ''}>
        <img className="game-pad" src="/Portfolio/gamepad-solid.svg" alt="Gamepad" />
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
    <Link to={'/Portfolio/3d'} className={location.pathname === '/Portfolio/3d' ? 'active' : ''} title="3D Artifacts">
      <button className={location.pathname === '/Portfolio/3d' ? 'active' : ''}>
        <img className="cube" src="/Portfolio/cube-solid.svg" alt="Cube" />
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
    <Link to={'/Portfolio/3d'} className={location.pathname === '/Portfolio/3d' ? 'active' : ''} title="Music Artifacts">
      <button className={location.pathname === '/Portfolio/3d' ? 'active' : ''}>
        <img className="cube" src="/Portfolio/music-solid.svg" alt="Music Notes" />
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
    <Link to={'/Portfolio/join'} className={location.pathname === '/Portfolio/join' ? 'active' : ''} title="Join me">
      <button className={location.pathname === '/Portfolio/join' ? 'active' : ''}>
        <img className="door-open" src="/Portfolio/door-open-solid.svg" alt="Door Open"/>
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
  </nav>
  );
}
