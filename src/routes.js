import { RouteConfig } from "react-router-config"
import App from "./App"
import { Redirect } from "react-router-dom"
// 登录页
import Login from "./pages/login"
import Home from "./pages/home"
// 系统管理模块
import User from "./pages/management/user"
import Role from "./pages/management/role"
import Menu from "./pages/management/menu"
import Department from "./pages/management/department"
import Jobs from "./pages/management/jobs"
import Dictionary from "./pages/management/dictionary"
import Params from "./pages/management/params"
import Notice from "./pages/management/notice"
import Operation from "./pages/management/log/operation"
import LoginLog from "./pages/management/log/login"

const routes: RouteConfig = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/login"} />,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/home",
        component: Home,
      },
      // 系统管理模块
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
      {
        path: "/management/department",
        component: Department,
      },
      {
        path: "/management/jobs",
        component: Jobs,
      },
      {
        path: "/management/dictionary",
        component: Dictionary,
      },
      {
        path: "/management/params",
        component: Params,
      },
      {
        path: "/management/notice",
        component: Notice,
      },
      {
        path: "/management/log/operation",
        component: Operation,
      },
      {
        path: "/management/log/loginlog",
        component: LoginLog,
      },
    ],
  },
]

export default routes
