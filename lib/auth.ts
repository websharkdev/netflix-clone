import { EmailTemplate } from "@/components/custom/template";
import { db } from "@/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);


export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg'
    }),
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({ user, url }) => {
            await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: [user.email],
                subject: 'Reset your Nefflix password',
                react: EmailTemplate({ name: user.name, link: url }) as React.ReactElement,

            });
        }
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },

    plugins: [nextCookies()] // make sure this is the last plugin in the array
});