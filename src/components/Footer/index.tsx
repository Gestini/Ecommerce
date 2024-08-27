
const index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="containerBox">
      <div className="containerContent w-full">
        <footer className="bg-white rounded-lg shadow">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://cdn.discordapp.com/attachments/1277840522047656119/1277840553232437320/Capa_4.png?ex=66cea141&is=66cd4fc1&hm=be2057a0b0bae82afac739658e7b7a84147a2903baffdf406191c9a47cb2cad9&" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Gestini</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center ">© {currentYear} <a href="gestini.com" className="hover:underline">Gestini</a>. All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default index