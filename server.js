// подключаем протокол
const http = require('http')
// подключаем файловую систему
const fs = require('fs')

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path,(err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    })
}

//создаем сервер
const server = http.createServer(async (request, response) => {
    switch (request.url) {
        case '/about': {
            try {
                const data = await readFile('pages/about.html')
                response.write(data)
                response.end()
            } catch (e) {
                response.write('fucking error')
                response.end()
            }
            break
        } case '/home': {
            await delay(3000)
            response.write('HOME')
            response.end()
            break
        } default: {
            response.write('404/not found')
            response.end()
        }
    }
})
// назначаем порт
server.listen(3003)