import React, { useState, useEffect } from 'react';
import strawhatBg from '../assets/strawhat.jpg';
import dragonballBg from '../assets/dbs_bg.jpg';
import narutoBg from '../assets/naruto.jpg';
import monkeyDLuffy from '../assets/Gear5.png';
import kakarot from '../assets/Kakarot.png';
import naruto from '../assets/NarutoShippuden.png';

const animeDetails = [
  {
    name: 'MONKEY D LUFFY',
    bgImage: strawhatBg,
    image: monkeyDLuffy,
    bgColor: 'bg-white',
    glowClass: 'shadow-white-glow',
    link: 'https://example.com/luffy', // Add link
    title: 'One Piece',
    desc: ''
  },
  {
    name: 'KAKAROT - GOKU',
    bgImage: dragonballBg,
    image: kakarot,
    bgColor: 'bg-cyan-400',
    glowClass: 'shadow-blue-glow',
    link: 'https://example.com/goku', // Add link
    title: 'Dragon Ball Super',
    desc: ''
  },
  {
    name: 'UZUMAKI NARUTO',
    bgImage: narutoBg,
    image: naruto,
    bgColor: 'bg-orange-400',
    glowClass: 'shadow-orange-glow',
    link: 'https://example.com/naruto', // Add link
    title: 'Naruto Shippuden',
    desc: ''
  },
];

const AnimeMainCard: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animeDetails.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="anime-main-card w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${animeDetails[currentImageIndex].bgImage})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`h-2/3 w-1/3 ${animeDetails[currentImageIndex].bgColor} rounded-full ${animeDetails[currentImageIndex].glowClass}`} />
        <div className='absolute bg-transparent large-text hollow-text text-transparent z-10'>{animeDetails[currentImageIndex].name}</div>
        <div className='absolute bg-transparent large-text hollow-text z-1 text-white'>{animeDetails[currentImageIndex].name}</div>
        <div className='absolute h-auto w-96 border-l-4 border-red-500 z-20 bottom-16 left-28 pl-4'>
          <h3>{animeDetails[currentImageIndex].title}</h3>
          <p> {animeDetails[currentImageIndex].desc}</p>
        </div>
        <div
          className='absolute z-5'
          style={{
            transform: animeDetails[currentImageIndex].name === 'UZUMAKI NARUTO' ? 'scale(1.2)' : animeDetails[currentImageIndex].name === 'KAKAROT - GOKU' ? 'scale(0.9)' : 'scale(1)',
          }}
        >
          <img
            src={animeDetails[currentImageIndex].image}
            className='bg-transparent brightness-90'
            alt={animeDetails[currentImageIndex].name}
          />
        </div>
      </div>
      <a href={animeDetails[currentImageIndex].link} target="_blank" rel="noopener noreferrer"
        className="absolute top-3/4 right-56 w-auto h-12 flex items-center justify-center bg-transparent text-white text-xl font-bold hover:bg-opacity-15 hover:bg-white  transition border border-2 border-white rounded-full px-4"
      >Watch Now</a>
    </div>
  );
};

export default AnimeMainCard;

