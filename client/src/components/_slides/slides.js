"use client"

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export const Slideshow = ({ className, slides = [] }) => {

  return (
    <Slide
      infinite={true}
      autoplay={true}
      duration={5000}
      transitionDuration={850}
      defaultIndex={0}
      className={`fixed inset-0 z-[-10] w-[100vw] ${className}`}
    >
      {slides.map((src, index) => (
        <div className="each-slide h-[100vh] w-[100vw]" key={index}>
          <img 
            src={src.imageUrl} 
            alt={`slide-${index}`} 
            className='w-[100vw] h-full object-cover'
            draggable="false"
            onMouseDown={(e) => e.preventDefault()}
          />
        </div>
      ))}
    </Slide>
  );
};