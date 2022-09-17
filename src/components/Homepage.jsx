import React from "react";
import { Link } from "react-router-dom";
import One from "../img/brideIG/One.png";
import Two from "../img/brideIG/Two.png";
import Three from "../img/brideIG/Three.png";
import Four from "../img/brideIG/Four.png";
import Five from "../img/brideIG/Five.png";
import ImageSlider from "./ImageSlider";

function Homepage() {
  const slides = [
    {
      slide: One,
      title: "Blank Couple, 2020",
    },
    {
      slide: Two,
      title: "Blank Couple, 2020",
    },
    {
      slide: Three,
      title: "Blank Couple, 2020",
    },
    {
      slide: Four,
      title: "Blank Couple, 2020",
    },
    {
      slide: Five,
      title: "Blank Couple, 2020",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="heroBlock">
          <h1>Your hair is your crown</h1>
          {/* <p className="heroSub">It should make you feel like royalty!</p>

        <p className="heroSub"> Click the button below</p>
        <p className="heroSub">to schedule a consultation with Liz.</p> */}
          <div className="heroSub">
            {" "}
            <p>
              It should make you feel like royalty!<br></br>Click the button
              below to schedule a consultation with Liz.
            </p>
            <Link to="/contact">
              <button className="btnOne">Schedule</button>
            </Link>
          </div>
        </div>
      </div>

      <ImageSlider slides={slides} />
    </>
  );
}

export default Homepage;
