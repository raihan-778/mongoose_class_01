//Create schema corresponding to the document interface

import mongoose, { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  // here "UserModel" & "IUserMethods "are used for creating custom instance methods
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

//schema for instance method creation

userSchema.method("fullName", function fullName() {
  //here we must use default function when we want to user "this property".by using array function we can not accesst any propety using "this "syntex
  return this.name.firstName + " " + this.name.lastName;
});

//schema for static method. static get infor from class so we can write query for getting data from calss.

userSchema.static("getAdminUsers", async function getAdminUsers() {
  return await this.find({ role: "admin" });
});

//create user model using corresponded interface & schema
const User = model<IUser, UserModel>("User", userSchema);
export default User;

//instance methodas ==> methods of instance

//class =>instance+ methods=> instance methods
