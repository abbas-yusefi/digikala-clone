"use server";

import pool from "../db";

export const submitEmailSubscriptionAction = async (email: string) => {
  if (!email || email.length === 0) return;
  try {
    await pool.query(`INSERT INTO email_subscribers(email) VALUES($1)`, [
      email,
    ]);
  } catch (err) {
    console.log(err);
  }
};
