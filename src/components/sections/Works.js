import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Todos",
  },
  {
    id: 2,
    text: "Fotografía",
  },
  {
    id: 3,
    text: "Vídeo",
  },
  {
    id: 4,
    text: "Diseño gráfico",
  },
];

const allData = [
  {
    id: 1,
    title: "Raymillacta",
    category: "fotografia",
    image: "images/works/fotografia/raymillacta.jpg",
    popupLink: [
      "images/works/fotografia/raymillacta.jpg",
      "images/works/fotografia/raymillacta2.jpg",
    ],
  },
  {
    id: 2,
    title: "Gente de mi Tierra",
    category: "fotografia",
    image: "images/works/fotografia/gentedemitierra2.jpg",
    popupLink: [
      "images/works/fotografia/gentedemitierra1.jpg",
      "images/works/fotografia/gentedemitierra2.jpg",
      "images/works/fotografia/gentedemitierra3.jpg",
      "images/works/fotografia/gentedemitierra4.jpg",
      "images/works/fotografia/gentedemitierra5.jpg",
      "images/works/fotografia/hiladora.jpg",
    ],
  },
  {
    id: 3,
    title: "Catarata de Gocta",
    category: "fotografia",
    image: "images/works/fotografia/gocta.jpg",
    popupLink: ["images/works/fotografia/gocta.jpg"],
  },
  {
    id: 4,
    title: "Museo Leymebamba",
    category: "fotografia",
    image: "images/works/fotografia/museoleyme.jpg",
    popupLink: ["images/works/fotografia/museoleyme.jpg"],
  },
  {
    id: 5,
    title: "Danzas y Caballos",
    category: "fotografia",
    image: "images/works/fotografia/danzasycaballos.jpg",
    popupLink: ["images/works/fotografia/danzasycaballos.jpg"],
  },
  {
    id: 6,
    title: "Huancas",
    category: "fotografia",
    image: "images/works/fotografia/distritohuancas.jpg",
    popupLink: [
      "images/works/fotografia/distritohuancas.jpg",
      "images/works/fotografia/huancassonche.jpg",
    ],
  },
  {
    id: 7,
    title: "Cavernas Luya",
    category: "fotografia",
    image: "images/works/fotografia/cavernasluya1.jpg",
    popupLink: [
      "images/works/fotografia/cavernasluya1.jpg",
      "images/works/fotografia/cavernasluya2.jpg",
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
