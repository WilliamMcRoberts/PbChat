migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkrps66ege7y5i7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyduabdy",
    "name": "text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkrps66ege7y5i7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyduabdy",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
