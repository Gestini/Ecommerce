import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerStyle, setFooterStyle] = React.useState(1);

  const FooterData = {
    simpleFooter: [
      {
        name: 'About',
        path: '/'
      },
      {
        name: 'Privacy Policy',
        path: '/'
      },
      {
        name: 'Licensing',
        path: '/'
      },
      {
        name: 'Contact',
        path: '/'
      },
    ],
    footerBySection: [
      {
        title: 'Resources',
        links: [
          { name: 'Flowbite', path: 'https://flowbite.com/' },
          { name: 'Tailwind CSS', path: 'https://tailwindcss.com/' }
        ]
      },
      {
        title: 'Follow us',
        links: [
          { name: 'Github', path: 'https://github.com/themesberg/flowbite' },
          { name: 'Discord', path: 'https://discord.gg/4eeurUVvTy' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', path: '#' },
          { name: 'Terms & Conditions', path: '#' }
        ]
      }
    ],
    footerBySectionBig: [
      {
        title: 'Resources',
        links: [
          { name: 'Flowbite', path: 'https://flowbite.com/' },
          { name: 'Tailwind CSS', path: 'https://tailwindcss.com/' },
          { name: 'Flowbite', path: 'https://flowbite.com/' },
          { name: 'Tailwind CSS', path: 'https://tailwindcss.com/' }
        ]
      },
      {
        title: 'Follow us',
        links: [
          { name: 'Github', path: 'https://github.com/themesberg/flowbite' },
          { name: 'Discord', path: 'https://discord.gg/4eeurUVvTy' },
          { name: 'Github', path: 'https://github.com/themesberg/flowbite' },
          { name: 'Discord', path: 'https://discord.gg/4eeurUVvTy' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', path: '#' },
          { name: 'Terms & Conditions', path: '#' },
          { name: 'Privacy Policy', path: '#' },
          { name: 'Terms & Conditions', path: '#' }
        ]
      },
      {
        title: 'DOWNLOAD',
        links: [
          { name: 'Privacy Policy', path: '#' },
          { name: 'Terms & Conditions', path: '#' },
          { name: 'Privacy Policy', path: '#' },
          { name: 'Terms & Conditions', path: '#' }
        ]
      }
    ],
    social: [
      {
        name: 'Facebook',
        icon: <FaFacebookF className='text-[16px]' />,
        path: '/'
      },
      {
        name: 'Facebook',
        icon: <FaInstagram className='text-[16px]' />,
        path: '/'
      },
      {
        name: 'Facebook',
        icon: <FaLinkedinIn className='text-[16px]' />,
        path: '/'
      },
      {
        name: 'Facebook',
        icon: <FaXTwitter className='text-[16px]' />,
        path: '/'
      },

    ]
  }

  return (
    <>
      {footerStyle === 1 && (
        <footer className="bg-black shadow">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">
              © {currentYear} <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
              {
                FooterData.simpleFooter.map((ele, ind) =>
                  <li key={ind}>
                    <a href={ele.path} className="hover:underline me-4 md:me-6">{ele.name}</a>
                  </li>
                )
              }
            </ul>
          </div>
        </footer>
      )}

      {footerStyle === 2 && (
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
                    {
                      FooterData.simpleFooter.map((ele, ind) =>
                        <li key={ind}>
                          <a href={ele.path} className="hover:underline me-4 md:me-6">{ele.name}</a>
                        </li>
                      )
                    }
                  </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center ">© {currentYear} <a href="gestini.com" className="hover:underline">Gestini</a>. All Rights Reserved.</span>
              </div>
            </footer>
          </div>
        </div>
      )}

      {footerStyle === 3 && (
        <footer className="bg-white">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://cdn.discordapp.com/attachments/1277840522047656119/1277840553232437320/Capa_4.png?ex=66cea141&is=66cd4fc1&hm=be2057a0b0bae82afac739658e7b7a84147a2903baffdf406191c9a47cb2cad9&" className="h-8 me-3" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap ">Gestini</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                {FooterData.footerBySection.map((section, index) => (
                  <div key={index}>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{section.title}</h2>
                    <ul className="text-gray-500 font-medium">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="mb-4">
                          <a href={link.path} className="hover:underline">{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">© {currentYear} <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
              <div className="flex mt-4 sm:justify-center sm:mt-0 items-center">
                {
                  FooterData.social.map((ele, ind) =>
                    <a key={ind} href={ele.path} className="text-gray-500 hover:text-gray-900 ms-5">
                      {ele.icon}
                    </a>
                  )
                }
              </div>
            </div>
          </div>
        </footer>

      )}

{footerStyle === 4 && (
  <footer className="bg-white">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {FooterData.footerBySectionBig.map((section, index) => (
          <div key={index}>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{section.title}</h2>
            <ul className="text-gray-500 font-medium">
              {section.links.map((link, linkIndex) => (
                <li className="mb-4" key={linkIndex}>
                  <a href={link.path} className="hover:underline">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© {currentYear} Gestini. All Rights Reserved.</span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          {FooterData.social.map((socialItem, index) => (
            <a key={index} href={socialItem.path} className="text-gray-400 hover:text-gray-900">
              {socialItem.icon}
              <span className="sr-only">{socialItem.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)}
    </>
  );
};

export default Footer;
