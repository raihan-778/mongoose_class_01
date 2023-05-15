import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUserByIdWithFilter,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //Create an interface
  // here "Request, Response, NextFunction" is built in data type writen in node package of express a third party library.
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
//get users without filter
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  console.log("hitted from getUserById");

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserByIdFilter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdWithFilter(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const adminUser = await getAdminUsersFromDB();
  console.log("hitted from getAdminUsers");
  res.status(200).json({
    status: "success",
    data: adminUser,
  });
};
/* pattarn of calling
Route call=>Controller=> service

 */
