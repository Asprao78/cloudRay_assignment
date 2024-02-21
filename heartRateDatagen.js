const fs = require('fs'); // Import the filesystem module

function generateHeartRateData(startDate, endDate) {
  const data = [];
  const startTime = new Date(startDate);
  const endTime = new Date(endDate);

  while (startTime < endTime) {
    data.push({
      beatsPerMinute: Math.floor(Math.random() * (125 - 60 + 1)) + 60,
      timestamps: {
        startTime: startTime.toISOString(),
        endTime: startTime.toISOString(),
      },
    });
    startTime.setMinutes(startTime.getMinutes() + 60); // Increment time by 1 hour
  }

  return data;
}

const heartRateData = generateHeartRateData('2023-05-01', '2023-06-01');

// Convert data to JSON string
const jsonData = JSON.stringify(heartRateData, null, 2);

// Save JSON data to a file
fs.writeFile('heartRateDataGen_May2023.json', jsonData, (err) => {
  if (err) {
    console.error('Error saving JSON data:', err);
  } else {
    console.log('Heart rate data saved to heartRateDataGen_May2023.json');
  }
});