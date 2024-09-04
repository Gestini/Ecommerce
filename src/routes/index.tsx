import { Routes, Route } from "react-router-dom";
import CommingSoon from "@/pages/CommingSoon";
import Ecommerce from "@/pages/Ecommerce";
import Landing from "@/pages/Landing";
import AllEcommerce from"@/pages/AllEcommerce"
import React from "react";
import { Unit } from "@/types/Unit";
import { reqGetUnitsByEcommerce } from "@/api/requests";

const Router = () => {
  const [companies, setCompanies] = React.useState<Unit[]>([]);

  // console.log(companies);
  // React.useEffect(() => {
  //   const loadUserCompanies = async () => {
  //     try {
  //       const response = await reqGetUnitsByEcommerce();
  //       setCompanies(response.data);
  //     } catch (error) {
  //       console.error('Error fetching business units:', error);
  //     }
  //   };
  //   loadUserCompanies();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* {
        companies.map((ele, ind) =>
          < Route path={`/store/${ele.link}`} element={<Ecommerce unit={ele} />} />
        )
      } */}
      {/* <Route path="/ecommerce" element={<AllEcommerce/>} /> */}
    </Routes>
  );
};

export default Router;
