import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "John Doe",
    subtitle: "Diseñador de productos en Dribbble",
    review:
      "Disfruto trabajar con el tema y aprendo mucho. Ustedes hacen que el proceso sea divertido e interesante. ¡Buena suerte! 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "John Doe",
    subtitle: "Diseñador de productos en Dribbble",
    review:
      "Disfruto trabajar con el tema y aprendo mucho. Ustedes hacen que el proceso sea divertido e interesante. ¡Buena suerte! 👍",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "John Doe",
    subtitle: "Diseñador de productos en Dribbble",
    review:
      "Disfruto trabajar con el tema y aprendo mucho. Ustedes hacen que el proceso sea divertido e interesante. ¡Buena suerte! 👍",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clientes & comentarios" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
