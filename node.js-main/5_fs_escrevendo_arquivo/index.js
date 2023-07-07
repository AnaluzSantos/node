const http = require('http')
const fs = require('fs')

const PORT = 5000

const server = http.createServer((req, res) =>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data)
            return res.end()
        })

    }else{
        fs.writeFile('arquivo.txt', function(err, data){
            res.writeHead(302, {
                Location: '/' 
            })

        })
    }
})


server.listen(PORT, () => {
    console.log('Servidor on 🥰' +PORT)
})