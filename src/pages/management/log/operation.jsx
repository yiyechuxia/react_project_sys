/*用户管理模块*/
import React, { Component } from 'react'
import { Layout,Row, Col,Input,Button,Select,Form,DatePicker,Space,Table} from "antd"
import { SearchOutlined,SyncOutlined,EditOutlined,
  DeleteOutlined,VerticalAlignBottomOutlined,MenuOutlined } from '@ant-design/icons';
import '../../../assets/css/management/user.scss'
const { Content } = Layout
const { RangePicker } = DatePicker;
const { Option } = Select;

const dataSource = [];

const columns = [
  {
    title: '日志编号',
    dataIndex: 'number',
    key: 'number',
    align:'center',
  },
  {
    title: '系统模块',
    dataIndex: 'system',
    key: 'system',
    align:'center'
  },
  {
    title: '操作类型',
    dataIndex: 'type',
    key: 'type',
    align:'center'
  },
  {
    title: '请求方式',
    dataIndex: 'method',
    key: 'method',
    align:'center'
  },
  {
    title: '操作人员',
    dataIndex: 'person',
    key: 'person',
    align:'center',
  },
  {
    title: '操作地址',
    dataIndex: 'ip',
    key: 'ip',
    align:'center',
  },
  {
    title: '操作地点',
    dataIndex: 'address',
    key: 'address',
    align:'center',
  },
  {
    title: '操作日期',
    dataIndex: 'operationTime',
    key: 'operationTime',
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

export default class Operation extends Component {
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
        label="系统模块"
        name="system"
      >
        <Input placeholder="请输入系统模块" style={{width:240}}/>
      </Form.Item>

      <Form.Item
        label="操作人员"
        name="person"
      >
        <Input placeholder="请输入操作人员" style={{width:240}}/>
      </Form.Item>

      <Form.Item
        label="类型"
        name="state"
      >
        <Select
          style={{ width: 240 }}
          placeholder="操作类型"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="状态"
        name="state"
      >
        <Select
          style={{ width: 240 }}
          placeholder="操作状态"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="操作时间"
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
