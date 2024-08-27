import { Routes, Route } from 'react-router-dom'
import Preview from '../pages/Preview'
import Ecommerce from '../pages/Ecommerce'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Ecommerce />} />
            <Route path='/dashboard' element={<Preview />} />
        </Routes >
    )
}

export default Router
