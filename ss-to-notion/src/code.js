function main() {
  const res = getNotionDbData();
  console.log(res);
}

const notion = (text) => {
  const url = 'https://api.notion.com/v1/pages';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + NOTION_TOKEN,
    'Notion-Version': '2022-06-28',
  };

  const postData = {
    "parent": {
      "type": "database_id",
      "database_id": DATABASE_ID
    },
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": text,
            }
          }
        ]
      }
    }
  };

  const options = {
    "method": "post",
    "headers": headers,
    "muteHttpExceptions" : true,
    "payload": JSON.stringify(postData),
  };

  return UrlFetchApp.fetch(url, options);
}

const getNotionDbData = () => {
  const url = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;

  let headers = {
    'content-type' : 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + NOTION_TOKEN,
    'Notion-Version': '2022-06-28',
  };
  let options ={
    'method': 'post',
    'headers': headers,
  }

  const notionData = UrlFetchApp.fetch(url, options);
  const result = JSON.parse(notionData);
  return result;
}
