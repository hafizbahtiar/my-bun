import { Hono } from 'hono'
import { listUsers, createUser, type NewUser } from './service'

// Routes untuk feature `users`. Ini sub-app Hono yang di-mount
// kat index.ts guna `app.route('/users', usersRoutes)`.
const usersRoutes = new Hono()

// GET /users — senarai semua user
usersRoutes.get('/', async (c) => {
  const users = await listUsers()
  return c.json(users)
})

// POST /users — create user baru
// TODO (learning): validate body guna @hono/zod-validator sebelum insert.
usersRoutes.post('/', async (c) => {
  const body = await c.req.json<NewUser>()
  const user = await createUser(body)
  return c.json(user, 201)
})

export default usersRoutes