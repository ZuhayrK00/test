import React from "react";

const Card = ({ title, description, img }) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl image-full"> {/* Decreased width to w-64 */}
      <figure>
        <img src={img} alt={title} className="w-full h-auto" /> {/* Adjusted width and maintained aspect ratio */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
