import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Product from '../../components/Product'
import Filtros from '../../components/Filtros'
import Whatsapp from '../../components/Whatsapp'
import { setUnit } from '@/features/currentUnitSlice'
import Herosection from '../../components/Hero/Herosection'
import { useDispatch } from 'react-redux'
import { reqGetUnitsByEcommerce } from '@/api/requests'
import './Ecommerce.scss'

const Ecommerce = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const loadUserCompanies = async () => {
      try {
        const response = await reqGetUnitsByEcommerce()
        dispatch(setUnit(response.data))
      } catch (error) {
        console.error('Error fetching business units:', error)
      }
    }
    loadUserCompanies()
  }, [])

  return (
    <div className='w-full overflow-x-clip'>
      <Navbar />
      <Herosection />
      <div className='px-5 ssm:px-10'>
        <Filtros />
        <Product />
        <Whatsapp />
      </div>
      <Footer />
    </div>
  )
}

export default Ecommerce
