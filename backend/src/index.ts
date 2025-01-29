import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'

const app = new Hono()

app.post("/api/v1/signup",(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
   }).$extends(withAccelerate())
  return c.text("signup route")
})

app.post("/api/v1/signin",(c)=>{
  return c.text("signin route")
})

app.get("/api/v1/blog/:id" ,(c)=>{
  const id = c.req.param('id')
  console.log(id)
  return c.text('get blog route')
})

app.post("/api/v1/signin",(c)=>{
  return c.text("signin route")
}) 

app.put("/api/v1/sigin",(c)=>{
  return c.text("signin route")
})


export default app
