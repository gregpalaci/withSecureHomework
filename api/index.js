const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = express()
const port = 3001

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/notes', async (req, res) => {
  const notes = await prisma.note.findMany().catch((e) => {
    console.log(e)
  })
  res.json(notes)
})

app.post(`/note`, async (req, res) => {
  const { title, content, status } = req.body
  const result = await prisma.note
    .create({
      data: {
        title,
        content,
        status,
      },
    })
    .catch((e) => {
      console.log(e)
    })
  res.json(result)
})

app.get('/healthcheck', function (req, res) {
  res.send('Test successful')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
