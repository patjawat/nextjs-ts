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
            id: "domain-login",
            name: "Domain Account",
            async authorize(credentials, req) {
              const user = {
                /* add function to get user */
              }
              return user
            },
            credentials: {
              domain: {
                label: "Domain",
                type: "text ",
                placeholder: "CORPNET",
                value: "CORPNET",
              },
              username: { label: "Username", type: "text ", placeholder: "jsmith" },
              password: { label: "Password", type: "password" },
            },
          }),
          CredentialsProvider({
            id: "intranet-credentials",
            name: "Two Factor Auth",
            async authorize(credentials, req) {
              const user = {
                /* add function to get user */
              }
              return user
            },
            credentials: {
              email: { label: "Username", type: "text ", placeholder: "jsmith" },
              "2fa-key": { label: "2FA Key" },
            },
          }),
    ],
    callbacks: {
        async signIn(user, account, profile) {
            if (typeof user.userId !== typeof undefined)
            {
                if (user.isActive === '1')
                {
                    return user;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        },
        async session(session, token) {
            if (userAccount !== null)
            {
                session.user = userAccount;
            }
            else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined 
                || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined)))
            {
                session.user = token.user;
            }
            else if (typeof token !== typeof undefined)
            {
                session.token = token;
            }
            return session;
        },
        async jwt(token, user, account, profile, isNewUser) {
            if (typeof user !== typeof undefined)
            {
                token.user = user;
            }
            return token;
        }
    }
}
export default (req, res) => NextAuth(req, res, configuration)