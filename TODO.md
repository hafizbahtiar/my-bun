# TODO — Study Plan: Bun + Hono + Drizzle

Projek ni untuk revise semula knowledge Bun + Hono aku, dan keep belajar ilmu
baru termasuk **Drizzle ORM**. Senarai ni untuk re-study semula konsep secara
berperingkat, dari asas yang dah ada sampai ke topik lanjutan.

> **Struktur projek** (feature-modular):
> - `src/index.ts` — Hono app + mount routes
> - `src/core/` — shared utilities (config, middleware, base/error types)
> - `src/db/` — Drizzle instance (`index.ts`) + schema (`schema.ts`)
> - `src/features/<nama>/` — setiap feature ada `routes.ts` (sub-app Hono),
>   `service.ts` (query logic), `schema.ts` (validation, optional)
>
> **Cara guna:** pilih satu topik, buat contoh dalam fail berkenaan, test guna
> `bun run dev`, then tandakan `[x]`. Contoh rujukan feature: `src/features/users/`.

## ✅ Dah cover
- [x] Setup asas `new Hono()` + `export default app`
- [x] Route GET ringkas (`c.text`, `c.html`, `c.json`)
- [x] Custom response dengan status code + headers (`c.body`)
- [x] Set header individu (`c.header`)
- [x] Middleware ringkas guna `app.use()` + `await next()`
- [x] Response header lepas request (`c.res.headers.append`)
- [x] `c.notFound()`
- [x] Redirect (`c.redirect`, termasuk 301 permanent redirect)
- [x] Baca request header (`c.req.header('User-Agent')`)
- [x] Struktur projek feature-modular (`core/` + `db/` + `features/`)
- [x] Pecah routes ke sub-app + mount guna `app.route('/users', usersRoutes)`
- [x] Drizzle instance terpusat kat `src/db/index.ts`
- [x] Env config terpusat kat `src/core/config/env.ts`
- [x] Logger middleware global (`hono/logger`)

## 🔜 Routing lanjutan
- [ ] Route params — `app.get('/users/:id', (c) => c.req.param('id'))`
- [ ] Query string — `c.req.query('key')` / `c.req.queries('key')`
- [ ] Wildcard & optional params
- [ ] Grouping routes guna `app.route('/prefix', subApp)` (dah buat asas, dalami lagi)
- [ ] `app.on()` untuk multiple methods sekaligus
- [ ] Method lain: POST, PUT, PATCH, DELETE (POST dah ada kat `users`)

## 🔜 Request & Body
- [ ] Baca JSON body — `await c.req.json()` (dah buat asas kat `users`)
- [ ] Baca form data — `await c.req.formData()` / `c.req.parseBody()`
- [ ] Baca raw text/body — `await c.req.text()`
- [ ] Upload file (multipart form)

## 🔜 Middleware
- [ ] Built-in middleware: `logger()` (dah ada), `cors()`, `secureHeaders()`, `prettyJSON()`
- [ ] Middleware urutan (order of execution) & `next()` flow
- [ ] Middleware khusus route (`app.get('/path', middlewareFn, handler)`)
- [ ] Custom middleware — auth check, rate limiting ringkas (simpan kat `core/middleware/`)
- [ ] `c.set()` / `c.get()` untuk share data antara middleware & handler

## 🔜 Validation & Error Handling
- [ ] `@hono/zod-validator` untuk validate body/query/params (stub ada kat `features/users/schema.ts`)
- [ ] `app.onError()` — global error handler
- [ ] `app.notFound()` — custom 404 handler
- [ ] Throw `HTTPException` dari `hono/http-exception`
- [ ] Custom error classes kat `core/base/`

## 🔜 Response & Rendering
- [ ] JSX rendering dengan `hono/jsx`
- [ ] Streaming response (`c.stream` / `streamText`)
- [ ] Cookie — `getCookie` / `setCookie` dari `hono/cookie`
- [ ] Static file serving

## 🔜 Drizzle ORM
- [ ] Schema definition — `pgTable`, column types, `.$inferInsert` / `.$inferSelect`
- [ ] Migrations workflow — `drizzle-kit generate`, `push`, `migrate`
- [ ] Query: `select` (semua column, column specific, `where`)
- [ ] Query: `insert` + `.returning()`
- [ ] Query: `update` + `.returning()`
- [ ] Query: `delete`
- [ ] Operators — `eq`, `ne`, `and`, `or`, `gt`, `lt`, `like`, `inArray`
- [ ] Ordering & pagination — `orderBy`, `limit`, `offset`
- [ ] Relations — `relations()` + `with` untuk eager load (one-to-many, many-to-many)
- [ ] Joins — SQL-style join guna `leftJoin` / `innerJoin`
- [ ] Transactions — `db.transaction()`
- [ ] Raw SQL — `sql` template + `db.execute()`
- [ ] Typed results — infer types dari schema untuk response DTO
- [ ] Query logging / debugging

## 🔜 Bun-specific
- [ ] Bun.serve() vs Hono adapter — macam mana Hono run atas Bun
- [ ] Bun SQLite (`bun:sqlite`) untuk simpan data ringkas (banding dengan postgres)
- [ ] Environment variables — `Bun.env` vs `process.env` + `.env` file
- [ ] Bun test runner (`bun test`)
- [ ] Hot reload — `bun run --hot` (dah guna dalam `package.json`)
- [ ] Bun file I/O API (`Bun.file`, `Bun.write`)

## 🔜 Struktur Projek & Best Practice
- [ ] Tambah feature baru (e.g. `posts`) ikut pattern `routes/service/schema`
- [ ] Pecah schema ke beberapa fail bila membesar (`db/schema/users.ts`, `posts.ts`, dll.)
- [ ] RPC mode Hono — `hono/client` untuk type-safe fetch dari client
- [ ] Environment config dev vs production (extend `core/config/env.ts`)
- [ ] Logging & observability asas

## 🔜 Testing
- [ ] `bun test` asas — struktur test file
- [ ] Unit test untuk service layer (mock db atau test db)
- [ ] Integration test untuk routes (Hono `app.request()` dalam test)
- [ ] Test fixtures / setup-teardown database

## 🔜 Deployment
- [ ] Deploy ke Bun runtime server / Docker
- [ ] Deploy ke Cloudflare Workers guna Hono (adapter `hono/cloudflare-workers`)
- [ ] DB connection string + secrets untuk production

---
**Cara guna:** pilih satu topik, buat contoh route/kod kecil dalam fail
berkenaan (ikut struktur feature-modular), test guna `bun run dev`, then
tandakan `[x]`.