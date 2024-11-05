import { ReportFormSchema } from "../zodSchema/reportForm";

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
  userId: string | null;
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

export interface OrgRow {
  id: number;
  orgId: string;
  parentId: string;
  level: string;
  Name: string;
  createBy: string;
}

export interface OrgChartNode {
  label: string;
  expanded?: boolean;
  data?: string;
  children?: OrgChartNode[];
}

export interface ReportType {
  reportsName: string;
  reportType: string;
}

export interface ReportFields 
  {
        name: keyof ReportFormSchema;
            label: string;
                type?: string;
                    multiline?: boolean;
                        rows?: number;
                          }
 