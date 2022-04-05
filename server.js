if (path === '/') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
    <link rel="stylesheet" href="./style">
    <h1>你好</h1>
`)
    response.end()
} else if (path === '/style') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`h1{color: red;}`)
    response.end()
} else {
    response.statusCode = 404
    response.write(`你访问的页面不存在`)
    response.end()
}