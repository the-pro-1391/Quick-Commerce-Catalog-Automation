// FUNCTION 1: ARS & Show in App Rules (Task 3)
function runVisibilityRules() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  for (var i = 2; i <= sheet.getLastRow(); i++) {
    var stockStatus = sheet.getRange(i, 6).getValue(); 
    if (stockStatus == "Out of Stock") {
      sheet.getRange(i, 10).setValue("FALSE"); 
    } else {
      sheet.getRange(i, 10).setValue("TRUE"); 
    }
  }
}

// FUNCTION 2: Permanent Delist Requests (Task 9)
function processDelists() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  for (var i = 2; i <= sheet.getLastRow(); i++) {
    var status = sheet.getRange(i, 6).getValue();
    if (status == "Discontinued") {
      sheet.getRange(i, 10).setValue("DELISTED");
      sheet.getRange(i, 1).setBackground("#FF0000"); // Highlights row in red
    }
  }
}

// FUNCTION 3: KVI Marker Marking (Task 10)
function tagKVI() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  for (var i = 2; i <= sheet.getLastRow(); i++) {
    var category = sheet.getRange(i, 3).getValue().toLowerCase();
    if (category == "veggies" || category == "milk") {
      sheet.getRange(i, 11).setValue("KVI_PRIORITY"); 
    }
  }
}
