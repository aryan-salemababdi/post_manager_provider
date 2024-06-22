import { defineConfig } from 'drizzle-kit';

export default defineConfig({
 schema: "src/db/schema/index.ts",
 out: "./src/db/drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: String(process.env.POSTGRES_URL),
  },
  verbose: true,
  strict: true,
})