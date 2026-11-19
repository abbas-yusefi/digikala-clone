import { z } from "zod";

export const addressSchema = z.object({
  recipient_name: z.string().min(3, "نام گیرنده را وارد کنید"),
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست (مثال: 09123456789)"),
  state: z.string().min(2, "استان را وارد کنید"),
  city: z.string().min(2, "شهر را وارد کنید"),
  street_address: z.string().min(5, "آدرس را کامل وارد کنید"),
  street_address_2: z.string().optional(),
  postal_code: z.string().regex(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),
});

export type AddressSchema = z.infer<typeof addressSchema>;
