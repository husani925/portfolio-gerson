import React from "react";

function Pricebox({ priceboxItem }) {
  const { icon, title, content, price, badge, best } = priceboxItem;
  return (
    <div
      className={
        best
          ? "price-item bg-white rounded shadow-dark text-center best"
          : "price-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      <img src={icon} alt="Regular" />
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id}>{singleContent.text}</p>
      ))}
      <h3 className="price">
        <em>S/</em>
        {price}
        <span>Proyecto</span>
      </h3>
      <a href="!#" className="btn btn-default">
        Contratar
      </a>
    </div>
  );
}

export default Pricebox;
