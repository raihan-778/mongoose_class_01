import express from "express";
import { createUser } from "./user.controller";

const router = express.Router();

router.get("/");
router.post("/create-user", createUser);

export default router;
// when you finished  set up moduler patterned folder structuer. Then onle remember the below patter to continue rest of the work
//Route=>controller=>service