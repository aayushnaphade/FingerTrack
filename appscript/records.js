function archiveAttendanceRecords() {
    // Define your spreadsheet and sheets
    var spreadsheet = SpreadsheetApp.openById("19vaUrB1DNQtM1Uq_Pqvenu-LO6wQeoYjQnykttvlFK4");
    var recordsSheet = spreadsheet.getSheetByName("Records");
  
    // Get the current date
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var monthName = Utilities.formatDate(currentDate, "GMT", "MMMM");
  
    // Define the archive folder in your Google Drive
    var archiveFolder = DriveApp.getFolderById("1XDe4hwLKb-CL_oHRQQIEIErVIuenrtxm");
  
    // Check if the year folder exists, and create it if not
    var yearFolder = archiveFolder.getFoldersByName(year.toString());
    if (!yearFolder.hasNext()) {
      yearFolder = archiveFolder.createFolder(year.toString());
    } else {
      yearFolder = yearFolder.next();
    }
  
    // Create a new spreadsheet and name it after the current month
    var newSpreadsheet = SpreadsheetApp.create(monthName + " " + year);
  
    // Move the new spreadsheet to the year folder
    DriveApp.getFileById(newSpreadsheet.getId()).moveTo(yearFolder);
  
    // Access the default sheet (Sheet1) of the new spreadsheet
    var newRecordsSheet = newSpreadsheet.getSheets()[0];
  
    // Get the data range from the records sheet
    var dataRange = recordsSheet.getDataRange();
  
    // Get the values from the data range
    var data = dataRange.getValues();
  
    // Set the values in the new sheet
    newRecordsSheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
    // Clear the records sheet
    dataRange.clearContent();
    recordsSheet.appendRow(["Enrollment Id.", "ID", "Name", "HB", "Room", "Status", "Time"]);
    // Log the archive action
    Logger.log("Archived attendance records for " + monthName + " " + year);
  }
  