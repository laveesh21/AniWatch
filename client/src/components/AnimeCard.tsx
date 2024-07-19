import React from 'react';

interface Anime {
  images: {
    jpg: {
      image_url: string;
    };
  };
  title: string;
  description: string;  // Added description
}

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="w-full h-60 object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-80"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      {/* Content */}
      <div className="p-4 relative z-10">
        <h2 className="text-xl font-semibold mb-2">{anime.title}</h2>
        <p className="text-sm text-gray-300 truncate">{anime.description}</p>
      </div>
      {/* Description hidden */}
      <div className="absolute inset-0 opacity-0">{anime.description}</div>
    </div>
  );
};

export default AnimeCard;

