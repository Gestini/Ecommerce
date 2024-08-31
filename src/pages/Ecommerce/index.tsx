import { setUnit } from '@/features/currentUnitSlice'; // Asegúrate de que esta ruta sea correcta
import { Unit } from '@/types/Unit';
import React from 'react';
import { useDispatch } from 'react-redux';
import Filtros from '../../components/Filtros';
import Footer from '../../components/Footer';
import Herosection from '../../components/Hero/Herosection';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';
import Whatsapp from '../../components/Whatsapp';
import './Ecommerce.scss';

interface EcommerceProps {
  unit: Unit;
}

const Ecommerce: React.FC<EcommerceProps> = ({ unit }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUnit(unit));
  }, []);

  return (
    <div className="w-full overflow-x-clip">
      <Navbar />
      <Herosection />
      <div className="px-5 ssm:px-10">
        <Filtros />
        <Product />
        <Whatsapp />
      </div>
      <Footer />
    </div>
  );
};

export default Ecommerce;
