import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Dropdown, Tag } from "antd"
import { FALSE_S,TRUE_S } from '../../redux/actions/collapsed';
import { selectedTag,removeTag } from '../../redux/actions/tagList';
import {withRouter} from 'react-router-dom';
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

  removeTags = (item,index) => {
    return (e)=>{
      const {tagList,selectedTag} = this.props
      e.preventDefault()
      if(selectedTag.id === item.id){
        this.props.handleSelected(tagList[index - 1])
        this.props.history.push(tagList[index - 1].route)
        localStorage.setItem('selectedKey',JSON.stringify([tagList[index - 1].key]))
      }
      this.props.removeTag(item)
    }
  }

  handleTags = (item,index)=>{
    return ()=>{
      console.log(item);
      console.log(index);
      localStorage.setItem('selectedKey',JSON.stringify([item.key]))
      this.props.handleSelected(item)
      this.props.history.push(item.route)
    }
  }
  render() {
    const { current } = this.state
    const {tagList,selectedTag} = this.props
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
          {
            tagList.map((item,index)=>{
              return (
                <Tag onClick={this.handleTags(item,index)} color={item.id === selectedTag.id ? '#409eff' :  'default'} key={item.id} closable={item.id === 0 ? false : true} onClose={this.removeTags(item,index)}>
                  {item.title}
                </Tag>
              )
            })
          }
            
          </div>
      </div>
    )
  }
}


export default connect(
  (state)=>({switchV:state.Collapsed,tagList:state.TagList,selectedTag:state.SelectedTag}),
  {
    toggleBytrue: TRUE_S,
    toggleByfalse :FALSE_S,
    handleSelected:selectedTag,
    removeTag
  }

)(withRouter(Headers))
