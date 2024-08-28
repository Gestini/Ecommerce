import Categories from "../../components/Categories";
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
      <Product />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Ecommerce;
