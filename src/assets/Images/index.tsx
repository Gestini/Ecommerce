import React from 'react';
import Model1 from '@/assets/Models/Model1.png'
import Model2 from '@/assets/Models/Model2.png'
import Model3 from '@/assets/Models/Model3.png'
import Supplier1 from '@/assets/Suppliers/supplier1.png'
import Supplier2 from '@/assets/Suppliers/supplier2.png'
import Supplier3 from '@/assets/Suppliers/supplier3.png'
import Supplier4 from '@/assets/Suppliers/supplier4.png'
import Supplier5 from '@/assets/Suppliers/supplier5.png'
import Supplier6 from '@/assets/Suppliers/supplier6.png'
import Supplier7 from '@/assets/Suppliers/supplier7.png'

interface ImagenesProps {
  src: string;
  alt: string;
  className?: any;
}

const defaultImages: { [key: string]: string } = {
  herosection: 'https://gestini.nyc3.cdn.digitaloceanspaces.com/UTILS/Landing/HeroSection/HeroImage.png',
  UnitTypeImage1: Model1,
  UnitTypeImage2: Model2,
  UnitTypeImage3: Model3,
  supplier1: Supplier1,
  supplier2: Supplier2,
  supplier3: Supplier3,
  supplier4: Supplier4,
  supplier5: Supplier5,
  supplier6: Supplier6,
  supplier7: Supplier7,
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
