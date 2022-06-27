import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "todos",
  },
  {
    id: 2,
    text: "fotografia",
  },
  {
    id: 3,
    text: "vídeo",
  },
];

const allData = [
  //fotografía
  {
    id: 1,
    title: "Amazonas con Gusto",
    category: "fotografia",
    image: "images/works/fotografia/amazonascongusto/raymillacta.jpg",
    popupLink: [
      "images/works/fotografia/amazonascongusto/raymillacta.jpg",
      "images/works/fotografia/amazonascongusto/raymillacta2.jpg",
      "images/works/fotografia/amazonascongusto/cavernasluya.jpg",
      "images/works/fotografia/amazonascongusto/danzasycaballos.jpg",
      "images/works/fotografia/amazonascongusto/distritohuancas.jpg",
      "images/works/fotografia/amazonascongusto/gentedemitierra1.jpg",
      "images/works/fotografia/amazonascongusto/gentedemitierra2.jpg",
      "images/works/fotografia/amazonascongusto/gentedemitierra3.jpg",
      "images/works/fotografia/amazonascongusto/gentedemitierra4.jpg",
      "images/works/fotografia/amazonascongusto/gentedemitierra5.jpg",
      "images/works/fotografia/amazonascongusto/gocta.jpg",
      "images/works/fotografia/amazonascongusto/hiladora.jpg",
      "images/works/fotografia/amazonascongusto/huancassonche.jpg",
      "images/works/fotografia/amazonascongusto/museoleyme.jpg",
      "images/works/fotografia/amazonascongusto/trajeutcubamba.jpg",
    ],
  },
  {
    id: 2,
    title: "Sesiones Fotográficas",
    category: "fotografia",
    image: "images/works/fotografia/sesionesfotograficas/michel.jpg",
    popupLink: [
      "images/works/fotografia/sesionesfotograficas/michel.jpg",
      "images/works/fotografia/sesionesfotograficas/1añitomaxvy.jpg",
      "images/works/fotografia/sesionesfotograficas/1añitomia.jpg",
      "images/works/fotografia/sesionesfotograficas/1añitosantiago.jpg",
      "images/works/fotografia/sesionesfotograficas/15primaverasangie.jpg",
      "images/works/fotografia/sesionesfotograficas/15primaveraslinda2.jpg",
      "images/works/fotografia/sesionesfotograficas/ajedrez.jpg",
      "images/works/fotografia/sesionesfotograficas/bebe.jpg",
      "images/works/fotografia/sesionesfotograficas/dulceespera1.jpg",
      "images/works/fotografia/sesionesfotograficas/dulceespera2.jpg",
      "images/works/fotografia/sesionesfotograficas/dulceespera3.jpg",
      "images/works/fotografia/sesionesfotograficas/familia.jpg",
      "images/works/fotografia/sesionesfotograficas/fiestapromo.jpg",
      "images/works/fotografia/sesionesfotograficas/individual.jpg",
      "images/works/fotografia/sesionesfotograficas/jinkai-enentai.jpg",
      "images/works/fotografia/sesionesfotograficas/pareja.jpg",
      "images/works/fotografia/sesionesfotograficas/reciennacido.jpg",
      "images/works/fotografia/sesionesfotograficas/retrato.jpg",
      "images/works/fotografia/sesionesfotograficas/sanvalentin.jpg",
    ],
  },

  {
    id: 3,
    title: "Naturaleza",
    category: "fotografia",
    image: "images/works/fotografia/naturaleza/catarataazufradapedroruiz.jpg",
    popupLink: [
      "images/works/fotografia/naturaleza/catarataazufradapedroruiz.jpg",
      "images/works/fotografia/naturaleza/avesdemar.jpg",
      "images/works/fotografia/naturaleza/caracoles.jpg",
      "images/works/fotografia/naturaleza/cerrolatorita.jpg",
      "images/works/fotografia/naturaleza/flores.jpg",
      "images/works/fotografia/naturaleza/gocta.jpg",
      "images/works/fotografia/naturaleza/luna.jpg",
      "images/works/fotografia/naturaleza/miradorhuancaurco.jpg",
      "images/works/fotografia/naturaleza/riomarañon.jpg",
    ],
  },
  //videos
  {
    id: 4,
    title: "DafiModa",
    category: "vídeo",
    image: "images/works/video/dafimoda.png",
    popupLink: [
      "https://www.youtube.com/watch?v=Z7p3hFf1kQU&ab_channel=GersonMedina",
    ],
  },

  {
    id: 5,
    title: "Noche de Bares",
    category: "vídeo",
    image: "images/works/video/nochedebares.png",
    popupLink: [
      "https://www.youtube.com/watch?v=Mm1bT14rp9E&ab_channel=AMAZONASCONGUSTO",
    ],
  },
  {
    id: 6,
    title: "Amazonas",
    category: "vídeo",
    image: "images/works/video/amazonas.png",
    popupLink: [
      "https://www.youtube.com/watch?v=fD8T71-czVw&ab_channel=GersonMedina",
    ],
  },
  {
    id: 7,
    title: "Manos Alfareras",
    category: "vídeo",
    image: "images/works/video/manosalfareras.png",
    popupLink: [
      "https://www.youtube.com/watch?v=imDxoCcj1jE&ab_channel=AMAZONASCONGUSTO",
    ],
  },

  {
    id: 8,
    title: "Relatos de Bonisho",
    category: "vídeo",
    image: "images/works/video/relatosdebonicho.png",
    popupLink: [
      "https://www.youtube.com/watch?v=poWTtiDSSb0&ab_channel=AMAZONASCONGUSTO",
    ],
  },

  {
    id: 9,
    title: "Jinkai Enentai",
    category: "vídeo",
    image: "images/works/video/jinkai-enentai.jpg",
    popupLink: [
      "https://www.youtube.com/watch?v=jpmGezlE9UY&ab_channel=GersonMedina",
    ],
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Trabajos Recientes" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No hay más trabajos"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Ver más
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
