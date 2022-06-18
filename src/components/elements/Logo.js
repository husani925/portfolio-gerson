import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        {/*<img src={logoSource} alt="Gerson Medina" />*/}
        <h3>GERSON MEDINA</h3>
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        {/* <img src={logoSource} alt="Gerson Medina" />*/}
        <h3>GERSON MEDINA</h3>
      </Link>
    </div>
  );
}

export default Logo;
