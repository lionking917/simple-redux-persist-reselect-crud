import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const NotFound: React.FC = () => {
  return (
    <Row justify="center">
      <Col style={{ textAlign: 'center' }}>
        <Typography>
          <Title>Page not found</Title>
        </Typography>

        <Row justify="center">
          <Title level={5}>
            <NavLink to="/">
              <Space>
                <HomeOutlined />
                Return to home page
              </Space>
            </NavLink>
          </Title>
        </Row>
      </Col>
    </Row>
  );
};

export default NotFound;
