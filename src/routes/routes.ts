import { lazy } from "react";
const Login = lazy(() => import("../pages/login"));

const routes = [
  {
   key: "login",
   component: Login,
   path: "/"
   
  },
];

export default routes;
