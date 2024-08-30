import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Ecommerce from '../Ecommerce';
const index = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'w-full flex flex-col gap-5 items-center p-10', children: [_jsx("h4", { className: 'text-[30px] font-semibold text-green-500', children: "Visualizaci\u00F3n de pagina" }), _jsx("div", { className: 'w-[600px] h-screen shadow-2xl relative overflow-y-auto overflow-x-hidden resize', children: _jsx(Ecommerce, {}) })] }) }));
};
export default index;
