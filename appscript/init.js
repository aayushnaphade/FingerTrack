function createFingerprintToStudentMapping() {
  var ss = SpreadsheetApp.openById("19vaUrB1DNQtM1Uq_Pqvenu-LO6wQeoYjQnykttvlFK4");
  var mappingSheet = ss.getSheetByName("FingerprintMapping");
  var mappingData = mappingSheet.getDataRange().getValues();
  var fingerprintToStudentSerial = {};

  for (var i = 0; i < mappingData.length; i++) {
    var fingerid = mappingData[i][0];
    var stu_sr = mappingData[i][1];
    fingerprintToStudentSerial[fingerid] = stu_sr;
  }

  // Convert the mapping to a JSON string
  var mappingString = JSON.stringify(fingerprintToStudentSerial);

  // Store it as a script property
  PropertiesService.getScriptProperties().setProperty("FingerprintMapping", mappingString);
}
