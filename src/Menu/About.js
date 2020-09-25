import React from "react";
import Common from "../Common/Common";
import AImage from "../Images/tech6.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Meet our amazing dev-team"
        imgsrc={AImage}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};
export default About;
