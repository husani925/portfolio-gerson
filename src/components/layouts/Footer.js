import React from "react";
import { Link } from "react-router-dom";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          <Link
            to={{ pathname: "https://www.humbersanchez.com" }}
            target="_blank"
          >
            &copy; {new Date().getFullYear()} Powered By Humber.
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
