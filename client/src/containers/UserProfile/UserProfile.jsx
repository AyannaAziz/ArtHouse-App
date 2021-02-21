import React, {useEffect, useState} from 'react';
import { Form, Input, Button, Select } from "antd";
import "./UserProfile.css";

const { TextArea } = Input;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

// creating users profile component to show users their saved information. 
const UserProfile = () => {
const [form] = Form.useForm();
const [bio, setBio] = useState("")
const [usr_name, setUsr_name] = useState("")
const [email, setEmail] = useState("")

const fetchPeople = () => {
  
  fetch('http://localhost:3001/api/users/eric')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    setEmail(data.email)
    setBio(data.bio)
    setUsr_name(data.usr_name)
  }) 

}

  useEffect(() => {
    fetchPeople()
  }, [])


  // called once data in input in form, sends to db
  const onFinish = (values) => {
    // Use this to send to Server
    console.log('This is the onFinish function: ', values);

    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      body: JSON.stringify({ data: values }),
      headers: { 'Content-Type': 'application/json' },
    });

    
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
      <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">
            ArtHouse Users Profile
          </h1>
          <div className="user-prog-holder">
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      {/* name field  */}
      <Form.Item
        name="name"
        label="User Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* email field  */}
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input 
        value={email}
        
        />
      </Form.Item>

      {/* password field  */}
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        rules={[
          {
            required: true,
            message: "Please input your bio!",
          },
        ]}
        hasFeedback
      >
       <TextArea rows={4} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
          </div>
        </div>
      </div>
    </div>
    )
};
  
  export default UserProfile;
