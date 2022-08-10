function main() {
  const ss = getSpreadSheet();
  const range = ss.getRange("A2");
  range.setValue("value set test");
}
