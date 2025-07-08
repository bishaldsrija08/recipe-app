import { defineConfig } from "drizzle-kit";

// migrations file
export default defineConfig({
  schema: "./src/db/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres.cnoxfbfzpqcusyhhdixz:adminadmin@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
  }
})