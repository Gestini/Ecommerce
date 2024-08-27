import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Product from '../../components/Product'
import Whatsapp from '../../components/Whatsapp'
import './Ecommerce.scss'

const Hero = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Product />
      <Whatsapp />
      <Footer />
    </>
  )
}

export default Hero