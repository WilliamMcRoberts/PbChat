migrate((db) => {
  const collection = new Collection({
    "id": "wkrps66ege7y5i7",
    "created": "2022-12-20 04:05:19.238Z",
    "updated": "2022-12-20 04:05:19.238Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iyduabdy",
        "name": "messageText",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 200,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wkrps66ege7y5i7");

  return dao.deleteCollection(collection);
})
