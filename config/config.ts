import {z} from 'zod'

// For accessing the env variables
const envSchema = z.object({
    PORT: z.string().default('3000'),
    NODE_ENV: z.string().default('development'),
    DATABASE_URL: z.string(),
    NEXTAUTH_URL: z.string(),
    NEXTAUTH_SECRET: z.string(),
    UPLOADTHING_SECRET: z.string(),
    UPLOADTHING_APP_ID: z.string(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
})

export const config = envSchema.parse(process.env);