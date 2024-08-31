import React from "react";
import "./Herosection.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setFilteredProducts, setSearchQuery, setProducts } from "@/features/products";
import ProductsDefault from './product.json';

const Herosection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.data);
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery);

  React.useEffect(() => {
    dispatch(setProducts(ProductsDefault));
  }, [dispatch]);

  const handleSearch = (e:any) => {
    e.preventDefault()
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch(setFilteredProducts(filteredProducts));
  };

  const handleInputChange = (e:any) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="hero__main-section mb-4">
      <div className="bg-c-primary-variant-1 h-[45vh] bg-cover bg-center bg-[url('https://cdn.discordapp.com/attachments/1277840522047656119/1278154370726367242/header.png?ex=66cfc584&is=66ce7404&hm=79ecfb9255679933bba922db0a5a626a72f6469fb83eeb3a175ff433c50fdd94&')] w-full flex flex-col justify-center items-center gap-5">
        <div className="title__section-hero flex flex-col justify-center items-center ">
          <div className="title__hero flex text-[2em] text-[white] font-[600] ">
            TecnoPyme
          </div>
          <div className="description__hero text-[20px] text-gray-100">
            Tecnología de vanguardia
          </div>
        </div>
        <form onSubmit={handleSearch} className="w-[90%] input__section-hero max-w-[600px] sm:w-full h-[50px] sm:h-[60px] bg-white rounded-md flex shadow-2xl">
          <div className="search__input-hero h-full flex-grow">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleInputChange}
              className="h-full text-[16px] w-full p-3 sm:px-5 outline-none rounded-lg text-gray-600"
            />
          </div>
          <div className="action__box-hero w-[100px] p-2 sm:w-[150px] flex justify-center items-center gap-3 sm:p-3 border-l-2">
            <button type="submit" className="bg-c-primary-variant-1 h-full w-full text-white font-[500] rounded-lg hover:bg-c-primary-variant-2 transition duration-300">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Herosection;
