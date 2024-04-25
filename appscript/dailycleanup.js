function cleanup() {
    var spreadsheet = SpreadsheetApp.openById("19vaUrB1DNQtM1Uq_Pqvenu-LO6wQeoYjQnykttvlFK4");
    var records = spreadsheet.getSheetByName("DayRecord");
    var dataRange = records.getDataRange();
    dataRange.clearContent();
    records.appendRow(["Enrollment Id", "ID", "Name", "HB", "Room", "Status", "Time"]);
  }
  