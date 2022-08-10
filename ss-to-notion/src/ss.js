const getSpreadSheet = () => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("シート1");
  return sheet;
};
