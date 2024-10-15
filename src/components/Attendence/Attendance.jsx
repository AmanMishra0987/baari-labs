import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Card, Row, Col, Statistic } from "antd";

const Attendance = () => {
  const { attendance } = useContext(AppContext);

  return (
    <div className="attendance-container">
      <Row gutter={16} justify="center">
        <Col span={8}>
          <Card hoverable className="attendance-card" bordered={false}>
            <Statistic
              title="Status"
              value={attendance.status === "in" ? "Clocked In" : "Clocked Out"}
              valueStyle={{ color: attendance.status === "in" ? "#3f8600" : "#cf1322" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable className="attendance-card" bordered={false}>
            <Statistic
              title="Total Work Timing"
              value={attendance.totalHours.toFixed(2)}
              suffix="hours"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Attendance;
