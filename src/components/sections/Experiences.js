import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Comunicador Social",
    years: "2015 - 2019",
    content: "Universidad Nacional Toribio Rodríguez de Mendoza de Amazonas",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Diseñador Gráfico - CITE UTCUBAMBA ",
    years: "2021 - Presente",
    content: "Manejo avanzado de Corel Draw, Match3, ArtCAM y Wilcom",
  },
  {
    id: 2,
    title: "Asesor de márketing - PLUS DENT",
    years: "2020",
    content:
      "Elaboración de planes de márketing y administración de redes sociales, para la empresa Plus Dent.",
  },
  {
    id: 3,
    title: "Editor de contenidos - AMAZONAS CON GUSTO",
    years: "2019 - Presente",
    content:
      "Administración de redes sociales, diseño gráfico y redacción de notas de prensa.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experiencia" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
