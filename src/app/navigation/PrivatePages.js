import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import PageNotFound from "../screens/pagenotfound";
import RoutePath from "./RoutePath";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { RequireAuth } from "../components/auth/RequireAuth";
import { Box, useTheme } from "@mui/material";
import SideBar from "../components/sideBar/SideBar";
import { useState } from "react";
import { loginMeApi } from "../services/AuthApis";
import { useEffect } from "react";
import useSticky from "../utils/Sticky";

function PrivatePages() {
  const { element } = useSticky();
  const theme = useTheme();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const showHeader =
    authStatus === "authenticated" &&
    window.location.hash !== "#/wiz/mfa-login";

  const [userDetail, setUserDetail] = useState([]);

  const loggedInUserDetails = async (token) => {
    try {
      let { data } = await loginMeApi(token);
      setUserDetail(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loggedInUserDetails();
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            minHeight: "100vh",
            minWidth: "100%",
          },
          background: theme.palette.mode === "dark" ? "#393848" : "",
        }}
      >
        <Box sx={{ maxHeight: "100vh" }}>
          <SideBar />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: "100vh",
            [theme.breakpoints.down("sm")]: {
              minHeight: "110vh",
            },
          }}
        >
          {showHeader && <Header ref={element} userDetail={userDetail} />}
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route
                path={RoutePath.home.path}
                element={<RequireAuth>{RoutePath.home.component}</RequireAuth>}
              />
              <Route
                path={RoutePath.MFALogin.path}
                element={
                  <RequireAuth>{RoutePath.MFALogin.component}</RequireAuth>
                }
              />
              <Route
                path={RoutePath.server.path}
                element={
                  <RequireAuth>{RoutePath.server.component}</RequireAuth>
                }
              />
              <Route
                path={RoutePath.analytics.path}
                element={
                  <RequireAuth>{RoutePath.analytics.component}</RequireAuth>
                }
              />
              <Route
                path={RoutePath.server.path}
                element={
                  <RequireAuth>{RoutePath.server.component}</RequireAuth>
                }
              />
              <Route
                path={RoutePath.settings.path}
                element={
                  <RequireAuth>{RoutePath.settings.component}</RequireAuth>
                }
              />
              <Route
                path={RoutePath.profile.path}
                element={
                  <RequireAuth>{RoutePath.profile.component}</RequireAuth>
                }
              />
              <Route
                path={RoutePath.profilepage.path}
                element={RoutePath.profilepage.component}
              />
              <Route
                path={RoutePath.contactus.path}
                element={RoutePath.contactus.component}
              />
            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );

  // useEffect(() => {
  //     // readData(USER, (data) => {
  //     //     if (window.location.hash !== "#/wiz/server" && !data) {
  //     //         navigate(RoutePath.login.path)
  //     //     }
  //     // })
  // }, []);

  // function renderRoutes() {
  //     return  <Routes>
  //         <Route path="*" element={<PageNotFound />} />
  //         <Route path={RoutePath.home.path} element={RoutePath.home.component} />
  //         <Route path={RoutePath.MFALogin.path} element={RoutePath.MFALogin.component} />
  //         <Route path={RoutePath.server.path} element={RoutePath.server.component} />
  //         <Route path={RoutePath.analytics.path} element={RoutePath.analytics.component} />
  //         <Route path={RoutePath.server.path} element={RoutePath.server.component} />
  //         <Route path={RoutePath.settings.path} element={RoutePath.settings.component} />
  //     </Routes>
  // }

  // function renderAllRoutes() {
  //     if (window.location.hash !== "#/wiz/mfa-login") {
  //         return <>
  //             <Header sticky={isSticky} />
  //             {renderRoutes(element)}
  //         </>
  //     } else {
  //         return renderRoutes();
  //     }
  // }
  // return renderAllRoutes()
}

export default PrivatePages;
