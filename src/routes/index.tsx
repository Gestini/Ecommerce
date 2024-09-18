import { Routes, Route } from "react-router-dom";
import CommingSoon from "@/pages/CommingSoon";
import Ecommerce from "@/pages/Ecommerce";
import Landing from "@/pages/Landing";
import AllEcommerce from "@/pages/AllEcommerce"
import Prueba from "@/pages/Prueba"
import React from "react";
import { Unit } from "@/types/Unit";
import { reqGetUnitsByEcommerce } from "@/api/requests";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path={`/store/:id`} element={<Ecommerce />} />
      <Route path="/ecommerce" element={<AllEcommerce />} />
      <Route path="/prueba" element={<Prueba />} />
    </Routes>
  );
};

export default Router;
