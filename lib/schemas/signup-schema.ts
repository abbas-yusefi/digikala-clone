import z, { string } from "zod";

export const signupSchema = z
  .object({
    email: string({ message: "لطفا این قسمت را خالی نگذارید" }).email({
      message: "ایمیل معتبر نیست",
    }),
    password: string({ message: "لطفا این قسمت را خالی نگذارید" })
      .min(12, {
        message: "رمز ورود باید حداقال 12 کاراکتر باشد",
      })
      .regex(/[A-Z]/, "حداقال یک حرف بزرگ انگلیسی")
      .regex(/[a-z]/, "حداقال یک حرف کوچک انگلیسی")
      .regex(/[0-9]/, "حداقال یک عدد")
      .regex(/[^A-Za-z0-9]/, "حداقال یک کارکتر خاص مثل @ یا # استفاده کنید"),
    confirmPassword: string({ message: "لطفا این قسمت را خالی نگذارید" }),
    username: string({ message: "لطفا این قسمت را خالی نگذارید" }).min(6, {
      message: "نام کاربری حداقل ۶ کاراکتر",
    }),
    fullName: string({ message: "لطفا این قسمت را خالی نگذارید" }).min(8, {
      message: "نام و نام خانوادگی حداقل ۸ کاراکتر",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزها مطابقت ندارند",
    path: ["confirmPassword"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
