function doGet(e) {
    var mappingString = PropertiesService.getScriptProperties().getProperty("FingerprintMapping");
    var fingerprintToStudentSerial = JSON.parse(mappingString);
    var ss = SpreadsheetApp.openById("19vaUrB1DNQtM1Uq_Pqvenu-LO6wQeoYjQnykttvlFK4");
    var sheet = ss.getSheetByName("Database");
    var data = sheet.getDataRange().getValues();
    var student_sr, dataRow;
    
  
  
    if (e.parameter.ayush === "get") {
      var namesData = {};
      for (var fingerid = 1; fingerid <= 999; fingerid++) {
         student_sr = fingerprintToStudentSerial[fingerid];
         dataRow = data[student_sr];
        if (student_sr) {
          var studentName = dataRow[5];
          namesData[fingerid] = { name: studentName };
        }
      }
  
      var jsonResponse = JSON.stringify(namesData);
      var output = ContentService.createTextOutput(jsonResponse);
      output.setMimeType(ContentService.MimeType.JSON);
      return output;
    } else {
      // ... (Your existing code for handling individual fingerprint updates)
    }
  }