import logo from './logo.svg';
import React from 'react';
import { Form, Input, Button, Select, Space, Tooltip, Typography } from 'antd';
import './App.css';

function App() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const a = 1;
  const b = 2;

  const { Option } = Select;

  const onFinish1 = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Space wrap>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          disabled
          options={[{ value: 'lucy', label: 'Lucy' }]}
        />
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          loading
          options={[{ value: 'lucy', label: 'Lucy' }]}
        />
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          allowClear
          options={[{ value: 'lucy', label: 'Lucy' }]}
          placeholder="select it"
        />
      </Space>
      {a === 1? <p style={{ textAlign: 'center' }}>{a}</p> : null}
      {b === 1? <p style={{ textAlign: 'center' }}>{b}</p> : null}

      <Form
        name="complex-form"
        onFinish={onFinish1}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Username">
          <Space>
            <Form.Item
              name="username"
              noStyle
              rules={[{ required: true, message: 'Username is required' }]}
            >
              <Input style={{ width: 160 }} placeholder="Please input" />
            </Form.Item>
            <Tooltip title="Useful information">
              <Typography.Link href="#API">Need Help?</Typography.Link>
            </Tooltip>
          </Space>
        </Form.Item>
        <Form.Item label="Address">
          <Space.Compact>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Select placeholder="Select province">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={['address', 'street']}
              noStyle
              rules={[{ required: true, message: 'Street is required' }]}
            >
              <Input style={{ width: '50%' }} placeholder="Input street" />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
          {/* <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          > */}
            <Input placeholder="Input birth year" />
          {/* </Form.Item> */}
          {/* <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          > */}
            <Input placeholder="Input birth month" />
          {/* </Form.Item> */}
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form.Item
          noStyle
      >
        {
          [
            <div>1</div>,
            <div>2</div>,
            <div>3</div>,
            <div>4</div>,
            <div>5</div>,
          ]
        }
      </Form.Item>
    </div>
  );
}

export default App;
