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
    const cartCollection = client.db("FoodShop").collection("cart");

    app.get("/", async (req, res) => {
      console.log("Food Shop server is running");
      res.send("FoodShop Server running");
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

    // Cart api here

    // get a cart
    app.get("/my-cart", async (req, res) => {
      try {
        const query = {};
        const cart = await cartCollection.find(query).toArray();
        res.send(cart);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });
    app.get("/cart", async (req, res) => {
      try {
        const { id } = req.query;
        console.log("id:", id);

        const result = await cartCollection.findOne(query);
        if (result) {
          res.json(result);
        } else {
          res.json({}); // Send an empty object if the food is not in the cart
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.post("/add-cart", async (req, res) => {
      try {
        const doc = req.body;
        const query = {
          foodId: req.body.foodId,
        };
        const alreadyAddedCart = await cartCollection.findOne(query);
        if (alreadyAddedCart)
          return res.send({
            message: "This product already added in your cart",
          });

        const result = await cartCollection.insertOne(doc);

        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // update cart quantity

    app.put("/cart/:id", async (req, res) => {
      try {
        const { id } = req.params;

        const { quantity } = req.body;
        const query = { foodId: id };
        const updatedCart = await cartCollection.findOneAndUpdate(
          query,
          { $set: { quantity: quantity } },
          { returnDocument: "after" } // Returns the updated document
        );
        console.log(updatedCart);
        if (updatedCart.foodId) {
          res.json(updatedCart);
        } else {
          res.status(404).json({ error: "Cart item not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    });
    // delete a cart
    app.delete("/cart/:id", async (req, res) => {
      try {
        const { id } = req.params;

        const query = { foodId: id };
        console.log(id);
        const result = await cartCollection.deleteOne(query);
        res.send(result);
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
