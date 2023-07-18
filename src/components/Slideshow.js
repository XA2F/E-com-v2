import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  // State variable to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide data
  const slides = [
    {
      image: '/images/all-in-fit.avif',
      title: 'Welcome to Our Store',
      description: 'Discover the latest trends and fashion styles.',
    },
    {
      image: '/images/three-girls.avif',
      title: 'Shop the Best Deals',
      description: 'Save big on your favorite clothing and accessories.',
    },
    {
      image: '/images/three-peeps.avif',
      title: 'Get Inspired with Our Collections',
      description: 'Find the perfect outfit for any occasion.',
    },
  ];

  useEffect(() => {
    // Automatic slide transition every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`} //add the active class for the current slide
          style={{ backgroundImage: `url(${slide.image})` }} //this would just target the background image of the slides
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

//render the slide title and render slide description.

export default Slideshow;
