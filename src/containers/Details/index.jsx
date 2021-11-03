import React, { Component } from 'react'
import { Layout } from "antd"
const { Content } = Layout
export default class Details extends Component {
  render() {
    return (
      // 内容区模块
      <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 380,
      }}
    >
      details…………………………
    </Content>
    )
  }
}
