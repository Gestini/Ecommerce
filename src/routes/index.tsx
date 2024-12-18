import Landing from "@/pages/Landing";
import { Route, Routes } from "react-router-dom";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path={`/store`} element={<Ecommerce />} /> */}
      {/* <Route path="/ecommerce" element={<AllEcommerce />} /> */}
    </Routes>
  );
};

export default Router;
