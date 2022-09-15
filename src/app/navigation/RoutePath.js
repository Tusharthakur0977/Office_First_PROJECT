import Settings from "../components/screens/settings";
import Checkout from "../components/screens/subscriptions/Checkout";
import Payments from "../components/screens/subscriptions/Payments";
import Pricing from "../components/screens/subscriptions/Pricing";
import Analyst from "../screens/analytics";
import Home from "../screens/home";
import Login from "../screens/login/Login";
import MFALogin from "../screens/mfalogin";
import Register from "../screens/register/Register";
import Servers from "../screens/servers";
import Profile from "../screens/profile/Profile";
import ContactUs from "../screens/contactUs/ContactUs";
import ProfilePage from "../screens/profilepage/ProfilePage";
import FrontPage from "../screens/frontpage/FrontPage";

const RoutePath = {
  frontpage: {
    title: "Front",
    component: <FrontPage />,
    path: "/",
  },
  login: {
    title: "Login",
    component: <Login />,
    path: "/login",
  },
  register: {
    title: "Register",
    component: <Register />,
    path: "/register",
  },
  pricing: {
    title: "Pricing",
    component: <Pricing />,
    path: "/pricing",
  },
  checkout: {
    title: "Checkout",
    component: <Checkout />,
    path: "/checkout",
  },
  MFALogin: {
    title: "MFALogin",
    component: <MFALogin />,
    path: "/mfa-login",
  },
  home: {
    title: "Home",
    component: <Home />,
    path: "/home",
  },
  server: {
    title: "Server",
    component: <Servers />,
    path: "/servers",
  },
  analytics: {
    title: "Analyst",
    component: <Analyst />,
    path: "/analyst",
  },
  settings: {
    title: "Settings",
    component: <Settings />,
    path: "/settings",
  },
  profile: {
    title: "Profile",
    component: <Profile />,
    path: "/profile",
  },
  payments: {
    title: "Payments",
    component: <Payments />,
    path: "/payments",
  },
  profilepage: {
    title: "ProfilePage",
    component: <ProfilePage />,
    path: "/profilepage",
  },
  contactus: {
    title: "Contactus",
    component: <ContactUs />,
    path: "/contactus",
  },
};

export default RoutePath;
