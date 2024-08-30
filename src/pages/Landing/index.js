import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./Landing.scss";
import Navbar from "../../components/Landing/Navbar";
import Home from "../../components/Landing/Home";
import Whoweare from "../../components/Landing/sections/Whoweare";
import Doitwithgenis from "@/components/Landing/sections/Doitwithgenis";
import Genishelpsyou from "@/components/Landing/sections/Genishelpsyou";
const index = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Home, {}), _jsx(Whoweare, {}), _jsx(Doitwithgenis, {}), _jsx(Genishelpsyou, {})] }));
};
export default index;
