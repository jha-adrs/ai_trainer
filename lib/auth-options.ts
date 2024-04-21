import { NextAuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import { db } from "./db";
import { config } from "@/config/config";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db), // Use Prisma Adapter for NextAuth
  session: {
    strategy: "database",
  },
  secret: config.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@gmail.com",
        },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "John", email: credentials?.email };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    })
  ],
  pages: {
    signIn: "/signin", //signin page
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user = user;
      return session;
    } 
    

  },
  events: {
    signIn: async ({ user, isNewUser }) => {
      console.log("signIn", user.email);
    },
    createUser: async ({ user }) => {
      console.log("createUser", user);
    }
  }
};


export const getSession = () => getServerSession(authOptions);