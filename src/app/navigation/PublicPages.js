import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../screens/pagenotfound";
import RoutePath from "./RoutePath";
import { RequireGuest } from "../components/auth/RequireGuest";

function PublicPages(props) {
  return (
    <Routes>
      <Route
        path={RoutePath.frontpage.path}
        element={RoutePath.frontpage.component}
      />
      <Route
        path={RoutePath.login.path}
        element={<RequireGuest>{RoutePath.login.component}</RequireGuest>}
      />

      <Route
        path={RoutePath.register.path}
        element={<RequireGuest>{RoutePath.register.component}</RequireGuest>}
      />
      <Route
        path={RoutePath.MFALogin.path}
        element={RoutePath.MFALogin.component}
      />
      <Route
        path={RoutePath.pricing.path}
        element={RoutePath.pricing.component}
      />
      <Route
        path={RoutePath.checkout.path}
        element={RoutePath.checkout.component}
      />
      <Route
        path={RoutePath.payments.path}
        element={RoutePath.payments.component}
      />
      <Route path="*" element={<PageNotFound logo={true} />} />
    </Routes>
  );
}

export default PublicPages;
