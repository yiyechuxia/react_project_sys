import React, { Component } from "react"
import { Layout } from "antd"
import Sidebar from './containers/Sidebar/index.jsx' //侧边栏模块
import Header from './containers/Header/index'
// import Content from './containers/Content/index'
import { renderRoutes } from 'react-router-config';

import "./assets/css/layout/index.scss"

export default class App extends Component {
  render() {
    const {route} = this.props;
    return (
      <Layout>
        <Sidebar/>
        <Layout className="site-layout">
          <Header/>
          {/* <Content/>
           */}
           {route  && renderRoutes(route.routes)}
        </Layout>
      </Layout>
    )
  }
}
