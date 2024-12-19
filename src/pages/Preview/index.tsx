import Ecommerce from '../Ecommerce'

const index = () => {
  return (
    <>
      <div className='w-full flex flex-col gap-5 items-center p-10'>
        <h4 className='text-[30px] font-semibold text-green-500'>Visualización de pagina</h4>
        <div className='w-[600px] h-screen shadow-2xl relative overflow-y-auto overflow-x-hidden resize'>
          <Ecommerce />
        </div>
      </div>
    </>
  )
}

export default index
