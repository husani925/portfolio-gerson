import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-3.svg",
    title: "Contenido Audiovisual",
    content:
      "Videos corporativos, Fotografía profesional, Producción & postproducción audiovisual",
    color: "#6C6CE5",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Publicidad Online",
    content:
      "Administración de redes sociales, Estrategia de publicidad online, Campañas de márketing",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-1.svg",
    title: "Branding",
    content:
      "Diseño de marca y logotipo, Diseño de identidad corporativa, Brochure y Catálogos",
    color: "#F97B8B",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Servicios" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <h4 className="mb-0">
            ¿Buscas un trabajo personalizado?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              haga clic aquí
            </Link>{" "}
            ¡para contactar conmigo! 👋
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Services;
