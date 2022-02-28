import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client'
let userAccount = null;

const prisma = new PrismaClient();

const configuration = {
    cookie: {
        secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
            CredentialsProvider({
              // The name to display on the sign in form (e.g. "Sign in with...")
              name: "Credentials",
              // The credentials is used to generate a suitable form on the sign in page.
              // You can specify whatever fields you are expecting to be submitted.
              // e.g. domain, username, password, 2FA token, etc.
              // You can pass any HTML attribute to the <input> tag through the object.
              credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
              },
              async authorize(credentials) {
                // credentials will to passed from our login form
                // Your own logic here either check agains database or api endpoint
                // e.g. verify password if valid return user object.
                const user = {
                  id: 1,
                  name: 'john',
                  email: 'admin@localhost.com',
                  password: '112233',
                }
                if (
                  credentials.email === user.email &&
                  credentials.password === user.password
                )
                  return user
                throw new Error('Incorrect Credentials') // This will be error message displayed in login form
              },
            })
    ],
    pages: {
        signIn: "/signin",
        },
    
}
export default (req, res) => NextAuth(req, res, configuration)