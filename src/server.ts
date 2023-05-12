import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//connect database

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice_mongoose"),
      console.log(`📦Database connection successful`);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`); // this app.listion method is lifted up from outside fo "boostrap()" function so that we can listen the server at the the time of database connection is successfull.
    });
  } catch {
    (err: string) => console.log(`Failed to connect database`, err);
  }
}

bootstrap();
