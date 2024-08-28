import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const index = () => {
  const filters = [
    {
      name: 'Most recent',
      active: true,
    },
    {
      name: 'Lowest price',
      active: false,
    },
    {
      name: 'Higuest price',
      active: false,
    },
  ]

  return (
    <div className="flex justify-between my-5 py-5 border-b border-b-gray-200">
      <div className="flex">
        <span className="pr-5 h-[35px] border-r border-r-gray-200 flex items-center text-gray-500">32 of 32 products</span>
        <span className="px-5 h-[35px] text-gray-400 flex items-center">Sort by:</span>
        <div className="flex gap-3">
          {
            filters.map((ele, ind) =>
              <span key={ind} className={`px-3 cursor-pointer flex items-center ${ele.active ? 'bg-c-primary-variant-1 hover:bg-c-primary-variant-1' : 'bg-gray-300 hover:bg-c-primary-variant-2'}  transition duration-300 text-white rounded-xl`}>
                {ele.name}
              </span>
            )
          }
        </div>
      </div>
      <div className="flex gap-3">
        <div className="h-[35px] w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] hover:border-gray-500 hover:text-gray-500 rounded-full transition duration-300 flex items-center justify-center">
          <IoIosArrowBack />
        </div>
        <div className="h-[35px] w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] hover:border-gray-500 hover:text-gray-500 rounded-full transition duration-300 flex items-center justify-center">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  )
}

export default index