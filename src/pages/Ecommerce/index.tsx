import Filtros from "../../components/Filtros";
import Footer from "../../components/Footer";
import Herosection from "../../components/Hero/Herosection";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Whatsapp from "../../components/Whatsapp";
import "./Ecommerce.scss";

const Ecommerce = () => {
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
