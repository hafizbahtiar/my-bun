import { db } from '../../db'
import { usersTable } from '../../db/schema'
import { eq } from 'drizzle-orm'

// Service layer — semua query Drizzle duduk sini, dipisah dari routes.
// Routes cuma handle HTTP, service handle data. Ini pattern berulang
// untuk setiap feature (routes.ts -> service.ts -> schema.ts).

export type NewUser = typeof usersTable.$inferInsert
export type User = typeof usersTable.$inferSelect

export async function listUsers() {
  return db.select().from(usersTable)
}

export async function getUserById(id: number) {
  const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id))
  return user
}

export async function createUser(data: NewUser) {
  const [user] = await db.insert(usersTable).values(data).returning()
  return user
}