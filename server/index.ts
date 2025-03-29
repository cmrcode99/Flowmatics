import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import type { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port: number = parseInt(process.env.PORT || '3001', 10)

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' })
})

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app 