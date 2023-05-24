const Port = process.env.PORT
const server = require('./src/server')
const { Character, Planet, Film } = require('./src/database')


// Film.get(2).then((res) => console.log(res))

server.listen(3004, () => {
    console.log(`Database running on port: ${3004}`)
})
