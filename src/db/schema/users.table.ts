import {
    integer,
    pgTable,
    varchar,
    uuid,
    timestamp,
    check
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm/sql";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    uuid: uuid().notNull().unique(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    age: integer(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
}, (table) => [
    check('age_check1', sql`${table.age} >= 0`),
    check('age_check2', sql`${table.age} <= 150`)
]);
