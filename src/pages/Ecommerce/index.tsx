import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Product from '../../components/Product'
import Whatsapp from '../../components/Whatsapp'

const Hero = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Product />
      <Whatsapp />
      <Footer />
    </div>
  )
}

export default Hero