const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const controller = require("./controller");

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kgl0o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//Verify JWT Token
const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  const token = auth.split(" ")[1];
  jwt.verify(token, process.env.ACC_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    // console.log("decoded", decoded);
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("wareHouse").collection("product");
    app.get("/all-product", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      if (req.query.brand) {
        const brandName = req.query.brand;
        const query = { brand: brandName };
        const cursor = productCollection.find(query);
        const products = await cursor.toArray();
        res.send(products);
      } else {
        const query = {};
        const cursor = productCollection.find(query);
        let products;
        if (page || size) {
          products = await cursor
            .skip(page * size)
            .limit(size)
            .toArray();
        } else {
          products = await cursor.toArray();
        }
        res.send(products);
      }
    });

    //Create a new access token
    app.post("/login", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACC_TOKEN, {
        expiresIn: "1d",
      });
      res.send({ token });
    });

    app.get("/my-item", verifyToken, async (req, res) => {
      const decodedEmail = req.decoded.email;
      const email = req.query.user;
      if (email === decodedEmail) {
        const query = { user: email };
        const cursor = productCollection.find(query);
        const products = await cursor.toArray();
        res.send(products);
      } else {
        res.status(403).send("Access Denied");
      }
    });

    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const item = await productCollection.findOne(query);
      res.send(item);
    });

    app.get("/pagecount", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const count = await cursor.count();
      res.send({ count });
    });

    app.put("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: req.body,
      };
      const result = await productCollection.updateOne(
        query,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.post("/product/update/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productCollection.updateOne(query, {
        $set: req.body,
      });
      res.send(result);
    });

    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/add-product", async (req, res) => {
      const addItem = req.body;
      const result = await productCollection.insertOne(addItem);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

// client.connect((err) => {
//   const collection = client.db("wareHouse").collection("Products");
//   console.log("Database connected with wareHouse");
//   // perform actions on the collection object
//   client.close();
// });

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is set");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
