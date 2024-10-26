export type ScreenPath = {
  [key: string]: {
    name: string;
  };
};

export interface addUserFormData {
  name: string;
  email: string;
}

export interface userType {
  id: string | null;
  lastName: string;
  firstName: string;
  lastNameKane: string;
  firstNameKana: string;
  romanName: string;
  dateOfBirth: string;
  age: number;
  dateOfEmployment: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  nearestStation: string;
}
