const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vtwnpfe.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const foodCollection = client.db("FoodShop").collection("Foods");
    const foodCategoryCollection = client
      .db("FoodShop")
      .collection("FoodCategory");

    app.get("/", async (req, res) => {
      console.log("Food Shop server is running");
      res.send("Server runing");
    });

    app.get("/foods", async (req, res) => {
      try {
        const query = {};
        const foods = await foodCollection.find(query).toArray();
        res.send(foods);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });
    app.get("/all-menu", async (req, res) => {
      try {
        const result = await foodCategoryCollection.find({}).toArray();
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.get("/menu/:categoryName", async (req, res) => {
      try {
        const name = req.params.categoryName;
        if (name === "All") {
          const result = await foodCollection.find({}).toArray();
          res.send(result);
        } else {
          const result = await foodCollection
            .find({ category: name })
            .toArray();
          res.send(result);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });
  } finally {
  }
}
run().catch((error) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Food Shop server is running on ${port}`);
});
