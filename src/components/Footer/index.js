import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GestinyLogo } from '../../assets/Logo';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [footerStyle, setFooterStyle] = React.useState(4);
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
                icon: _jsx(FaFacebookF, { className: 'text-[16px]' }),
                path: '/'
            },
            {
                name: 'Facebook',
                icon: _jsx(FaInstagram, { className: 'text-[16px]' }),
                path: '/'
            },
            {
                name: 'Facebook',
                icon: _jsx(FaLinkedinIn, { className: 'text-[16px]' }),
                path: '/'
            },
            {
                name: 'Facebook',
                icon: _jsx(FaXTwitter, { className: 'text-[16px]' }),
                path: '/'
            },
        ]
    };
    return (_jsxs(_Fragment, { children: [footerStyle === 1 && (_jsx("footer", { className: "bg-white shadow-2xl", children: _jsxs("div", { className: "w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between", children: [_jsxs("span", { className: "text-sm text-gray-500 sm:text-center ", children: ["\u00A9 ", currentYear, " ", _jsx("a", { href: "https://flowbite.com/", className: "hover:underline", children: "Flowbite\u2122" }), ". All Rights Reserved."] }), _jsx("ul", { className: "flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0", children: FooterData.simpleFooter.map((ele, ind) => _jsx("li", { children: _jsx("a", { href: ele.path, className: "hover:underline me-4 md:me-6", children: ele.name }) }, ind)) })] }) })), footerStyle === 2 && (_jsx("footer", { className: "bg-white rounded-lg shadow-2xl", children: _jsxs("div", { className: "w-full max-w-screen-xl mx-auto p-4 md:py-8", children: [_jsxs("div", { className: "sm:flex sm:items-center sm:justify-between", children: [_jsxs("a", { href: "https://flowbite.com/", className: "flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse", children: [_jsx(GestinyLogo, {}), _jsx("span", { className: "self-center text-2xl font-semibold whitespace-nowrap ", children: "Gestini" })] }), _jsx("ul", { className: "flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ", children: FooterData.simpleFooter.map((ele, ind) => _jsx("li", { children: _jsx("a", { href: ele.path, className: "hover:underline me-4 md:me-6", children: ele.name }) }, ind)) })] }), _jsx("hr", { className: "my-6 border-gray-200 sm:mx-auto  lg:my-8" }), _jsxs("span", { className: "block text-sm text-gray-500 sm:text-center ", children: ["\u00A9 ", currentYear, " ", _jsx("a", { href: "gestini.com", className: "hover:underline", children: "Gestini" }), ". All Rights Reserved."] })] }) })), footerStyle === 3 && (_jsx("footer", { className: "bg-white shadow-2xl", children: _jsxs("div", { className: "mx-auto w-full  p-4 py-6 lg:py-8", children: [_jsxs("div", { className: "md:flex md:justify-between", children: [_jsx("div", { className: "mb-6 md:mb-0", children: _jsxs("a", { href: "https://flowbite.com/", className: "flex items-center", children: [_jsx(GestinyLogo, {}), _jsx("span", { className: "self-center text-2xl font-semibold whitespace-nowrap ", children: "Gestini" })] }) }), _jsx("div", { className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3", children: FooterData.footerBySection.map((section, index) => (_jsxs("div", { children: [_jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase", children: section.title }), _jsx("ul", { className: "text-gray-500 font-medium", children: section.links.map((link, linkIndex) => (_jsx("li", { className: "mb-4", children: _jsx("a", { href: link.path, className: "hover:underline", children: link.name }) }, linkIndex))) })] }, index))) })] }), _jsx("hr", { className: "my-6 border-gray-200 sm:mx-auto lg:my-8" }), _jsxs("div", { className: "sm:flex sm:items-center sm:justify-between", children: [_jsxs("span", { className: "text-sm text-gray-500 sm:text-center", children: ["\u00A9 ", currentYear, " ", _jsx("a", { href: "https://flowbite.com/", className: "hover:underline", children: "Flowbite\u2122" }), ". All Rights Reserved."] }), _jsx("div", { className: "flex mt-4 sm:justify-center sm:mt-0 items-center", children: FooterData.social.map((ele, ind) => _jsx("a", { href: ele.path, className: "text-gray-500 hover:text-gray-900 ms-5", children: ele.icon }, ind)) })] })] }) })), footerStyle === 4 && (_jsx("footer", { className: "bg-white shadow-2xl", children: _jsxs("div", { className: "mx-auto w-full ", children: [_jsx("div", { className: "grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4", children: FooterData.footerBySectionBig.map((section, index) => (_jsxs("div", { children: [_jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase", children: section.title }), _jsx("ul", { className: "text-gray-500 font-medium", children: section.links.map((link, linkIndex) => (_jsx("li", { className: "mb-4", children: _jsx("a", { href: link.path, className: "hover:underline", children: link.name }) }, linkIndex))) })] }, index))) }), _jsxs("div", { className: "px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between", children: [_jsxs("span", { className: "text-sm text-gray-500 sm:text-center", children: ["\u00A9 ", currentYear, " Gestini. All Rights Reserved."] }), _jsx("div", { className: "flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse", children: FooterData.social.map((socialItem, index) => (_jsxs("a", { href: socialItem.path, className: "text-gray-400 hover:text-gray-900", children: [socialItem.icon, _jsx("span", { className: "sr-only", children: socialItem.name })] }, index))) })] })] }) }))] }));
};
export default Footer;
