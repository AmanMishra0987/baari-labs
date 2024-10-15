import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button, Input, Card, Row, Col } from "antd";
import { EditOutlined, CheckCircleOutlined } from '@ant-design/icons';

const DailyUpdate = () => {
  const { dailyUpdates, addUpdate } = useContext(AppContext);
  const [newUpdate, setNewUpdate] = useState("");

  const handleSubmit = () => {
    if (newUpdate.trim()) {
      addUpdate(newUpdate);
      setNewUpdate("");
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontSize: '1.5rem' }}>Daily Updates</h2>
      <Input.TextArea
        value={newUpdate}
        onChange={(e) => setNewUpdate(e.target.value)}
        placeholder="Enter your daily update"
        rows={4}
        style={{ marginBottom: '10px' }}
      />
      <Button 
        type="primary" 
        onClick={handleSubmit} 
        style={{  marginTop: '10px' }}
      >
        Submit Update
      </Button>

      <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Last 5 Updates</h3>
      <Row gutter={16}>
        {dailyUpdates.slice(0, 5).map((update, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              title={`Update on ${update.date}`}
              
              style={{ marginBottom: '16px' }}
              hoverable
              bordered
            >
              <p>{update.update}</p>
              <CheckCircleOutlined style={{ color: 'green', fontSize: '20px' }} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DailyUpdate;
