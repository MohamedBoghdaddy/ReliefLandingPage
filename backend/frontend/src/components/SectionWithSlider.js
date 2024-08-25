import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./styles/slider.css";

// Import the images
import img1 from "./assets/images/1مشاريع صغيره.jpg";
import img2 from "./assets/images/اعمار اتنين.jpg";
import img3 from "./assets/images/اعمار واحد.jpg";
import img4 from "./assets/images/شاريع صغيره 2.jpg";
import img5 from "./assets/images/شاريع صغيره 3.jpg";
import img6 from "./assets/images/شاريع صغيره 4.jpg";
import img7 from "./assets/images/شاريع صغيره 5.jpg";
import img8 from "./assets/images/غزة 2.jpg";
import img9 from "./assets/images/غزة.jpg";

const SectionWithSlider = ({ images, title }) => {
  const navigate = useNavigate();

  const productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleDonateNow = () => {
    navigate("/donate");
  };

  return (
    <Container className="Section4">
      <h2>{title}</h2>
      <Slider {...productSliderOptions}>
        {images.map((image, index) => (
          <div key={index} className="card-container">
            <Card className="custom-card">
              <Card.Img variant="top" src={image} className="slider-image" />
              <Card.Body>
                <Card.Title>Project {index + 1}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the project title and make
                  up the bulk of the project's content.
                </Card.Text>
                <Button variant="dark" onClick={handleDonateNow}>
                  Donate Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};


const CallToActionSections = () => {
  return (
    <>
      <SectionWithSlider
        title="Small Projects"
        images={[img1, img4, img5, img6, img7]}
      />
      <SectionWithSlider
        title="Reconstruction"
        images={[img2, img3, img8, img9]}
      />
      <SectionWithSlider title="Support Gaza" images={[img8, img9]} />
    </>
  );
};

export default CallToActionSections;