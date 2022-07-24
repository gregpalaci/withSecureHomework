const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const main = async function () {
  await prisma.note
    .create({
      data: {
        title: 'delectus aut autem',
        content: 'Lorem ipsum',
      },
    })
    .catch((e) => {
      console.log(e)
    })

  await prisma.note
    .create({
      data: {
        title: 'quis ut nam facilis et officia qui',
        content: 'Lorem ipsum',
        status: 'Completed',
      },
    })
    .catch((e) => {
      console.log(e)
    })

  await prisma.note
    .create({
      data: {
        // id: 3, // you could manually set/override the id also :shrugs:
        title: 'fugiat veniam minus',
        content: 'Lorem ipsum',
        status: 'Not completed',
      },
    })
    .catch((e) => {
      console.log(e)
    })

  const notes = await prisma.note.findMany().catch((e) => {
    console.log(e)
  })

  console.log(notes)
}

main()
  .catch((e) => {
    console.log(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
