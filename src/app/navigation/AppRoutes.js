import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import { readData, USER } from "../utils/storage";
import PrivatePages from "./PrivatePages";
import PublicPages from "./PublicPages";

function AppRoutes(props) {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   readData(USER, (data) => {
  //     if (data) {

  //     }
  //   })
  // }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="wiz/*" element={<PrivatePages />} />
        <Route path="/*" element={<PublicPages />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
