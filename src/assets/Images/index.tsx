import React from 'react';

interface ImagenesProps {
  src: string;
  alt: string;
  className?: any;
}

const defaultImages: { [key: string]: string } = {
  herosection: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/HeroSection/HeroImage.png',
  UnitTypeImage1: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/unitType/UnitTypeImage1',
  UnitTypeImage2: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/unitType/UnitTypeImage2',
  UnitTypeImage3: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/unitType/UnitTypeImage3',
  supplier1:'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/HeroSection/Microsoft.png',
  supplier2:'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/HeroSection/Amazon.png',
  supplier3:'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/HeroSection/GCloud.png',
  supplier4:'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/HeroSection/Meli.png',
  herosectionlogo: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/HeroSection/Gestinii.png'
};

const Imagenes: React.FC<ImagenesProps> = ({ src, alt, className }) => {
  const imageSrc = defaultImages[src] || src;

  return (
    <img 
      src={imageSrc} 
      alt={alt || 'Imagen'}
      className={className || ''} 
    />
  );
};

export default Imagenes;
