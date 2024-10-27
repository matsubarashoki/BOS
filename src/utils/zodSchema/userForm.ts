import { z } from "zod";

export const userFormSchema = z.object({
  userId: z.string().nullable().optional(),
  lastName: z.string(),
  firstName: z.string(),
  lastNameKane: z.string().regex(/^[ァ-ン]+$/, "カナ文字のみ入力してください"),
  firstNameKana: z.string().regex(/^[ァ-ン]+$/, "カナ文字のみ入力してください"),
  romanName: z.string().regex(/^[a-zA-Z]+$/, "半角英数字のみ入力してください"),
  dateOfBirth: z.string(),
  age: z.number().min(1, { message: "適切な年齢を入力してください" }),
  dateOfEmployment: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]+$/, "数字のみ入力してください"),
  department: z.string(), // 所属組織 のちのち別のオブジェクトにする
  position: z.string(),
  nearestStation: z.string(),
});

export type UserFormSchema = z.infer<typeof userFormSchema>;
