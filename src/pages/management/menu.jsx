/*用户管理模块*/
import React, { Component } from 'react'
import { Layout,Row, Col,Input,Button,Select,Form,Space,Table,Switch} from "antd"
import { SearchOutlined,SyncOutlined,EditOutlined,
  DeleteOutlined,PlusOutlined } from '@ant-design/icons';
import '../../assets/css/management/user.scss'
const { Content } = Layout
const { Option } = Select;

const dataSource = [
  
];

const columns = [
  {
    title: '菜单名称',
    dataIndex: 'code',
    key: 'code',
    align:'center',
  },
  {
    title: '图标',
    dataIndex: 'name',
    key: 'name',
    align:'center'
  },
  {
    title: '排序',
    dataIndex: 'order',
    key: 'order',
    align:'center'
  },
  {
    title: '权限标识',
    dataIndex: 'permissions',
    key: 'permissions',
    align:'center'
  },
  {
    title: '组件路径',
    dataIndex: 'component',
    key: 'component',
    align:'center'
  },
 
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    align:'center',
    render:status=><Switch checked={status}/>
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    align:'center'
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      record.showAction ? <Space size="middle">
        <spen><EditOutlined/>修改</spen>
        <spen><PlusOutlined />新增</spen>
        <spen><DeleteOutlined/>删除</spen>
      </Space> : ''
    ),
  },
];

export default class Role extends Component {
  onChange = (pageNumber)=>{
    console.log('Page: ', pageNumber);
  }
  render() {
    const Pagination = {
      showQuickJumper:true,
      defaultCurrent:1, 
      total:500,
      onChange:this.onChange
    }
    return (
      <Content
      className="site-layout-background"
      style={{
        padding: 20,
        minHeight: 380, 
      }}
    >
      <Row gutter={16}>
      <Col span={24}>
        {/* 搜索模块 */}
      <Form
      name="basic"
      colon={false}
      autoComplete="off"
    >
      <Space wrap>
      <Form.Item
        label="菜单名称"
        name="menuname"
      >
        <Input placeholder="请输入角色名称" style={{width:240}}/>
      </Form.Item>


      <Form.Item
        label="菜单状态"
        name="menustate"
      >
        <Select
          style={{ width: 240 }}
          placeholder="角色状态"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>

      <Form.Item>
      <Space wrap>
        <Button type="primary" icon={<SearchOutlined />}>
          搜索
        </Button>
        <Button icon={<SyncOutlined />}>
          重置
        </Button>
        </Space>
        </Form.Item>
      </Space>
    </Form>
    {/* 功能按钮模块 */}
      <Row>
          <Col span={24}>
          <div className="btn_left">
          <Space wrap>
            <Button icon={<SearchOutlined />}>新增</Button>
            <Button icon={<EditOutlined />}>展开/折叠</Button>
            </Space>
          </div>

          <div className="btn_right">
            <Space wrap>
              <Button shape="circle" icon={<SearchOutlined />}></Button>
              <Button shape="circle" icon={<SyncOutlined />}></Button>
            </Space>
          </div>
          
          </Col>
          {/* 表格模块 */}
            <Col span={24} style={{'marginTop':'10px'}}>
                <Table dataSource={dataSource} columns={columns} pagination={Pagination}/>
            </Col>
        </Row>
      </Col>
    </Row>
    </Content>
    )
  }
}
