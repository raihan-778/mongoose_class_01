import { getAdminUsers } from "./user.controller";
import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";

  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "femail";
  email: string;
  contactNo: string;
  emergencyContactNo?: string;
  presentAddress?: string;
  permanentAddress: string;
}

// interface for static methods

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

// Put all user instance methods in this interface:
export interface IUserMethods {
  // these is a instance for making custom instance methods.now go to => user.method.ts fiel and type a new model
  fullName(): string;
}
