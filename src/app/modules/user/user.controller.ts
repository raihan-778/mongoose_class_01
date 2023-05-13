import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //Create an interface
  // here "Request, Response, NextFunction" is built in data type writen in node package of express a third party library.
  const user = await createUserToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};
/* pattarn of calling
Route call=>Controller=> service

 */
