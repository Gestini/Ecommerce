import { Routes, Route } from "react-router-dom";
import Preview from "../pages/Preview";
import Ecommerce from "../pages/Ecommerce";
import Landing from "../pages/Landing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/store" element={<Ecommerce />} />
      <Route path="/dashboard" element={<Preview />} />
    </Routes>
  );
};

export default Router;
