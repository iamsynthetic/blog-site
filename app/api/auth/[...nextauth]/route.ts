import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import GitHubProvider from "next-auth/providers/github";
// // import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// import prisma from "@/lib/prismadb";

// const prisma = new PrismaClient();

// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma),

//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//         email: { label: "Email", type: "email" },
//       },
//       async authorize(credentials) {
//         // Add logic here to look up the user from the credentials supplied
//         if (!credentials.email || !credentials.password) {
//           return null;
//         }

//         //check if user exists
//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!user) {
//           return null;
//         }

//         //check to see if passwords match
//         const passwordsMatch = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword
//         );

//         if (!passwordsMatch) {
//           return null;
//         }

//         //return user object if everything is valid
//         return user;
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: process.env.NODE_ENV === "development",
//   // pages: {
//   //   signIn: "/login",
//   // },
// };
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
