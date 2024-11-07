import { z } from "zod";

// レポートの基本スキーマ
const baseReportFormSchema = z.object({
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

// DairyReport用の拡張スキーマ（必要に応じて他のレポート用に追加）
const dairyReportSchema = baseReportFormSchema.extend({
  // DairyReportに特有のフィールドがある場合はここに追加
});

// DairyReport用の拡張スキーマ（必要に応じて他のレポート用に追加）
const bookReportSchema = baseReportFormSchema.extend({
  bookTitle: z.string().min(1, { message: "書籍名は必須です" }),
});

export const reportFormSchemas = {
  DairyReport: dairyReportSchema,
  BookReport: bookReportSchema,
  // 他のレポート用のスキーマが必要な場合はここに追加
};

export type ReportFormSchema =
  | z.infer<typeof dairyReportSchema>
  | z.infer<typeof bookReportSchema>;
