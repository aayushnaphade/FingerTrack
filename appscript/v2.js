function doGet(e) {
    var fingerid = e.parameter.fingerid;
    var stat = e.parameter.stat;
    var mappingString = PropertiesService.getScriptProperties().getProperty("FingerprintMapping");
    var fingerprintToStudentSerial = JSON.parse(mappingString);
  
    if (fingerprintToStudentSerial.hasOwnProperty(fingerid)) {
      var student_sr = fingerprintToStudentSerial[fingerid];
    } else {
      var notFoundResponse = "Fingerprint not found in the mapping.";
      var notFoundOutput = ContentService.createTextOutput(notFoundResponse);
      notFoundOutput.setMimeType(ContentService.MimeType.TEXT);
      return notFoundOutput;
    }
  
    var ss = SpreadsheetApp.openById("19vaUrB1DNQtM1Uq_Pqvenu-LO6wQeoYjQnykttvlFK4");
    var sheet = ss.getSheetByName("Database");
    var dayrec = ss.getSheetByName("DayRecord");
    var data = sheet.getDataRange().getValues();
    var studentName, rollNo, id_no, hb, room;
    
  
    var row = student_sr; // Adjust for the header row
    var dataRow = data[row];
  
    if (dataRow) {
      studentName = dataRow[5]; // 4 for the name column
      rollNo = dataRow[4]; // 3 for the enrollment no column
      id_no = dataRow[3]; // 2 for the id no column
      room = dataRow[9]; // 5 for the room column
      hb = dataRow[8]; // 4 for the room column
      
    }    
      // Update the specific cell in the database sheet
      sheet.getRange(row + 1, 7).setValue(stat);
  
      // Append the record
      var recordSheet = ss.getSheetByName("Records");
      var currentTime = new Date();
      var formattedDate = Utilities.formatDate(currentTime, "IST", "dd/MM/yyyy");
      var formattedTime = Utilities.formatDate(currentTime, "IST", "hh:mm a");
      sheet.getRange(row + 1, 8).setValue(formattedTime + " " + formattedDate);
  
      // Retrieve the last recorded date from Properties
      var lastRecordedDate = PropertiesService.getScriptProperties().getProperty("lastRecordedDate");
  
      if (formattedDate != lastRecordedDate) {
        recordSheet.appendRow(["Date: " + formattedDate]);
        recordSheet.appendRow(["Enrollnment ID", "ID", "Name", "HB", "Room No", "Status", "Time"]);
        PropertiesService.getScriptProperties().setProperty("lastRecordedDate", formattedDate);
      }
  
      recordSheet.appendRow([rollNo, id_no, studentName, hb, room, stat, formattedTime]);
      dayrec.appendRow([rollNo, id_no, studentName, hb, room, stat, formattedTime]);
  
    // Create a plain text response
    var response = "Status: " + stat;
    var output = ContentService.createTextOutput(response);
    output.setMimeType(ContentService.MimeType.TEXT);
  
    return output;
  }