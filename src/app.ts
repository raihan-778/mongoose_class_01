//all app data is seperated from server.ts so that the code base can be more readable and organized.

import express, { Application } from "express";
//import cors
import cors from "cors";

const app: Application = express();

//Application roures

import userRoute from "./app/modules/user/user.route";

app.use(express());
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoute);
//this pattern will not work to get data because here we are not only getting data but also configuring userRoute, so that we have to use  format "app.use" instade of "app.get"
app.use("/api/v1/user", userRoute);

/* inserting test data in mongoDB
Step:1=> make an interface for type checking.done!
Step:2=> create an schema object.done!
Step:3=> create a Model using interface & Schema.done!
Step:4=> Database Query created on model. done!
Step:5=> Sepert all functionality using any pattern like MVC(Modal View Controller) or Moduler.Now a day Moduler is mostly used patter so we follow moduler patter.
Create our Moduler patter like below:
1=> create a folder name "app"=>create a folder name "module"=>create a folder name "user"=>create all user realated files
/* 
moduler patter breakdown
interface code =>interface.ts
schema & model code =>model.ts
router function =>controller.ts
route =>route.ts
database Query Function=>service.ts

 */
/*

**MVC pattern**. => In MVC patter all kind if model is saved in one folder. for View we can use any populer fron end library like React, Vue or Next js.For controller we have to create another folder and thus, folder for Utilities, interface, routes etc.

***Moduler Pattern***=> In Moduler pattern all functionalities used for user will be stored on one folder named User.In this folder we will keep, user.model.ts, user.controller.ts, user.interface.ts, user.utils.ts, user.route.ts and so on. That means user related all files will kept in a single folder which is more structured and efficient for developer.Thats the reason Moduler pattern is more populer now a days.

 */

export default app;
