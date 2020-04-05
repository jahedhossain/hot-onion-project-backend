const MongoClient = require("mongodb").MongoClient;
// database uri
const uri = process.env.DB_URI;

// post: all foodProduct database sent
const foodProduct = (req, res) => {
  const foodProduct = req.body;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("foodsOnlineStore").collection("foodsStore");
    collection.insert(foodProduct, (error, documents) => {
      if (error) {
        console.log(error);
        res.status(500).send({ massage: error });
      } else {
        console.log(documents.ops[0]);
        res.send(documents.ops[0]);
      }
    });
    // client.close();
  });
};
module.exports.foodProduct = foodProduct;

// get: all foodProduct reserved
const allfoodProduct = (req, res) => {
  const foodProduct = req.body;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("foodsOnlineStore").collection("foodsStore");
    collection.find().toArray((error, documents) => {
      if (error) {
        console.log(error);
      } else {
        res.send(documents);
      }
    });
    // client.close();
  });
};
module.exports.allfoodProduct = allfoodProduct;

// get: single foodProductKey search query
const foodProductKey = (req, res) => {
  const key = req.params.key;
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("foodsOnlineStore").collection("foodsStore");
    collection.find({ key }).toArray((err, documents) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: err });
      } else {
        res.send(documents[0]);
      }
    });
    // client.close();
  });
};
module.exports.foodProductKey = foodProductKey;

// post: multiple foodProductKey search query
const foodProductKeys = (req, res) => {
  const productKey = req.body;
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("foodsOnlineStore").collection("foodsStore");
    collection.find({ key: { $in: productKey } }).toArray((err, documents) => {
      if (err) {
        console.log(err);
      } else {
        res.send(documents);
      }
    });
    // client.close();
  });
};
module.exports.foodProductKeys = foodProductKeys;
