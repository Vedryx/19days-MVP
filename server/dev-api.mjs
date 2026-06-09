import http from 'node:http'
import { loadEnv } from 'vite'
import callbackHandler from '../api/callback.js'

const env = loadEnv('development', process.cwd(), '')
Object.assign(process.env, env)

const PORT = Number(process.env.API_PORT || 3000)

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8')
      if (!raw) {
        resolve(undefined)
        return
      }
      try {
        resolve(JSON.parse(raw))
      } catch {
        reject(new Error('Invalid JSON'))
      }
    })
    req.on('error', reject)
  })
}

function createResponse(res) {
  return {
    status(code) {
      res.statusCode = code
      return this
    },
    setHeader(name, value) {
      res.setHeader(name, value)
      return this
    },
    json(payload) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(payload))
    },
  }
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.url !== '/api/callback') {
    res.statusCode = 404
    res.end(JSON.stringify({ ok: false, message: 'Not found' }))
    return
  }

  try {
    req.body = await readBody(req)
    await callbackHandler(req, createResponse(res))
  } catch {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: false, message: 'Server error' }))
  }
})

server.listen(PORT, '127.0.0.1', () => {
  console.log(`API dev server running at http://127.0.0.1:${PORT}`)
})
