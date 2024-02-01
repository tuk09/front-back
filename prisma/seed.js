const bcrypt =  require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
   { username : 'andy', password: password, email: 'and@ggg.mail' },
   { username : 'bobby', password: password, email: 'and@ggg.mail' },
   { username : 'candy', password: password, email: 'and@ggg.mail' },
]

const todoData = [

]


const run = async () => {
    await prisma.user.createMany({
        data : userData 
    })
}

run()