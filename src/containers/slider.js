import React from "react";
import { Carousel } from "react-bootstrap";
import "./css/slider.css";
//import {slider1} from'../../public/images/header/1.jpg'

const Slider = () => {
  return (
    <div className="firstCarousel">
      <Carousel >
        <Carousel.Item   interval={5000}>
            <img
              className="d-block w-100 sliderimg "
              src="https://demo.createdbycocoon.com/moodle/edumy/10/pluginfile.php/452/block_cocoon_slider_5/slides/1/1.jpg"
              alt="First slide"
            />
          
          <Carousel.Caption style={{ bottom: "100px" }}>
            <h1  className="title-h1">   <span> MSAR </span> <br/> Learning </h1>
            {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={2000}>
          <img
            className="d-block w-100 sliderimg"
            src="https://demo.createdbycocoon.com/moodle/edumy/10/pluginfile.php/452/block_cocoon_slider_5/slides/2/4.jpg"
            alt="Second slide"
            style={{}}
          />
          <Carousel.Caption className="Carousel" style={{ bottom: "100px" }}>
            <h1  className="title-h1" >   
              <span> MSAR </span> <br /> Learning
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderimg"
            src="https://demo.createdbycocoon.com/moodle/edumy/6/pluginfile.php/371/block_cocoon_slider_2/slides/1/h1.jpg"
            alt="Third slide"
          />
         <Carousel.Caption className="Carousel" style={{ bottom: "100px" }}>
            <h1 className="title-h1">         
              <span> MSAR </span> <br /> Learning
            </h1>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;