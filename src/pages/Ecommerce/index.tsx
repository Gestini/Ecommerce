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
import { reqGetUnitsByEcommerce } from '@/api/requests';


const Ecommerce = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const loadUserCompanies = async () => {
      try {
        const response = await reqGetUnitsByEcommerce();
        dispatch(setUnit(response.data));
      } catch (error) {
        console.error('Error fetching business units:', error);
      }
    };
    loadUserCompanies();
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
