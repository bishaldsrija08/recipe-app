const { db } = require("./db");

const { pgTable, serial, text, timestamp, varchar } = require("drizzle-orm/pg-core");
const { sql } = require("drizzle-orm");

// Define the schema for the 'recipe' table
export const recipes = pgTable("recipe", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
    description: text("description").notNull(),
    subname: varchar("subname", { length: 50 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp("updated_at").defaultNow(sql`CURRENT_TIMESTAMP`)
})