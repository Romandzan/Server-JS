const http = require('http')
// Подключает встроенный модуль http из Node.js.

let requestCount = 0

// Создаёт сервер
const server = http.createServer((request, response) => {
    // Отправляет тектс браузеру

    // В каждом запроче увеличивает значение переменной на еденицу и выводит его
    requestCount ++

    //Будем отслеживать request. Скажем, что если у нас в URL-адресе есть “students”, то запишем в response ‘STUDENTS’,
    switch (request.url) {
        case '/students':
            response.write('STUDENTS ')
            break
        case '/courses':
            response.write('FRONT+BACK ')
            break
        default:
            response.write('404 not found ')
    }

    response.write('IT-ROMAN ' + requestCount)
    response.end()
})



// Запускает сервер на порту 3003
server.listen(3003, () => {
    console.log('Server started on port 3003')
})



