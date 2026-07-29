// Validation schema untuk feature `users`.
//
// TODO (learning): install `zod` + `@hono/zod-validator`, kemudian define
// schema create/update user di sini, e.g.:
//
//   import { z } from 'zod'
//   export const createUserSchema = z.object({
//     name: z.string().min(1),
//     age: z.number().int().positive(),
//     email: z.string().email(),
//   })
//
// Lepas tu guna dalam routes.ts:
//   import { zValidator } from '@hono/zod-validator'
//   usersRoutes.post('/', zValidator('json', createUserSchema), handler)
export { }