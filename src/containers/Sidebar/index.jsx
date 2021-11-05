import React, { Component } from 'react'
import { Menu,Layout } from "antd"
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TeamOutlined,
  DingtalkOutlined,
} from "@ant-design/icons"
const { Sider } = Layout
class Sidebar extends Component {
  render() {
    return (
      // 侧边栏菜单
      <Sider trigger={null} collapsible collapsed={this.props.switchV}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>{this.props.history.push('/management/user')}}>
          用户管理
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={()=>{this.props.history.push('/management/role')}}>
          角色管理
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />} onClick={()=>{this.props.history.push('/management/menu')}}>
          菜单管理
        </Menu.Item>
        <Menu.Item key="5" icon={<UploadOutlined />}>
          部门管理
        </Menu.Item>
        <Menu.Item key="6" icon={<DingtalkOutlined />}>
          岗位管理
        </Menu.Item>
        <Menu.Item key="7" icon={<DingtalkOutlined />}>
          字典管理
        </Menu.Item>
        <Menu.Item key="8" icon={<DingtalkOutlined />}>
          参数设置
        </Menu.Item>
        <Menu.Item key="9" icon={<DingtalkOutlined />}>
          通知公告
        </Menu.Item>
        <Menu.Item key="10" icon={<DingtalkOutlined />}>
          日志管理
        </Menu.Item>
      </Menu>
    </Sider>
    )
  }
}

export default connect(
  state => ({switchV:state}),
  {}
)(withRouter(Sidebar))
