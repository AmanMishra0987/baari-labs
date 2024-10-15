import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [employee, setEmployee] = useState({});
  const [attendance, setAttendance] = useState({
    status: "out", 
    clockInTime: null, 
    totalHours: 0, 
  });
  const [dailyUpdates, setDailyUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeRes = await axios.get("http://localhost:3001/employee");
        const attendanceRes = await axios.get("http://localhost:3001/attendance");
        const updatesRes = await axios.get("http://localhost:3001/dailyUpdates");

        setEmployee(employeeRes.data);
        setAttendance(attendanceRes.data);
        setDailyUpdates(updatesRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  
  const clockIn = async () => {
    const clockInTime = new Date(); 
    await axios.put("http://localhost:3001/attendance", {
      status: "in",
      clockInTime,
    });
    setAttendance((prev) => ({
      ...prev,
      status: "in",
      clockInTime,
    }));
  };

  
  const clockOut = async () => {
    const clockOutTime = new Date(); 
    const clockInTime = new Date(attendance.clockInTime); 
  
    
    const timeDifference = (clockOutTime - clockInTime) / (1000 * 60 * 60); 
  
    await axios.put("http://localhost:3001/attendance", {
      status: "out",
      totalHours: attendance.totalHours + timeDifference,
    });
  
    setAttendance((prev) => ({
      ...prev,
      status: "out",
      totalHours: prev.totalHours + timeDifference,
      clockInTime: null, 
    }));
  };

  
  const addUpdate = async (update) => {
    const newUpdate = { date: new Date().toISOString().split("T")[0], update };
    await axios.post("http://localhost:3001/dailyUpdates", newUpdate);
    setDailyUpdates((prev) => [newUpdate, ...prev.slice(0, 4)]);
  };

  return (
    <AppContext.Provider
      value={{
        employee,
        attendance,
        dailyUpdates,
        loading,
        clockIn,
        clockOut,
        addUpdate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
