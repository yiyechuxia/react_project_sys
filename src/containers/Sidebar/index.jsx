import React, { Component } from 'react'
import { Menu,Layout } from "antd"
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Icons from '../../components/icons';
import { addTags,selectedTag } from '../../redux/actions/tagList';
const { SubMenu } = Menu
const { Sider } = Layout
const menuList = [
  {id:1,icon:'touxiang',title:'用户管理',key:'1-1',route:'/management/user'},
  {id:2,icon:'jiaoseguanli',title:'角色管理',key:'1-2',route:'/management/role'},
  {id:3,icon:'caidan',title:'菜单管理',key:'1-3',route:'/management/menu'},
  {id:4,icon:'bumen',title:'部门管理',key:'1-4',route:'/management/department'},
  {id:5,icon:'qiyeguanli_gangweiguanli',title:'岗位管理',key:'1-5',route:'/management/jobs'},
  {id:6,icon:'zidianguanli',title:'字典管理',key:'1-6',route:'/management/dictionary'},
  {id:7,icon:'bianji',title:'参数管理',key:'1-7',route:'/management/params'},
  {id:8,icon:'duihua2',title:'通知公告',key:'1-8',route:'/management/notice'},
  {id:9,icon:'rizhi',title:'日志管理',key:'1-9',route:null , childern:[
    {id:10,icon:'rizhi1',title:'操作日志',key:'1-9-1',parent:'1-9',route:'/management/log/operation'},
    {id:11,icon:'dengluye-dengluzhanghaotubiao',title:'登录日志',key:'1-9-2',parent:'1-9',route:'/management/log/loginlog'},
  ]},
]

class Sidebar extends Component {
  state = {
    selectedKey:['1-1']
  }
  routerGo = (item)=>{
    return (data)=>{
      this.props.addTags(item)
      this.props.handleSelected(item)
      localStorage.setItem('selectedKey',JSON.stringify(data.keyPath))
      this.props.history.push(item.route)
    }
  }
  componentDidMount(){
  }
  render() {
    const selectedKey_local = JSON.parse(localStorage.getItem('selectedKey'))
    const { selectedTag } = this.props
    const selectedKey_state = selectedTag.parent ? [selectedTag.parent,selectedTag.key] : [selectedTag.key]
    // const {selectedKey:selectedKey_state} = this.state
    const selectedKey = selectedKey_local ? selectedKey_local : selectedKey_state
    return (
      // 侧边栏菜单
      <Sider trigger={null} collapsible collapsed={this.props.switchV}>
      <div className="logo" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKey} defaultOpenKeys={selectedKey} selectedKeys={selectedKey}>
        {menuList.map(item=>{
          if(item.childern){
           return (
            <SubMenu key={item.key} icon={(<Icons name={item.icon}/>)} title={item.title}>
                {item.childern.map(el=>{
                  return <Menu.Item key={el.key} icon={(<Icons name={el.icon}/>)} onClick={this.routerGo(el)}>{el.title}</Menu.Item>
                })}
            </SubMenu>
           )
          }else{
            return (
              <Menu.Item key={item.key} icon={(<Icons name={item.icon}/>)} onClick={this.routerGo(item)}>
                {item.title}
              </Menu.Item>
            )
          }
        })}
      </Menu>
    </Sider>
    )
  }
}

export default connect(
  state => ({switchV:state.Collapsed,selectedTag:state.SelectedTag}),
  {
    addTags,
    handleSelected:selectedTag
  }
)(withRouter(Sidebar))
