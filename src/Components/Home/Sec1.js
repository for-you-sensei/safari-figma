import React from "react";
import "../Styles/Home/Sec1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from "../Assets/Images/Home/girl.png";
import logo from "../Assets/Images/Home/logo2.png";
import btnArrow from "../Assets/Icons/Home/Sec-1/arrow.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
      id="arrow1"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
      id="arrow2"
    />
  );
}

export function Sec1() {
  const data = [
    {
      id: 0,
      img: girl,
      text: logo,
    },
    {
      id: 1,
      img: girl,
      text: logo,
    },
    {
      id: 2,
      img: girl,
      text: logo,
    },
    {
      id: 3,
      img: girl,
      text: logo,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "unset",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div id="dots"></div>,
  };

  return (
    <div id="sec-1">
      <Slider {...settings} className="slider">
        {data.map((item, index) => {
          return (
            <div key={index} id="problem">
              <div id="s1-card">
                <div id="s1-c-img-1">
                  <img src={item.img} alt="" />
                </div>
                <div id="s1-c-img-2">
                  <img src={item.text} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <div id="s1-explore">
        <p>Explore our collection</p>
        <img src={btnArrow} alt="" />
      </div>
    </div>
  );
}
