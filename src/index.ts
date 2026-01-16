import { Hono } from 'hono'

const app = new Hono()

app.get('*', async (c) => {
  const host = c.req.header('host')
  return c.html(`
    <html>
      <body>
        <h1>minim pages</h1>
        <p>Domain: ${host}</p>
      </body>
    </html>
  `)
})

export default app
