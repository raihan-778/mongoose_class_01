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
