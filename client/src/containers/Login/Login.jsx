import React from "react";
import { Link } from "react-router-dom";

// const Login = () => {
//     return (
//         <h1>This is the login page</h1>

//     )
// }

// export default Login;

import { Form, Input, Button, Checkbox } from "antd";
import "./Login.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);

    fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      body: JSON.stringify({ usr_name: values.usr_name, password: values.password }),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = async () => {
    const usr_name = "Ayanna";
    const password = "kitty123";
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="usr_name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
        <Button type="link">
          {" "}
          <Link to="/signup">Sign up Here</Link>
        </Button>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

// ReactDOM.render(<Login />, mountNode);
export default Login;
