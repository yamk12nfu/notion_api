// notion api関連の処理をまとめるファイル

// notionのDBの内容を取得。
const getNotionDbData = () => {
  const url = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;

  const headers = {
    'content-type' : 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + NOTION_TOKEN,
    'Notion-Version': '2022-06-28',
  };
  const options = {
    'method': 'post',
    'headers': headers,
  }

  const response = UrlFetchApp.fetch(url, options);
  const result = JSON.parse(response);
  return result;
}

// notionにスプシの内容を渡す。
const postNotionDb = (postData) => {
  const url = 'https://api.notion.com/v1/pages';
  const headers = {
    'Authorization': 'Bearer '+ NOTION_TOKEN,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28',
  }

  const options = {
    'method': 'POST',
    'headers': headers,
    'payload': JSON.stringify(postData),
  }

  const response = UrlFetchApp.fetch(url, options);
  const result = JSON.parse(response);
  return result
}
