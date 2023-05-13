import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //createUserToDB function receive a parameter which will must be IUser type & return value will be a Promise which is also IUser data format type.l
  const user = await new User(payload);
  await user.save();
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};
