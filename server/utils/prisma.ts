import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from 'prisma-generated'

function createPrismaClient() {
  const connectionString = globalThis.process?.env?.DIRECT_URL || globalThis.process?.env?.DATABASE_URL || ''
  const adapter = new PrismaPg({ connectionString })
  return new PrismaClient({ adapter })
}

let prisma: PrismaClient

if (globalThis.process?.env?.NODE_ENV === 'production') {
  prisma = createPrismaClient()
} else {
  if (!(globalThis as any).__prisma) {
    (globalThis as any).__prisma = createPrismaClient()
  }
  prisma = (globalThis as any).__prisma
}

export { prisma }
