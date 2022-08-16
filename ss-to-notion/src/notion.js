// notion api関連の処理をまとめるファイル

const getNotionDbData = () => {
  const url = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;

  const headers = {
    'content-type' : 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + NOTION_TOKEN,
    'Notion-Version': '2022-06-28',
  };
  const options ={
    'method': 'post',
    'headers': headers,
  }

  const notionData = UrlFetchApp.fetch(url, options);
  const result = JSON.parse(notionData);
  return result;
}


