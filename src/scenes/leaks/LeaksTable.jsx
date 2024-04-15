import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import BugReportIcon from '@mui/icons-material/BugReport';
import ErrorIcon from '@mui/icons-material/Error';
import { green, yellow, red } from '@mui/material/colors';

// Generate random timestamp
const getRandomTimestamp = () => {
  const date = new Date(Date.now() - Math.floor(Math.random() * 86400000)); // Random date within the last 24 hours
  return date.toLocaleString();
};

// Generate random hostname
const getRandomHost = () => {
  const prefixes = ['https://'];
  const suffixes = ['breachforums.cx', 't.me/darkforum'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix}${suffix}`;
};

// Generate random username
const getRandomUserName = () => {
  const prefixes = ['Analyst-'];
  const suffixes = ['1', '2', '3' ];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix}${suffix}`;
};

// Generate random severity
const getRandomSeverity = () => {
  const severities = ['Low', 'Medium', 'High'];
  return severities[Math.floor(Math.random() * severities.length)];
};

// Generate random alert source
const getRandomAlertSource = () => {
  const sources = ['Breached', 'Telegram', 'Telegram'];
  return sources[Math.floor(Math.random() * sources.length)];
};

// Generate random action
const getRandomAction = () => {
  const actions = ['Assigned', 'Unassigned', 'Resolved'];
  return actions[Math.floor(Math.random() * actions.length)];
};

const generateRandomAlert = () => {
  return {
    timestamp: getRandomTimestamp(),
    host: getRandomHost(),
    userName: getRandomUserName(),
    severity: getRandomSeverity(),
    alertSource: getRandomAlertSource(),
    action: getRandomAction(),
  };
};

const getSeverityIcon = (severity) => {
  switch (severity) {
    case 'Low':
      return <WarningIcon style={{ color: yellow[500] }} />;
    case 'Medium':
      return <BugReportIcon style={{ color: yellow[700] }} />;
    case 'High':
      return <ErrorIcon style={{ color: red[500] }} />;
    default:
      return null;
  }
};

const LeaksTable = () => {
  // Generate 10 random alerts
  const alerts = Array.from({ length: 3 }, generateRandomAlert);

  return (
    <TableContainer component={Paper} sx={{ background: '#141b2d', color: 'white' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>LINK</TableCell>
            <TableCell>ASSIGNED TO</TableCell>
            
            <TableCell>SOURCE</TableCell>
            <TableCell>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alerts.map((alert, index) => (
            <TableRow key={index}>
              <TableCell>{alert.timestamp}</TableCell>
              <TableCell>{alert.host}</TableCell>
              <TableCell>{alert.userName}</TableCell>
              <TableCell>{alert.alertSource}</TableCell>
              <TableCell>{alert.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaksTable;
