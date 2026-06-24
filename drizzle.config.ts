import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/configs/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL ?? "postgresql://neondb_owner:npg_qlEZx3wd4DUm@ep-rough-base-atfnv9pw.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
});
