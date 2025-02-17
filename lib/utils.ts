import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// const ENVSchema = z.object({
//   BETTER_AUTH_SECRET: z.string(),
//   BETTER_AUTH_URL: z.string(),
//   DATABASE_URL: z.string(),
//   GITHUB_CLIENT_SECRET: z.string(),
//   GITHUB_CLIENT_ID: z.string()
// })

// export type iENV = z.infer<typeof ENVSchema>


// const { data: env, error } = ENVSchema.safeParse(process.env)

// if (error) {
//   console.error("❌ Invalid env:");
//   console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
//   process.exit(1);
// }

// const cenv = env! as iENV

// export { cenv as env }