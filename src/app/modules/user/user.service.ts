import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //createUserToDB function receive a parameter which will must be IUser type & return value will be a Promise which is also IUser data format type.

  const user = await new User(payload); // here "user" is a instance of "User". "User" is a class.
  await user.save(); //here "save()" is a built-in method provided by mongoos which is created from user instance.
  // so we can call "save()" as instance method.But it is a build in instancee method.we can create custom instance method if we want.
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
