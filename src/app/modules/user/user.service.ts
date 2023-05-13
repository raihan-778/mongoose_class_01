import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "7785jgjhg8",
    role: "student",

    password: "janina",
    name: {
      firstName: "Mr. Unknown",
      middleName: "Uddin",
      lastName: "Arif",
    },
    dateOfBirth: "5/7/2000",
    gender: "male",
    email: "dream@gmail.com",
    contactNo: "01746453834",
    emergencyContactNo: "01495856875",
    presentAddress: "ctg",
    permanentAddress: "ctg",
  });
  await user.save();
  return user;
};
export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};
