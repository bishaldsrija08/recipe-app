// Drizzle configuration file
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    schema: './src/db/schema.js',
    out: './drizzle',
    driver: 'pg',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL || 'postgresql://postgres.cnoxfbfzpqcusyhhdixz:adminadmin@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
    }
})