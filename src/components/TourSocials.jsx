import React from 'react'
import mainIMg from "../images/Component 1.png";
import arrowBtn from "../images/Component 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";


function TourSocials() {
  return (
    <div className="tour__socials">
        <figure className="img__wrapper">
          <img className='tour__socials--img' src={mainIMg} />
        </figure>

        <div className="window__info">
          <p className="window__info--para">2 Days</p>
          <div className="window__divider"></div>
          <p className="window__info--price">$166 per person</p>
        </div>

        <div className="social__list">
          <a href="#" className="social__link social__link--hover">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social__link social__link--hover">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <div className="more-trips">
          <a href="" className="more-trips__link">
            <img className="more-trips__wrapper" src={arrowBtn} />
          </a>
          <p className="more-tips__para">More Short Trips</p>
        </div>
      </div>
  )
}

export default TourSocials
