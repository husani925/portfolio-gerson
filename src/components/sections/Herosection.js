import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Herosection(props) {
  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src="images/gerson.jpg" alt="Bolby" className="perfil mb-4" />

          <h1 className="mb-2 mt-0">Gerson Medina</h1>
          <p>
            {" "}
            <Typed
              strings={[
                "Comunicador Social ",
                "Amante de la Fotografía",
                "Artista Digital",
                "Comunicador Social ",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="https://www.instagram.com/gersonmedina.75/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/gersonmedina97">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.youtube.com/channel/UCAhKQseHBQXqajZRj66sdWw/videos">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contáctame
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
