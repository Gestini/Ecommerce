import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Preview from "../pages/Preview";
import Ecommerce from "../pages/Ecommerce";
import Landing from "../pages/Landing";
const Router = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Landing, {}) }), _jsx(Route, { path: "/store", element: _jsx(Ecommerce, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Preview, {}) })] }));
};
export default Router;
