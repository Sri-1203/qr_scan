const express = require('express');
const { google } = require('googleapis');
const dayjs = require('dayjs');
const fs = require('fs');

// Load Google Sheets API credentials
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Function to initialize Google Sheets API
async function accessGoogleSheet() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Define the /DAA route with GET method
app.get('/DAA', async (req, res) => {
  try {
    const sheets = await accessGoogleSheet();
    
    // Set your Google Sheets ID and the range where you want to add data
    const spreadsheetId = '1yWoxGjb89PqidC_bKUe7d389HohXf045hE5f_R8Iy5Q';
    const range = 'Sheet1!A:B'; // Modify as per your sheet structure

    // Prepare data to append (name "DAA" and current timestamp)
    const values = [
      ['DAA LAB', dayjs().format()]
    ];

    // Append the data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    });

    res.send('Data added to Google Sheet successfully.');
  } catch (error) {
    console.error('Error adding data to Google Sheet:', error);
    res.status(500).send('Error adding data to Google Sheet.');
  }
});
app.get('/MATH', async (req, res) => {
  try {
    const sheets = await accessGoogleSheet();
    
    // Set your Google Sheets ID and the range where you want to add data
    const spreadsheetId = '1yWoxGjb89PqidC_bKUe7d389HohXf045hE5f_R8Iy5Q';
    const range = 'Sheet1!A:B'; // Modify as per your sheet structure

    // Prepare data to append (name "DAA" and current timestamp)
    const values = [
      ['MATH LAB', dayjs().format()]
    ];

    // Append the data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    });

    res.send('Data added to Google Sheet successfully.');
  } catch (error) {
    console.error('Error adding data to Google Sheet:', error);
    res.status(500).send('Error adding data to Google Sheet.');
  }
});
app.get('/ML', async (req, res) => {
  try {
    const sheets = await accessGoogleSheet();
    
    // Set your Google Sheets ID and the range where you want to add data
    const spreadsheetId = '1yWoxGjb89PqidC_bKUe7d389HohXf045hE5f_R8Iy5Q';
    const range = 'Sheet1!A:B'; // Modify as per your sheet structure

    // Prepare data to append (name "DAA" and current timestamp)
    const values = [
      ['ML LAB', dayjs().format()]
    ];

    // Append the data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    });

    res.send('Data added to Google Sheet successfully.');
  } catch (error) {
    console.error('Error adding data to Google Sheet:', error);
    res.status(500).send('Error adding data to Google Sheet.');
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
