import React from "react";
import './style.module.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import Post from './Post';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
 
const Feed = () => {
    return(
  <div>
   <Row>
      <Col span={8}> <Button type="primary">Primary Button</Button></Col>
      <Col span={8} offset={8}>
      <Input placeholder="default size" prefix={<UserOutlined />} />
      </Col>
    </Row>
    <Row className="site-card-border-less-wrapper">
      <Col span={12} offset={6}>
       <Post/>
      </Col>
    </Row>
    
</div>

   
    )

}

export default Feed;