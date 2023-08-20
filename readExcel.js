/*
  Author: Bhavneet Singh
  Date: August 20, 2023
  Purpose: REad Excel file
*/

// constant to only accept excel file (xlsx)
const XLSX = require('xlsx');

//format Excel date serial number to JavaScript Date object
function excelDateToJSDate(excelDate) {
  return new Date((excelDate - (25567 + 1)) * 86400 * 1000);
}

// Read Excel data
function readExcelData(filePath) {
  
  const dataFile = XLSX.readFile(filePath);

  // Read the first sheet of the file
  const sheetName = dataFile.SheetNames[0]; 
  const worksheet = dataFile.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  return data;
}

module.exports = { excelDateToJSDate, readExcelData };
