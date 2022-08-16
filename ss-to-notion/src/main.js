function main() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const range = ss.getDataRange().getValues();
  const jsonData = convertJson(range)
  postData(jsonData);
}

const convertJson = (range) =>  {
  const key = range[0];

  const jsonData = range.slice(1).map(
    function (row) {
      const obj = {};
      row.map(function (item, index) {
        obj[String(key[index])] = item;
      }
      );
      return obj;
    });
  return jsonData;
}

const postData = (data) => {
  data.forEach((elem) => {
    const obj = {
      'parent': {
        'database_id': DATABASE_ID
      },
      'properties': {
        'Name': {
          'title': [
            {
              'text': {
                'content': elem.Name
              }
            }
          ]
        },
        'Date': {
          'type': 'date',
          'date': {
            'start': Utilities.formatDate(elem.Date, 'JST', 'yyyy-MM-dd'),
            'end': null
          }
        },
        'Description': {
          'rich_text': [
            {
              'text': {
                'content': elem.Description
              }
            }
          ]
        }
      }
    };

    const res = postNotionDb(obj);
    Utilities.sleep(1000);
    console.log(res)
  })
}
