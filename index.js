// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// IMPORTS FROM OTHER FILES
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const collectionRouter = require("./routes/collection");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://steins:J2O0JQRs3V1nFB3K@test-server.txdooqq.mongodb.net/Fashion-Shop?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(productRouter);
app.use(cartRouter);
app.use(collectionRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
