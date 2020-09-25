import React from "react";
import Cards from "../Components/Cards";
import Sdata from "../Components/Sdata";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return (
                    <Cards
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      des={val.des}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
