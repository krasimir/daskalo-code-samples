import React from 'react';
import ReactDOM from 'react-dom/client';
import { Row, Col, Breadcrumb, Typography } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

function App() {
  return (
    <Row>
      <Col span={5}>
        <Title level={2}>Design Systems</Title>
      </Col>
      <Col span={19}>
      <Breadcrumb
        items={[
          {
            href: '',
            title: <HomeOutlined />,
          },
          {
            href: '',
            title: (
              <>
                <UserOutlined />
                <span>Application List</span>
              </>
            ),
          },
          {
            title: 'Application',
          },
        ]}
      />
      </Col>
    </Row>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);