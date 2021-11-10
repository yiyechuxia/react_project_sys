import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Dropdown, Tag } from "antd"
import { FALSE_S,TRUE_S } from '../../redux/actions/collapsed';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined
} from "@ant-design/icons"
const { Header } = Layout
 class Headers extends Component {
  state = {
    current: "mail",
  }
  
  toggle = (switchV) => {
    return ()=>{
      switchV = !switchV
      switchV ? this.props.toggleBytrue(switchV) : this.props.toggleByfalse(switchV)
    }
  }
  handleClick = (e) => {
    console.log("click ", e)
    this.setState({ current: e.key })
  }

  preventDefault = (e) => {
    e.preventDefault()
    console.log("Clicked! But prevent default.")
  }
  render() {
    const { current } = this.state
    const menu = (
      <Menu>
        <Menu.Item>
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item>
          <span>布局设置</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )
    return (
      <div>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {/* 侧边栏展开/收起按钮 */}
            {React.createElement(
              this.props.switchV ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle(this.props.switchV),
              }
            )}
            {/* 筛选左边侧边栏tab */}
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              className="top_menu"
              title="更多菜单"
            >
              <Menu.Item key="mail" icon={<MailOutlined />}>
                系统管理
              </Menu.Item>
              <Menu.Item key="app" icon={<AppstoreOutlined />}>
                系统监控
              </Menu.Item>
              <Menu.Item key="system" icon={<AppstoreOutlined />}>
                系统工具
              </Menu.Item>
              <Menu.Item key="statistics" icon={<AppstoreOutlined />}>
                统计报表
              </Menu.Item>
            </Menu>
            {/* 用户头像及下拉功能 */}
            <Dropdown overlay={menu}>
              <span className="Avatar_cs">
                <Avatar shape="square" size={36} icon={<UserOutlined />} />
              </span>
            </Dropdown>
          </Header>
          {/* 显示当前页面tag */}
          <div className="tagList">
            <Tag color='#409eff' closable onClose={this.preventDefault}>
              首页
            </Tag>
          </div>
      </div>
    )
  }
}


export default connect(
  (state)=>({switchV:state}),
  {
    toggleBytrue: TRUE_S,
    toggleByfalse :FALSE_S
  }

)(Headers)
