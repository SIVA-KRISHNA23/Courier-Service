// src/components/BackgroundSlideshow.js

import React, { useState, useEffect } from 'react';

const BackgroundSlideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${images[index]})`, // Adjusted path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundSlideshow;
