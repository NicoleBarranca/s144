import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  // const slides = []
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
            It should make you feel like royalty!<br></br>Click the button below
            to schedule a consultation with Liz.
          </p>
          <Link to="/contact">
            <button className="btnOne">Schedule</button>
          </Link>
        </div>
      </div>
    </div>

    {/* <ImageSlider slides={slides}/> */}
    </>
}

export default Homepage;
