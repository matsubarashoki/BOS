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

export interface ReportFields {
  name: keyof ReportFormSchema;
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

export interface WikiType {
  id: number;
  parentsId: number | null;
  key: string;
  title: string;
  contents: string;
  children?: WikiType[];
}

export interface KPIGridRow {
  target_qualitative_category: string;
  target_qualitative: string;
  target_quantitative_category: string;
  target_quantitative: string;
}

export interface ActionPlanGridRow {
  No: string;
  contents: string;
  period: string;
  remarks: string;
}

export type ManagementPlan = {
  term: string | null;
  managementPhilosophy: string | null;
  mission: string | null;
  guidingPrinciple: string | null;
  managementVision: string | null;
  circumstance: string | null;
  strategy: string | null;
  kpi: KPIGridRow[];
  actionPlan: ActionPlanGridRow[];
};
