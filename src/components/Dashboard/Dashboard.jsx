import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Layout, Button, Typography, Space, Card, Avatar, Divider, Statistic, Row, Col } from "antd";
import { UserOutlined, CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import './Dashboard.css';

const { Content } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const { employee, attendance, clockIn, clockOut } = useContext(AppContext);
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <Layout className="dashboard-layout">
      

      <Content className="dashboard-content">
        <Card className="employee-card" hoverable bordered={false}>
          <Space direction="vertical" size="large" align="center" className="card-content">
            <Avatar size={64} icon={<UserOutlined />} />
            <Title level={3} className="employee-name">Welcome, {employee.name}</Title>

            <Divider />

            <Row gutter={16} className="date-time-info">
              <Col span={12}>
                <Statistic
                  title="Entry Date"
                  value={currentDate}
                  prefix={<CalendarOutlined />}
                  valueStyle={{ color: '#3f8600' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Entry Time"
                  value={currentTime}
                  prefix={<ClockCircleOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
            </Row>

            <Divider />

            
            <div className="attendance-actions">
              {attendance.status === "in" ? (
                <Button type="primary" size="large" onClick={clockOut}>
                  Clock Out
                </Button>
              ) : (
                <Button type="primary" size="large" onClick={clockIn}>
                  Clock In
                </Button>
              )}
            </div>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
};

export default Dashboard;
