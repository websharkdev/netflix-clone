import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./server/schema.ts",
    out: "./server/migrations",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
});
