import { z } from "zod";

export const orgFormSchema = z.object({
  id: z.number().nullable().optional(),
  orgId: z.string(),
  parentId: z.string(),
  level: z.string(),
  Name: z.string(),
  createBy: z.string(),
});

export type OrgFormSchema = z.infer<typeof orgFormSchema>;
