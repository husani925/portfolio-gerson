import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Gerson Medina",
  avatarImage: "/images/gersonmedina.jpg",
  content:
    "Me desempeño en las diversas áreas de esta carrera, fotografía, producción audiovisual, relaciones públicas, marketing, diseño gráfico, gestión de redes sociales y más.",
};

const progressData = [
  {
    id: 1,
    title: "Fotografía",
    percantage: 100,
    progressColor: "#4285f4",
  },
  {
    id: 2,
    title: "Producción Audiovisual",
    percantage: 95,
    progressColor: "#4285f4",
  },
  {
    id: 3,
    title: "Diseño Gráfico",
    percantage: 90,
    progressColor: "#4285f4",
  },
];

const counterData = [
  {
    id: 1,
    title: "Proyectos completados",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Clientes satisfechos",
    count: 256,
    icon: "icon-people",
  },
  {
    id: 3,
    title: "Ganador nominado",
    count: 5,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="Sobre mi" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img
                className="perfil-sobremi"
                src={aboutContent.avatarImage}
                alt={aboutContent.name}
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Descargar CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-4 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
