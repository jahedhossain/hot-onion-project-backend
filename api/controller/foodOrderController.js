const MongoClient = require("mongodb").MongoClient;
// database uri
const uri = process.env.DB_URI;

// post: all foodProduct database sent
const foodOrder = (req, res) => {
  const foodOrder = req.body;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("foodsOnlineStore").collection("foodOrder");
    collection.insertOne(foodOrder, (error, documents) => {
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
module.exports.foodOrder = foodOrder;
