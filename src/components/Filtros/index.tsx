import { applyFilter, setCurrentPage } from '@/features/products';
import { RootState } from '@/store';
import React, { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { MdTune } from 'react-icons/md';

const Index = () => {
  const dispatch = useDispatch();
  const { filteredData, currentPage, productsPerPage, totalPage, activeFilter } = useSelector((state: RootState) => state.products);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([activeFilter]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const filters = [
    { name: 'Popular', active: activeFilter === 'Popular' },
    { name: 'Más reciente', active: activeFilter === 'Más reciente' },
    { name: 'Menor precio', active: activeFilter === 'Menor precio' },
    { name: 'Mayor precio', active: activeFilter === 'Mayor precio' },
    { name: 'A-Z', active: activeFilter === 'A-Z' },
  ];

  const handleFilterChange = (nombreFiltro: string) => {
    dispatch(applyFilter(nombreFiltro));
  };

  useEffect(() => {
    dispatch(setCurrentPage(0));
  }, [dispatch]);

  useEffect(() => {
    if (selectedKeys.size > 0) {
      handleFilterChange(Array.from(selectedKeys).join(", "));
    }
  }, [selectedKeys]);

  const handleNextPage = () => {
    if (currentPage < totalPage - 1) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div className="mb-0 pt-0 pb-5 sm:flex justify-between lg:my-5 sm:py-5 lg:border-b border-b-gray-200">
      <div className="flex flex-col items-start sm:gap-2 md:flex-row md:items-center">
        <span className=" sm:h-[35px] text-[14px] flex items-center text-gray-500 md:border-r md:mr-5 sm:pr-5 border-r-gray-200">
          {Math.min(currentPage * productsPerPage + 1, filteredData.length)}-{Math.min((currentPage + 1) * productsPerPage, filteredData.length)} de {filteredData.length} productos
        </span>

        {/* FILTROS NORMALES */}
        <span className="hidden lg:flex pr-5 text-[14px] px-0 h-[35px] text-gray-400 items-center ">Ordenar por:</span>
        <div className="hidden lg:flex gap-2 flex-wrap">
          {
            filters.map((ele, ind) =>
              <span key={ind} onClick={() => handleFilterChange(ele.name)} className={`px-3 cursor-pointer flex items-center text-[14px] ${ele.active ? 'bg-c-primary-variant-1 hover:bg-c-primary-variant-1' : 'bg-gray-300 hover:bg-c-primary-variant-2'}  transition duration-300 text-white rounded-xl`}>
                {ele.name}
              </span>
            )
          }
        </div>

        {/* FILTROS RESPONSIVE */}
        <div className='flex items-center lg:hidden'>
          <span className="mb-2 px-0 h-[35px] text-gray-400 flex items-center lg:pr-5 ">Ordenar por:</span>
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly className='rounded-md bg-transparent w-[30px] h-[30px]'>
                <MdTune className='text-gray-400' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Filtro de productos"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
            >
              {filters.map((ele, ind) => (
                <DropdownItem key={ele.name}>{ele.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="flex justify-between  gap-3">
        <div
          onClick={handlePreviousPage}
          className={`h-[30px] w-[30px] md:h-[35px] md:w-[35px] cursor-pointer border border-gray-300 text-gray-300 text-[14px] ${currentPage === 0 ? 'cursor-not-allowed opacity-50' : 'hover:border-gray-500 hover:text-gray-500'} rounded-full transition duration-300 flex items-center justify-center`}
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={handleNextPage}
          className={`h-[30px] w-[30px] md:h-[35px] md:w-[35px]  cursor-pointer border border-gray-300 text-gray-300 text-[14px] ${currentPage >= totalPage - 1 ? 'cursor-not-allowed opacity-50' : 'hover:border-gray-500 hover:text-gray-500'} rounded-full transition duration-300 flex items-center justify-center`}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div >
  );
};

export default Index;

