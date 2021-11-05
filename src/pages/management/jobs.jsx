/*用户管理模块*/
import React, { Component } from 'react'
import { Layout,Row, Col,Input,Button,Select,Form,Space,Table,Switch} from "antd"
import { SearchOutlined,SyncOutlined,EditOutlined,
  DeleteOutlined,VerticalAlignBottomOutlined } from '@ant-design/icons';
import '../../assets/css/management/user.scss'
const { Content } = Layout
const { Option } = Select;

const dataSource = [
  {
    key:'1',
    number:'1',
    code:'ceo',
    name:'超级管理员',
    permissions:'admin',
    order:'1',
    status:true,
    createTime:'2021-11-3 15:39:28',
    showAction:false
  },
  {
    key:'2',
    number:'2',
    code:'user',
    name:'普通角色',
    permissions:'common',
    order:'2',
    status:true,
    createTime:'2021-11-3 15:39:28',
    showAction:true
  },
];

// 表头字段
const columns = [
  {
    title: '岗位编号',
    dataIndex: 'number',
    key: 'number',
    align:'center',
  },
  {
    title: '岗位编码',
    dataIndex: 'code',
    key: 'code',
    align:'center'
  },
  {
    title: '岗位名称',
    dataIndex: 'name',
    key: 'name',
    align:'center'
  },
  {
    title: '显示排序',
    dataIndex: 'order',
    key: 'order',
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
        <spen><DeleteOutlined/>删除</spen>
      </Space> : ''
    ),
  },
];

export default class Jobs extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
  onSelectChange = (selectedRowKeys)=>{
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  onChange = (pageNumber)=>{
    console.log('Page: ', pageNumber);
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
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
        label="岗位编码"
        name="code"
      >
        <Input placeholder="请输入岗位编码" style={{width:240}}/>
      </Form.Item>

      <Form.Item
        label="岗位名称"
        name="name"
      >
        <Input placeholder="请输入岗位名称" style={{width:240}}/>
      </Form.Item>

      <Form.Item
        label="状态"
        name="state"
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
            <Button icon={<EditOutlined />}>修改</Button>
            <Button icon={<DeleteOutlined />}>删除</Button>
            <Button icon={<VerticalAlignBottomOutlined />}>导出</Button>
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
                <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} pagination={Pagination}/>
            </Col>
        </Row>
      </Col>
    </Row>
    </Content>
    )
  }
}
