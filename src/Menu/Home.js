import React from "react";
import HImage from "../Images/tech4.png";
import Common from "../Common/Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={HImage}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};
export default Home;
