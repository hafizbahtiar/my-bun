# core/middleware

Custom middleware Hono yang dikongsi antara features / di-mount global.

Contoh simpanan kat sini:
- Auth middleware (cek token / session)
- Request logging custom
- Rate limiting ringkas

Guna guna `app.use('/path', middlewareFn)` atau attach ke sub-app.