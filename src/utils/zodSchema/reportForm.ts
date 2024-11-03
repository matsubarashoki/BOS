import { z } from "zod";

export const reportFormSchema = z.object({
  reportId: z.string().nullable().optional(),
  title: z.string().min(1, { message: "タイトルは必須です" }),
  submissionDate: z.date(),
  content: z
    .string()
    .min(1, { message: "必須です" })
    .max(1500, "入力テキストは1500文字以内で入力してください。"),
  reporter: z.string().min(1, { message: "報告者は必須です" }),
  recipient: z.string().min(1, { message: "報告先は必須です" }),
});

export type ReportFormSchema = z.infer<typeof reportFormSchema>;
