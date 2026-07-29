import 'dotenv/config'

// Pusat config environment. Bila nak baca env var, import dari sini sahaja
// supaya tak ada `process.env.XXX` berselerak kat seluruh codebase.
//
// TODO (learning): tukar ke zod / valibot untuk validate env pada startup,
// dan bezakan schema dev vs production.
function required(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required env var: ${name}. Check your .env file.`)
  }
  return value
}

export const env = {
  DATABASE_URL: required('DATABASE_URL'),
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  isDev: (process.env.NODE_ENV ?? 'development') === 'development',
} as const