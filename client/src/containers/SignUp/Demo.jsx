import React, { useState } from "react"
import { Form, Input, Button, Select } from "antd";


import { Upload, message } from 'antd';

import "./SignUp.css";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

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

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  
  
const Demo = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false)
  const [imageUrl, setimageUrl] = useState('')
 // const [uploadButton, setuploadButton] = useState('')

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log('This should be our file: ', info.file.originFileObj);
      getBase64(info.file.originFileObj, imageUrl => {
        setimageUrl(info.file.originFileObj)
        setLoading(false)
      });
    }
  };

  const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    // called once data in input in form, sends to db
  const onFinish = (values) => {
    // Use this to send to Server
    console.log('This is the onFinish function: ', values);

   

    try {
      let updatedValues;
      const reader = new FileReader();
      reader.readAsDataURL(values.photos[0].originFileObj);
      reader.addEventListener("load", async function () {
        // convert image file to base64 string
         updatedValues = { ...values, photos: reader.result }
        console.log(updatedValues);
        await fetch('http://localhost:3001/api/users', {
          method: 'POST',
          body: JSON.stringify({ data: updatedValues }),
          headers: { 'Content-Type': 'application/json' },
        });
      }, false);

  
    } catch (err) {
      console.error(err);
      
    }
  };


  const onReset = () => {
    form.resetFields();
  };


  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    //change "return e && e.fileList" for
    return e && e.fileList.slice(-1);
  };

  return (
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
        <Input />
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

      {/* upload avatar */}
      <Form.Item
        name="photos"
        label="Photos"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://localhost:3001"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      </Form.Item>

      {/* end avi */}

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null;
        }}
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
  );
};
export default Demo;
