import React, { useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import Dashboard from "./components/Dashboard/Dashboard";
import Attendance from "./components/Attendence/Attendance";
import DailyUpdate from "./components/DailyUpdate";
import { Layout, Menu, Button, theme } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const { Header, Content } = Layout;

const items = [
  {
    key: '1',
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: '2',
    label: <Link to="/attendance">Attendance</Link>,
  },
  {
    key: '3',
    label: <Link to="/daily-update">Daily Update</Link>,
  },
];

const NavbarClockButton = () => {
  const { attendance, clockIn, clockOut } = useContext(AppContext);

  return attendance.status === "in" ? (
    <Button type="primary" onClick={clockOut}>
      Clock Out
    </Button>
  ) : (
    <Button type="primary" onClick={clockIn}>
      Clock In
    </Button>
  );
};

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AppProvider>
      <Router>
        <Layout>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            />
           
            <NavbarClockButton />
          </Header>
          <Content
            style={{
              height: '100%',
              padding: '0 48px',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 615,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/daily-update" element={<DailyUpdate />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
