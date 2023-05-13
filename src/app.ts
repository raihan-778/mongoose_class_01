//all app data is seperated from server.ts so that the code base can be more readable and organized.

import express, { Application, NextFunction, Request, Response } from "express";
//import cors
import cors from "cors";
import { Schema, connect, model } from "mongoose";

const app: Application = express();
app.use(express());
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* inserting test data in mongoDB
Step:1=> make an interface for type checking.
Step:2=> create an schema object
Step:3=> create a Model using interface & Schema.
Step:4=> Database Query

 */
// res.send("Hello World!");
// next();
//Create an interface
interface IUser {
  id: string;
  role: "student";

  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: "male" | "femail";
  email: string;
  contactNo: string;
  emergencyContactNo?: string;
  presentAddress?: string;
  permanentAddress: string;
}

//Create schema corresponding to the document interface

const userSchema = new Schema<IUser>({
  // in schema if you don't match the "optional or required "type with your interface mongoos will not show you any error but as a developer you shuld responable to match your schema type with your interface.In below example email is requird in interface but we did not add required type in schema, but mongoos did not give us any error. so we must carefull when write schema it should be mathed with our interface.
  id: { type: String, unique: true, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ["male", "femail"] },
  email: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  presentAddress: { type: String },
  permanentAddress: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);
// here "Request, Response, NextFunction" is built in data type writen in node package of express a third party library.

app.get("/", (req: Request, res: Response, next: NextFunction) => {});

run().catch((err) => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect("mongodb://127.0.0.1:27017/test");

  const user = new User({
    name: "Bill",
    email: "bill@initech.com",
    avatar: "https://i.imgur.com/dM7Thhn.png",
  });
  await user.save();

  console.log(user.email); // 'bill@initech.com'
}

export default app;
