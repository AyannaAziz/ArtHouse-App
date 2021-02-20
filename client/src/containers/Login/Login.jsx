import React, {useState}  from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography, Col, Row } from "antd";
import "./Login.css";

const { Title } = Typography;

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
  // executes after submit is hit, sends data to db
  const onFinish = (values) => {
    console.log("Success:", values);

    //calling the route that has api/users/login endpoint
    fetch("http://localhost:3001/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        usr_name: values.usr_name,
        password: values.password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        // network failure, request prevented
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }

        return Promise.reject(new Error(response.statusText));
      })
      .then((response) => response.json())
      .then((result) => {
       console.log(result)
      })
      .catch((error) => {
        console.log(error)
        return null;
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
    <div>
      <Title style={{ textAlign: "center" }}>Welcome to ArtHouse!</Title>

      <Form
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        // {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row justify="center">
          <Col span={12}>
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
          </Col>
        </Row>
      </Form>
    </div>
  );
};

// ReactDOM.render(<Login />, mountNode);
export default Login;
