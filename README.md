# my-bun

Projek learning untuk revise knowledge **Bun + Hono** dan belajar ilmu baru
termasuk **Drizzle ORM**. Bukan production app — sandbox untuk explore konsep
satu-satu. Study plan ada kat [`TODO.md`](./TODO.md).

## Stack

- **Runtime:** Bun (`bun run --hot` untuk hot reload)
- **Framework:** Hono (web framework, fast + edge-ready)
- **ORM:** Drizzle (PostgreSQL via `node-postgres` / `pg`)
- **Language:** TypeScript (strict)

## Struktur projek (feature-modular)

```
src/
├── index.ts                  # Hono app + global middleware + mount routes
├── core/                     # shared utilities
│   ├── base/                 # base error types, HTTPException helpers
│   ├── config/env.ts         # centralized + validated env config
│   └── middleware/           # custom middleware (auth, rate-limit, dll)
├── db/
│   ├── index.ts              # drizzle instance
│   └── schema.ts             # drizzle schema (tables)
└── features/
    └── users/                # contoh feature — template untuk feature lain
        ├── routes.ts         # Hono sub-app (di-mount di index.ts)
        ├── service.ts        # query logic (select/insert/update/delete)
        └── schema.ts         # validation (zod, optional)
```

Pattern berulang untuk setiap feature: `routes.ts` (HTTP) → `service.ts`
(data) → `schema.ts` (validation). Buat feature baru (e.g. `posts`) ikut
pattern yang sama.

## Setup

```sh
bun install
```

Konfigure database di `.env`:

```
DATABASE_URL=postgres://user:password@localhost:5432/dbname
```

> Nota: `src/core/config/env.ts` fail-fast — server tak akan start kalau
> `DATABASE_URL` kosong.

## Run

```sh
bun run dev
```

Buka http://localhost:3000

Contoh endpoint (feature `users`):

- `GET /users` — senarai semua user
- `POST /users` — create user baru (body: `{ "name", "age", "email" }`)

## Drizzle migrations

```sh
bunx drizzle-kit generate   # generate migration dari schema
bunx drizzle-kit migrate    # jalankan migration
bunx drizzle-kit push       # push schema terus ke DB (dev)
bunx drizzle-kit studio     # UI untuk explore DB
```

Config: [`drizzle.config.ts`](./drizzle.config.ts)

## Belajar

Pilih satu topik dari [`TODO.md`](./TODO.md), buat contoh dalam fail berkenaan,
test guna `bun run dev`, then tandakan `[x]`.