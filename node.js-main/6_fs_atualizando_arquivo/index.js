const http = require('http')
const fs = require('fs')

const PORT = 5000

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
      fs.readFile('index.html', (err, data)=>{
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(data)
        return res.end()
    })  
    } else{
        const nameNewine = name + ';\r\n'

        fs.appendFile('arquivo.txt', nameNewLine, function(err, data){
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }

    
})

server.listen(PORT, () =>{
    console.log(`Servidor on ${PORT} 🥰`)
})