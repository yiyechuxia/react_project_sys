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
  AppstoreOutlined,
} from "@ant-design/icons"
const {SubMenu} = Menu
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
        <Menu.Item key="5" icon={<UploadOutlined />} onClick={()=>{this.props.history.push('/management/department')}} >
          部门管理
        </Menu.Item>
        <Menu.Item key="6" icon={<DingtalkOutlined />} onClick={()=>{this.props.history.push('/management/jobs')}}>
          岗位管理 
        </Menu.Item>
        <Menu.Item key="7" icon={<DingtalkOutlined />} onClick={()=>{this.props.history.push('/management/dictionary')}}>
          字典管理
        </Menu.Item>
        <Menu.Item key="8" icon={<DingtalkOutlined />} onClick={()=>{this.props.history.push('/management/params')}}>
          参数设置
        </Menu.Item>
        <Menu.Item key="9" icon={<DingtalkOutlined />} onClick={()=>{this.props.history.push('/management/notice')}}>
          通知公告
        </Menu.Item>
        {/* <Menu.Item key="10" icon={<DingtalkOutlined />}>
          日志管理
        </Menu.Item> */}
        <SubMenu key="10" icon={<AppstoreOutlined />} title="通知公告">
            <Menu.Item key="10-1" onClick={()=>{this.props.history.push('/management/log/operation')}}>操作日志</Menu.Item>
            <Menu.Item key="10-2" onClick={()=>{this.props.history.push('/management/log/loginlog')}}>登录日志</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    )
  }
}

export default connect(
  state => ({switchV:state}),
  {}
)(withRouter(Sidebar))
