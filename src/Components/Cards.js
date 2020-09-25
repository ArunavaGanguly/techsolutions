import React from "react";
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="block card">
          <img
            src={props.imgsrc}
            className="card_image card-img-top"
            alt={props.imgsrc}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.des}</p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
