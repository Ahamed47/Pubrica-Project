import Carousel from "react-bootstrap/Carousel";
import firstSlideImage from "./images/image.jpeg";
import secondSlideImage from "./images/image1.png";
import thirdSlideImage from "./images/image2.png";

import "./header.css";

const Slides = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstSlideImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="navcolor">
            Quality of Publications 100% quality assurance at every stage
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondSlideImage}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdSlideImage}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;
