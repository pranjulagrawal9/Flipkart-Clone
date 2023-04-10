import React from "react";

function SuggestionProductCard({productCardImage, productHeading, fromPrice, subHeading}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productCardImage} alt={productHeading} />
      </div>
      <h3 className="product-heading">{productHeading}</h3>
      <div className="from-price">{fromPrice}</div>
      <div className="sub-heading">{subHeading}</div>
    </div>
  );
}

export default SuggestionProductCard;
