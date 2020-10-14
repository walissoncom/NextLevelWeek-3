import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Choose an orphanage on the map</h2>
          <p>Many kids are waiting your visit :)</p>
        </header>

        <footer>
          <strong>Sydney</strong>
          <span>NSW</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
