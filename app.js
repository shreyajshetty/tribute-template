const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {
    if(req.url==='/' || req.url==='/index') {
        fs.readFile('index.html','utf8',(err,data) => {
            if(err) {
                res.writeHead(500,{'Content-Type': 'text/plain'})
                res.write('Internal Server Error')
                res.end()
            } else {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        })
    } else if (req.url==='/style.css'){
        fs.readFile('style.css','utf8',(err,data) => {
            if(err) {
                res.writeHead(500,{'Content-Type': 'text/plain'})
                res.write('Internal Server Error')
                res.end()
            } else {
                res.writeHead(200,{'Content-Type':'text/css'})
                res.end(data)
            }
        })
} else if (req.url==='/vivekananda.jpg'){
    fs.readFile('vivekananda.jpg',(err,data) => {
        if(err) {
            res.writeHead(500,{'Content-Type': 'text/plain'})
            res.write('Internal Server Error')
            res.end()
        } else {
            res.writeHead(200,{'Content-Type':'image/jpeg'})
            res.end(data,'binary')
        }
    })

}else {
        res.writeHead(404,{'Content-Type': 'text/plain'})
        res.end('Error')

    }
})
const PORT = 2000
server.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
