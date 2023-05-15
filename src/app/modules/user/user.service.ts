import { getAdminUsers } from "./user.controller";
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //createUserToDB function receive a parameter which will must be IUser type & return value will be a Promise which is also IUser data format type.

  const user = await new User(payload); // here "user" is a instance of "User". "User" is a class.
  await user.save(); //here "save()" is a built-in method provided by mongoos which is created from user instance.
  // so we can call "save()" as instance method.But it is a build in instancee method.we can create custom instance method if we want.
  /** Instance method only work when we want to create a new user **/

  console.log(user.fullName());
  return user;
};

//get user without filter
export const getUsersFromDB = async (): Promise<IUser[]> => {
  // here User is a "class", & users is an "instance"
  const users = await User.find(); // here User.find() is a built-in instance method.
  return users;
};

// get user by id
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload });
  console.log(user?.fullName());
  return user;
};

//get user by id wiht filter

export const getUserByIdWithFilter = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    {
      id: payload,
    },
    { name: 1, password: 1, permanentAddress: 1 }
  );
  return user;
};

// get user by id
export const getAdminUsersFromDB = async (): Promise<IUser | null> => {
  const adminUsers = User.getAdminUsers();
  return adminUsers;
};
//static methods
// Static is a method attached with a class, so that we can call this methodd directy by using "class".
/*
const user = new User();// here user is an instance of User.we can call any method using dot notation such as
user.save().if we call any method using class directly is called static methods such as
User. anyMethod()// this is static method 
 */
