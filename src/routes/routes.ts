import { lazy } from "react";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Explore from "../components/Cards/Explore";
import Consultation from "../components/Cards/Consultation";
import EstimateCost from "../components/Cards/EstimateCost";
import MyProfile from "../pages/Profile/Dashboard";
import OrderDetal from "../pages/Profile/OrderDetal";
const Login = lazy(() => import("../pages/Login"));

const routes = [
  {
   key: "login",
   component: Login,
   path: "/login"
   
  },
  {
    key: "home",
    component: Home,
    path: "/"
  },
  {
    key: "register",
    component: Register,
    path: "/register"
  },
 {
   key: "explore",
   component: Explore,
   path: "/explore"
 },
 {
   key: "consultation",
   component: Consultation, 
   path: "/consultation"
 },
 {
   key: "estimatecost",
   component: EstimateCost, 
   path: "/estimatecost"
 },
 {
   key: "myprofile",
   component: MyProfile, 
   path: "/myprofile"
 },
 {
   key: "orderdetail",
   component: OrderDetal, 
   path: "/orderdetail"
 }
  
];

export default routes;
