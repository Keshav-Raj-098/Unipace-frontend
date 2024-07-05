import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import a from "../../assets/popup/1.png"
import b from "../../assets/popup/2.png"
import c from "../../assets/popup/3.png"
import d from "../../assets/popup/4.png"
import { height } from '@mui/system';
import { useState, useEffect } from 'react';
import './slideshow.css';

const images = [a,b,c,d];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container" style={{width:"100%"}}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt="" style={{ width: '350px',height:"400px",}} />
        </div>
      ))}
    </div>
  );
};


export {Slideshow}