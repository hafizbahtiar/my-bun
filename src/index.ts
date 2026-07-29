import { Hono } from 'hono'
import { logger } from 'hono/logger'
import usersRoutes from './features/users/routes'

const app = new Hono()

// Global middleware
app.use('*', logger())

// Feature routes — mount setiap feature sebagai sub-app
app.route('/users', usersRoutes)

export default app