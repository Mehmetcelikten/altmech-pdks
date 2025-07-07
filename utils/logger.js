const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'server.log');

const logger = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  console.log(logMessage.trim());
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) console.error('❌ Error writing to log file:', err.message);
  });
};

module.exports = logger;
