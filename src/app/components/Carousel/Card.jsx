import React from "react";

function Card({ text, img }) {
  return (
    <div className="w-96 mx-auto">
      <div className="card glass bg-purple-400">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{text}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
