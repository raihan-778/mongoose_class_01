const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

//connect database

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice_mongoose"),
      console.log(`📦Database connection successful`);
  } catch {
    (err) => console.log(`Failed to connect database`, err);
  }
}

bootstrap();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
