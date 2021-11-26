import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Form, Input, Button,Checkbox } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import "../../assets/css/login/index.scss"
export default class Login extends Component {
  state={
    loading:false
  }
   onFinish = (values) => {
    console.log(values);
    this.setState({
      loading:true
    })
    setTimeout(() => {
      this.props.history.replace("/home")
    }, 1500);
  };

  componentWillUnmount(){
    this.setState({
        loading:false
      })
  }

   onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    const {loading} = this.state
    return (
      <div id="login">
        <div className="login_form">
            <h3 className="title">XX后台管理系统</h3>
            <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入您的账号!',
                },
              ]}
            >
              <Input size="large" placeholder="请输入账号" prefix={<UserOutlined className="site-form-item-icon" />}/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入您的密码!',
                },
              ]}
            >
              <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined className="site-form-item-icon" />}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item>


            <Form.Item>
              <Button loading={loading} style={{width:"100%"}} type="primary" htmlType="submit">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

withRouter(Login)
