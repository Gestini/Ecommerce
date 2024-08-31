import { reqGetUnitsByEcommerce } from '@/api/requests';
import { Unit } from '@/types/Unit';
import React from 'react'

const index = () => {

    const [companies, setCompanies] = React.useState<Unit[]>([]);

    console.log(companies);
    React.useEffect(() => {
        const loadUserCompanies = async () => {
            try {
                const response = await reqGetUnitsByEcommerce();
                setCompanies(response.data);
            } catch (error) {
                console.error('Error fetching business units:', error);
            }
        };
        loadUserCompanies();
    }, []);

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-20'>
            <h5 className='text-[50px] text-center mb-20'>Nuestros clientes</h5>
            <div className='flex gap-5'>
                {companies.map((shop, index) => (
                    <div className='p-5 border flex flex-col rounded-xl w-[300px] shadow-lg' key={index}>
                        <img className='w-[50px] h-[50px] mb-2' src={shop?.image} alt="" />
                        <div className='flex flex-col gap-2 justify-between flex-grow'>
                            <span><strong>Nombre: </strong>{shop?.name}</span>
                            <p><strong>Descripción: </strong>{shop?.description}</p>
                            <p><strong>Web: </strong>
                                <a href={shop?.link} className='text-blue-500 underline'>
                                    {shop?.link}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index