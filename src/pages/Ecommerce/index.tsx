import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Herosection from "../../components/Hero/Herosection";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Whatsapp from "../../components/Whatsapp";
import "./Ecommerce.scss";

const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Categories />
      <Product />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Ecommerce;
