import { db } from "@/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg'
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }
    },

    plugins: [nextCookies()] // make sure this is the last plugin in the array
});