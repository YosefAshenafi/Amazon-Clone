const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ91MCd1SxjC1L1buciU7JAkkNafX4Srtkrbzoj5H9lUKbxpaHKM2P2E3UUHmKcU3zSbCVoouEQ8wU9AQBZcSiY00sTtMrXHA"
);
//API

// App Config
const app = express();
// Middle Ware
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved BOOM", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log("Created");
  //   OK -- created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);
//example end point
// http://localhost:5001/fir-a3f16/us-central1/api
