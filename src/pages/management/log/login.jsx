/*用户管理模块*/
import React, { Component } from 'react'
import { Layout,Row, Col,Input,Button,Select,Form,DatePicker,Space,Table} from "antd"
import { SearchOutlined,SyncOutlined,
  DeleteOutlined,VerticalAlignBottomOutlined } from '@ant-design/icons';
import '../../../assets/css/management/user.scss'
const { Content } = Layout
const { RangePicker } = DatePicker;
const { Option } = Select;

const dataSource = [];

const columns = [
  {
    title: '访问编号',
    dataIndex: 'number',
    key: 'number',
    align:'center',
  },
  {
    title: '用户名称',
    dataIndex: 'name',
    key: 'name',
    align:'center'
  },
  {
    title: '登录地址',
    dataIndex: 'ip',
    key: 'ip',
    align:'center'
  },
  {
    title: '登录地点',
    dataIndex: 'address',
    key: 'address',
    align:'center'
  },
  {
    title: '浏览器',
    dataIndex: 'browser',
    key: 'browser',
    align:'center',
  },
  {
    title: '操作系统',
    dataIndex: 'system',
    key: 'system',
    align:'center',
  },
  {
    title: '登录状态',
    dataIndex: 'status',
    key: 'status',
    align:'center',
  },
  {
    title: '操作信息',
    dataIndex: 'message',
    key: 'message',
    align:'center'
  },
  {
    title: '登录日期',
    dataIndex: 'loginDate',
    key: 'loginDate',
    align:'center'
  }
];

export default class Login extends Component {
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
        label="登录地址"
        name="address"
      >
        <Input placeholder="请输入登录地址" style={{width:240}}/>
      </Form.Item>

      <Form.Item
        label="用户名称"
        name="name"
      >
        <Input placeholder="请输入用户名称" style={{width:240}}/>
      </Form.Item>
      <Form.Item
        label="状态"
        name="state"
      >
        <Select
          style={{ width: 240 }}
          placeholder="登录状态"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="登录时间"
        name="operationDatePicker"
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
            <Button icon={<DeleteOutlined />}>删除</Button>
            <Button icon={<DeleteOutlined />}>清空</Button>
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
