import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUserByIdFilter,
  getUsers,
} from "./user.controller";

const router = express.Router();

router.get("/", getUsers); // when you call multiple routes please remeber that dynamic routes must be called after static routes such as  here"router.get("/admins", getAdminUsers);" this is a direct route & this is  "router.get("/:id", getUserById)" dynaminc route

router.get("/admins", getAdminUsers);
//get user by id
router.get("/:id", getUserById);
// router.get("/:id", getUserByIdFilter);
router.post("/create-user", createUser);

export default router;
// when you finished  set up moduler patterned folder structuer. Then onle remember the below patter to continue rest of the work
//Route=>controller=>service
