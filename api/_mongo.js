import { MongoClient } from 'mongodb'

let clientPromise

export function getMongoClient() {
  if (!process.env.MONGODB_URI) {
    // Surface a recognizable, taggable signal for prod logs / Sentry.
    const err = new Error(
      'MONGODB_URI is not configured. Set it in Vercel project env (Production + Preview). ' +
        'Without it, /api/callback returns 500 and form submits are dropped silently.'
    )
    err.code = 'MONGODB_URI_MISSING'
    throw err
  }

  if (!clientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI)
    clientPromise = client.connect()
  }

  return clientPromise
}

export function getDatabaseName() {
  return process.env.MONGODB_DB || 'vedryx'
}
