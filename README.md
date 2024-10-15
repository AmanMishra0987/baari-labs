# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 # Employee Attendance & Daily Updates Dashboard

This is a web application for employees to track attendance and submit daily updates. The application is built using **React**, **Ant Design** for UI components, and **Axios** for API communication. It integrates features like clocking in/out, viewing total work hours, and adding daily updates.

## Features

- **Clock In/Clock Out**: Employees can clock in and out, with the total work hours tracked.
- **Attendance Management**: Displays employee's attendance status and total work time.
- **Daily Updates**: Employees can submit daily work updates.
- **Responsive UI**: Built with **Ant Design** to ensure a user-friendly interface on all devices.
  
## Tech Stack

- **React.js**: For building the UI.
- **Ant Design**: For UI components and styling.
- **Axios**: For HTTP requests to the backend API.
- **React Router**: For page navigation.
- **Context API**: For global state management.

## Project Structure

```bash
├── public
├── src
│   ├── components
│   │   ├── Dashboard
│   │   │   └── Dashboard.js
│   │   ├── Attendance
│   │   │   └── Attendance.js
│   │   └── DailyUpdate.js
│   ├── context
│   │   └── AppContext.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md




## Clone the repository
git clone https://github.com/AmanMishra0987/baari-labs.git
cd baari-labs

## Install the dependencies
npm install

## API Endpoints
json-server --watch db.json --port 3001

## Project start
npm run dev 

