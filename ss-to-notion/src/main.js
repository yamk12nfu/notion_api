function main() {
  const postData = {
    "parent": { "database_id": DATABASE_ID },
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": "test_man1"
            }
          }
        ]
      },
      "tag1": {
        "rich_text": [
          {
            'text': {
              'content': 'testtt'
            }
          }
        ]
      }
    }
  };
  const res = postNotionDb(postData);
  console.log(res);
}
