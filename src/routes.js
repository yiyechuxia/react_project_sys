import { RouteConfig } from "react-router-config"
import App from "./App"
// 系统管理模块
import User from './pages/management/user'
import Role from "./pages/management/role"
import Menu from "./pages/management/menu"

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
        path: "/management/role",
        component: Role,
      },
      {
        path: "/management/menu",
        component: Menu,
      },
    ],
  },
]

export default routes
