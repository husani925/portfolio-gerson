import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img width={100} src={logoSource} alt="Gerson Medina" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img width={100} src={logoSource} alt="Gerson Medina" />
      </Link>
    </div>
  );
}

export default Logo;
