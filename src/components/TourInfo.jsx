import React, { useState } from "react";
import grid from "../images/Repeat Grid 11.png";
import carouselImg1 from "../images/vietnam_foto.png";
import carouselImg2 from "../images/shutterstock_1343264873-750x469.png";
import carouselImg3 from "../images/Vietnam-1400x500-1080x500.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function TourInfo() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="tour__info">
      <div className="tour__info--text">
        <h1 className="tour__info--heading">Mekong Delta Tour,<span className="green">Vietnam</span></h1>
        
        <div className="divider__vertical"></div>
        <div className="grid">
          <img src={grid} alt="" />
        </div>
        <h2 className="tour__info--subheading">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </h2>
        <button className="tour__info--btn">Book Now</button>
      </div>
      

      <div className="slider__content">
        <div className="control__buttons">
        <button className="slider__btn--text" onClick={sliderRef?.slickNext}>
          See more photos
        </button>
        <button className="slider__btn--arrow" onClick={sliderRef?.slickNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
        <Slider ref={setSliderRef} {...sliderSettings}>
          <div>
            <img className="slide" src={carouselImg1} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg2} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg3} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg1} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg2} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg3} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg1} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg2} alt="" />
          </div>
          <div>
            <img className="slide" src={carouselImg3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TourInfo;
