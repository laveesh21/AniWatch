import React, { useState, useEffect } from 'react';

import strawhatBg from '../assets/strawhat.jpg'
import dragonballBg from '../assets/dbs_bg.jpg'
import narutoBg from '../assets/naruto.jpg'


// Array of image URLs
const images = [strawhatBg, dragonballBg, narutoBg];

const AnimeMainCard: React.FC = () => {
  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use effect to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="anime-main-card w-full h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={nextImage}
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Next Image
        </button>
      </div>
    </div>
  );
};

export default AnimeMainCard;

