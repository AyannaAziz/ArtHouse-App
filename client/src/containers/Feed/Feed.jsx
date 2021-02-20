import React from "react";
import './Feed.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import Post from './Post';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
 
// creating Feed container 
const Feed = () => {
    return(
  <div>
    
   <Row>
   
      <Col span={8}> <Button type="primary">New Post!</Button></Col>
      <Col span={8} offset={8}>
      <Input placeholder="Search for posts here" prefix={<UserOutlined />} />
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