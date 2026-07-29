import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from '../core/config/env'

// Drizzle instance — diguna oleh service layer setiap feature.
//
// Nota (Drizzle 1.0 RC): driver `node-postgres` tak terima `schema` dalam config
// macam versi lama. Relational query (`with`/`relations`) guna API `relations()`
// yang baru — itu topik TODO bila sampai masa.
export const db = drizzle(env.DATABASE_URL)