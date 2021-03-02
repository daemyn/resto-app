require('dotenv').config('../');

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;
const fs = require('fs');
const dbName = process.env.DB_NAME;
const client = new MongoClient(process.env.DB_URL, {
  useUnifiedTopology: true,
});

client.connect(function (err) {
  if (err) throw err;
  const db = client.db(dbName);
  // Import Categories
  let data = fs.readFileSync('./import/categories.json');
  let docs = JSON.parse(data.toString());
  let documents = docs.map(d => ({
    ...d,
    _id: ObjectId(d._id.$oid),
  }));
  db.collection('categories').insertMany(documents, function (cErr, result) {
    if (cErr) throw cErr;
    console.log('Inserted docs:', result.insertedCount);
    client.close();
  });

  // Import Items
  data = fs.readFileSync('./import/items.json');
  docs = JSON.parse(data.toString());
  documents = docs.map(d => ({
    ...d,
    _id: ObjectId(d._id.$oid),
    category: ObjectId(d.category.$oid),
  }));
  db.collection('items').insertMany(documents, function (cErr, result) {
    if (cErr) throw cErr;
    console.log('Inserted docs:', result.insertedCount);
    client.close();
  });
});
