migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkrps66ege7y5i7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ma9yeqxh",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkrps66ege7y5i7")

  // remove
  collection.schema.removeField("ma9yeqxh")

  return dao.saveCollection(collection)
})
