import fastify from 'fastify'
import { appRoutes } from './http/routes'

export const app = fastify()

app.register(appRoutes)

// app.get('/users', async (request, reply) => {
//   const allusers = await prisma.user.findMany()

//   const passado = JSON.parse(allusers)

//   return reply.status(200).json(allusers)
// })
