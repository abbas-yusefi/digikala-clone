import { string, z } from "zod";

export const signinSchema = z.object({
  email: string({ message: "لطفا این قسمت را خالی نگذارید" }).email({
    message: "ایمیل معتبر نیست",
  }),
  password: string({ message: "لطفا این قسمت را خالی نگذارید" }).min(12, {
    message: "رمز ورود باید حداقال 12 کاراکتر باشد",
  }),
});

export type SigninSchema = z.infer<typeof signinSchema>;
