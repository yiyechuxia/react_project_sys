/*用户管理模块*/
import React, { Component } from 'react'
import { Layout,Row, Col,Input,Tree,Button,Select,Form,DatePicker,Space,Table,Switch} from "antd"
import { SearchOutlined,SyncOutlined,EditOutlined,
  DeleteOutlined,
  VerticalAlignTopOutlined,VerticalAlignBottomOutlined,BarsOutlined,MenuOutlined,PlusOutlined } from '@ant-design/icons';
import '../../assets/css/management/user.scss'
const { Content } = Layout


const treeData = [
  {
    title:"秀辉科技",
    key:'1',
    children:[
      {
        title:"深圳总公司",
        key:'1-1',
        children:[
          {
            title:"研发部门",
            key:'1-1-1'
          },
          {
            title:"市场部门",
            key:'1-1-2'
          },
          {
            title:"测试部门",
            key:'1-1-3'
          },
          {
            title:"财务部门",
            key:'1-1-4'
          },
          {
            title:"运维部门",
            key:'1-1-5'
          }
        ]
      },
      {
        title:"长沙总公司",
        key:'1-2',
        children:[
          {
            title:"市场部门",
            key:'1-2-1'
          },
          {
            title:"财务部门",
            key:'1-2-2'
          },
        ]
      }
    ]
  }
];
const { RangePicker } = DatePicker;
const { Option } = Select;

const dataSource = [
  {
    key:'1',
    code:'1',
    name:'张三',
    nickname:'李四',
    department:'研发部门',
    phone:'1371225xxxx',
    status:true,
    createTime:'2021-11-3 15:39:28',
    showAction:false
  },
  {
    key:'2',
    code:'2',
    name:'王五',
    nickname:'赵六',
    department:'测试部门',
    phone:'1371225xxxx',
    status:true,
    createTime:'2021-11-3 15:39:28',
    showAction:true
  },
];

const columns = [
  {
    title: '用户编码',
    dataIndex: 'code',
    key: 'code',
    align:'center',
  },
  {
    title: '用户名称',
    dataIndex: 'name',
    key: 'name',
    align:'center'
  },
  {
    title: '用户昵称',
    dataIndex: 'nickname',
    key: 'nickname',
    align:'center'
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    align:'center'
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
    key: 'phone',
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
        <span><EditOutlined/>修改</span>
        <span><DeleteOutlined/>删除</span>
        <span><MenuOutlined />更多</span>
      </Space> : ''
    ),
  },
];

export default class User extends Component {
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
      <Col span={4}>
        <Input placeholder="请输入部门名称" prefix={<SearchOutlined />} />
        <Tree treeData={treeData}  defaultExpandAll />
      </Col>
      <Col span={20}>
        {/* 搜索模块 */}
      <Form
      name="basic"
      colon={false}
      autoComplete="off"
    >
      <Space wrap>
      <Form.Item
        label="用户名称"
        name="username"
      >
        <Input placeholder="请输入用户名称" style={{width:240}}/>
      </Form.Item>

      <Form.Item
        label="手机号码"
        name="phone"
      >
        <Input placeholder="请输入手机号码" style={{width:240}}/>
      </Form.Item>

      <Form.Item
        label="状态"
        name="state"
      >
        <Select
          style={{ width: 240 }}
          placeholder="用户状态"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="创建时间"
        name="datePicker"
      >
        <Space direction="vertical">
          <RangePicker style={{ width: 240 }}/>
        </Space>
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
            <Button icon={<PlusOutlined />}>新增</Button>
            <Button icon={<EditOutlined />}>修改</Button>
            <Button icon={<DeleteOutlined />}>删除</Button>
            <Button icon={<VerticalAlignTopOutlined />}>导入</Button>
            <Button icon={<VerticalAlignBottomOutlined />}>导出</Button>
            </Space>
          </div>

          <div className="btn_right">
          <Space wrap>
            <Button shape="circle" icon={<SearchOutlined />}></Button>
            <Button shape="circle" icon={<SyncOutlined />}></Button>
            <Button shape="circle" icon={<BarsOutlined />}></Button>
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
