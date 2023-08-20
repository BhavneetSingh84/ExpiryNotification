/*
  Author: Bhavneet Singh
  Date: August 20, 2023
  Purpose: Trigger date and consitional statements for alerts/notification emails
*/

const { excelDateToJSDate, readExcelData } = require('./readExcel');
const sendEmail = require('./sendEmail');

// Get today's date
const today = new Date();

// Excel file path
const data = readExcelData('TestDatabase.xlsx');

// Iterate through the data and format date cells
for (let row of data) {
  const expiryDateString = row[4]; // Alter the index if row for date changes

  // checking if expiry date is string - MM/DD/YYYY
  if (typeof expiryDateString === 'string') {

    const cellDate = new Date(expiryDateString);

    // Calculate the difference in days
    const timeDiff = cellDate - today;
    const daysDifference = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // 30 days prior alert
    if (daysDifference === 30) {
      sendEmail({
        from: 'noreply@example.com',
        to: 'noname@example.com',
        subject: `Expiry for ${row[0]} - ${row[1]} in a month!`,
        text: `This is a reminder of the upcoming expiration on ${cellDate.toDateString()} for ${row[0]} - ${row[1]}.`
      });
    }

    // 7 days prior alert
    if (daysDifference === 7) {
      sendEmail({
        from: 'noreply@example.com',
        to: 'noname@example.com',
        subject: `Expiry for ${row[0]} - ${row[1]} is in a week!`,
        text: `This is a reminder of the upcoming expiration on ${cellDate.toDateString()} for ${row[0]} - ${row[1]}.`
      });
    }

    // 3 days prior alert
    if (daysDifference === 3) {
      sendEmail({
        from: 'noreply@example.com',
        to: 'noname@example.com',
        subject: `Expiry for ${row[0]} - ${row[1]} is in 3 days!`,
        text: `This is a reminder of the upcoming expiration on ${cellDate.toDateString()} for ${row[0]} - ${row[1]}.`
      });
    }

    // on the day of alert alert
    if (daysDifference === 0) {
      sendEmail({
        from: 'noreply@example.com',
        to: 'noname@example.com',
        subject: `Expiry for ${row[0]} - ${row[1]} is Today!`,
        text: `This is a reminder of the upcoming expiration on ${cellDate.toDateString()} for ${row[0]} - ${row[1]}.`
      });
    }


    // expired alert will keep on going unless date is altered in excel file 
    if (daysDifference < 0) {
      sendEmail({
        from: 'noreply@example.com',
        to: 'noname@example.com',
        subject: `Overdue Notification`,
        text: `This is a reminder for ${row[0]} - ${row[1]} has expired on ${cellDate.toDateString()}.`
      });
    }
  }
}
