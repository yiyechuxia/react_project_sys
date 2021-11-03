import { RouteConfig } from "react-router-config"
import App from "./App"
// 系统管理模块
import User from './pages/management/user'
import Details from "./containers/Details/index"

const routes : RouteConfig = [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/management/user",
        component: User,
      },
      {
        path: "/Details",
        component: Details,
      },
    ],
  },
]

export default routes
