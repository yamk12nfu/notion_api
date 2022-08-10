function main() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const js = convertJson(ss.getDataRange().getValues());

  js.forEach((elem, index) => {
    const obj = {
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: elem.Name,
              },
            },
          ],
        },
        Description: {
          rich_text: [
            {
              text: {
                conetent: elem.Description,
              },
            },
          ],
        },
        Date: {
          type: "date",
          date: {
            start: Utilities.formatDate(elem.Date, "JST", "yyyy-MM-dd"),
            end: null,
          },
        },
      },
    };
    console.log(obj);
    postNotion(obj);
    Utilities.sleep(1000);
  });
}

const postNotion = (obj) => {
  const options = {
    method: "post",
    headers: {
      'Content-Type':'application/json',
      'Notion-Version':'2021-05-13',
      'Autorization':"Bearer "+NOTION_TOKEN,
    },
    payload: JSON.stringify(obj),
  };
  console.log(options);
  var response = UrlFetchApp.fetch(`https://api.notion.com/v1/pages`, options);
  console.log(response);
};

const convertJson = (range) => {
  const key = range[0];

  const js = range.slice(1).map((row) => {
    const obj = {};
    row.map((item, index) => {
      obj[String(key[index])] = item;
    });
    return obj;
  });

  return js;
};
