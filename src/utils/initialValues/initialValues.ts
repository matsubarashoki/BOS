import { OrgFormSchema } from "../zodSchema/orgForm";
import { UserFormSchema } from "../zodSchema/userForm";

export const userDefoValue: UserFormSchema = {
  userId: null,
  lastName: "",
  firstName: "",
  lastNameKane: "",
  firstNameKana: "",
  romanName: "",
  dateOfBirth: "",
  age: 0,
  dateOfEmployment: "",
  email: "",
  phone: "",
  department: "",
  position: "",
  nearestStation: "",
};

export const orgDefoValue: OrgFormSchema = {
  id: 0,
  orgId: "",
  parentId: "",
  level: "",
  Name: "",
  createBy: "",
};
