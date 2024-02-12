const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(process.env.SECERET_KEY);

const app = express();

app.use(
  cors({
    origin: ["https://flipkart-clone-taupe.vercel.app"],
  })
);

app.use(express.static("public"));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  const items = req.body.items;

  const lineItems = items.map(item => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.title,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://flipkart-clone-taupe.vercel.app/success",
    cancel_url: "https://flipkart-clone-taupe.vercel.app/cart",
  });

  res.json({ id: session.id });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
