import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";

const priceboxData = [
  {
    id: 1,
    title: "Contenido Audiovisual",
    icon: "images/price-1.svg",
    content: [
      {
        id: 0,
        text: "Una opción simple pero poderosa para administrar su negocio",
      },
      {
        id: 2,
        text: "Desde",
      },
    ],
    price: 99,
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "Publicidad Online",
    icon: "images/price-2.svg",
    content: [
      {
        id: 1,
        text: "Una opción simple pero poderosa para administrar su negocio",
      },
      {
        id: 2,
        text: "Desde",
      },
    ],
    price: 89,
    best: true,
    badge: "Popular",
  },
  {
    id: 3,
    title: "Branding",
    icon: "images/price-3.svg",
    content: [
      {
        id: 1,
        text: "Una opción simple pero poderosa para administrar su negocio",
      },
      { id: 2, text: "Desde" },
    ],
    price: 99,
    best: false,
    badge: false,
  },
];

function Pricing() {
  return (
    <section id="prices">
      <div className="container">
        <Pagetitle title="Precios" />
        <div className="row align-items-center">
          {priceboxData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <Pricebox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
