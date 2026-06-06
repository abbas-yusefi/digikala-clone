"use server";

import { redirect } from "next/navigation";
import pool from "../db";
import bcrypt from "bcrypt";
import { auth, signIn } from "@/auth";
import { addProductToCart } from "../querys";

const signup = async (formData: FormData, parsedLocalCart) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const fullName = formData.get("fullName") as string;

    const { rows } = await pool.query(
      `
        SELECT * FROM "user" WHERE email = $1
        `,
      [email],
    );

    if (rows.length > 0) {
      return { message: "حسابی با این ایمیل در دیجی کالا هست", field: "email" };
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    await pool.query(
      `
        INSERT INTO "user"(email,password_hash,username,full_name)
        VALUES($1,$2,$3,$4)
        `,
      [
        email.toLowerCase(),
        passwordHashed,
        username.toLowerCase(),
        fullName.toLowerCase(),
      ],
    );

    console.log("before login");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(result);
    console.log("after login");

    if (result.ok) {
      const session = await auth();
      const userId = session?.user?.id;

      console.log("Cart items to sync:", parsedLocalCart);
      console.log("User ID:", userId);

      if (parsedLocalCart && parsedLocalCart.length > 0 && userId) {
        try {
          await Promise.all(
            parsedLocalCart.map((item) =>
              addProductToCart(item.id, userId, item.quantity),
            ),
          );
          console.log("Cart sync completed successfully");
        } catch (cartError) {
          console.error("Cart sync failed:", cartError);
          return { message: "خطا در همگام‌سازی سبد خرید" };
        }
      }
    }

    if (result?.error) {
      return { message: result.error };
    }
  } catch (error) {
    return { message: error?.message || "حطایی رخ داد" };
  }
  redirect("/profile");
};

export { signup };
