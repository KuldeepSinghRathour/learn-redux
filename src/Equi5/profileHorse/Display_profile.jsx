import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import "./Display_Profile.css";
import Avatar from "../../assets/horse1.jpeg";

const Display_profile = (props) => {
  return (
    <Carousel
      showThumbs={false} // Hides the thumbnail navigation
      showIndicators={false} // Hides the slide indicators
      infiniteLoop={true} // Enables infinite loop of slides
      autoPlay={true} // Automatically advances the slides
      interval={5000} // Interval between slides (in milliseconds)
    >
      {/* <div>
        <img src={Avatar} />
        <p className="legend">Legend 1</p>
      </div> */}
      {props.imgSrc.map((item,index) => {
        return(
        <div key={index}>
        <img
          src={item.imgSrc}
          alt="Slide 2"
        />
      </div>
        )
      })}
        {/* <p className="legend">Legend 2</p> */}
      {/* <div>
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0fbjeuMrvKpCumBE1_Y6SA.jpeg"
          alt="Slide 3"
        />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  );
};

// ReactDOM.render(<Display_profile />, document.querySelector('.demo-carousel'));
export default Display_profile;
