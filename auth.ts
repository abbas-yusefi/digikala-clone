import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import pool from "./lib/db";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        //get the email and password from credentials so we can check them
        //if the email exists
        //if passwords match
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new Error("Fileds are empty!");
        }

        const { rows } = await pool.query(
          `SELECT * FROM "user" WHERE email = $1 `,
          [email.toLowerCase()],
        );

        const user = rows[0];

        //we also do a fake comparing with a fake hash so even if no user exists it takes the equal amount of time so the attackers wont notice if the user exists or not
        if (!user) {
          await bcrypt.compare(
            password,
            "$2a$12$LJ3m4ys3Lk0TSwHCk8mEqu/hGzGxIzMq5qBk0R4qRXo8qBU7Mq5q",
          );
          throw new Error("Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(
          password,
          user.password_hash,
        );

        //note: the errors should be the same so we dont leak any info anfo
        if (!passwordMatch) {
          throw new Error("Invalid credentials");
        }

        //id is necessary, later it converts to sub:123 for example
        //without it auth.js cant tell which user is this, its necessary
        return {
          id: user.user_id.toString(),
          name: user.full_name,
          email: user.email,
          image: user.avatar_url,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },

  //defaults to jwt but we can also use database
  //jwt is prefered for most cases
  //database for more complex scenarios
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});
