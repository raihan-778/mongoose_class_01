//Create schema corresponding to the document interface

import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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
  dateOfBirth: { type: String },
  gender: { type: String, enum: ["male", "femail"] },
  email: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  presentAddress: { type: String },
  permanentAddress: { type: String, required: true },
});

//create user model using corresponded interface & schema
const User = model<IUser>("User", userSchema);
export default User;
