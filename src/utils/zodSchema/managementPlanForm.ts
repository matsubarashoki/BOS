import { z } from "zod";

// KPIGridRow の Zod スキーマ
const KPIGridRowSchema = z.object({
  target_qualitative_category: z.string(),
  target_qualitative: z.string(),
  target_quantitative_category: z.string(),
  target_quantitative: z.string(),
});

// ActionPlanGridRow の Zod スキーマ
const ActionPlanGridRowSchema = z.object({
  No: z.string(),
  contents: z.string(),
  period: z.string(),
  remarks: z.string(),
});

// ManagementPlan の Zod スキーマ
export const ManagementPlanSchema = z.object({
  term: z.string().nullable(), // null 許容
  managementPhilosophy: z.string().nullable(), // null 許容
  mission: z.string().nullable(), // null 許容
  guidingPrinciple: z.string().nullable(), // null 許容
  managementVision: z.string().nullable(), // null 許容
  kpi: z.array(KPIGridRowSchema), // KPIGridRow の配列
  actionPlan: z.array(ActionPlanGridRowSchema), // ActionPlanGridRow の配列
});

// 型チェック用
export type ManagementPlanSchema = z.infer<typeof ManagementPlanSchema>;
