const http = require('http')
const PORT = 5000
// const { Console } = require('console')
// const http = require('http')
// // console.log(http)
// const PORT = 3000

// const server = http.createServer((req, res) =>{
//     res.write('Olá,Mundo')
//     res.end()
// })

// const server = http.createServer((req, res) =>{
//     if(req.url === '/home'){
//         res.writeHead(200 , {'Content-Type':'text/plan'})
//         res.write('Página home')
//         res.end()
//     }else if(req.url === '/sobre'){
//         res.writeHead(200 , {'Content-Type':'text/plan'})
//         res.write('Página sobre')
//         res.end()
//     }else if(req.url === '/contato'){
//         res.writeHead(200 , {'Content-Type':'text/plan'})
//         res.write('Página sobre')
//         res.end()
//     }else{
//         res.writeHead(200 , {'Content-Type':'text/plan'})
//         res.write('Página não Encontrada')
//         res.end()
//     }
// })

// server.listen(PORT, ()=>{
//     console.log(`Servidor rodando na porta ${PORT}😍`)
// })

 
const server = http.createServer((req, res) =>{
    if(req.url === '/home'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        // res.write('<meta charset=''"utf-8">')
        res.write('<h1>Página Home</h1>')
        res.write('<p>Sinta-se em casa!</p>')
        res.end()
    }else if(req.url === '/sobre'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.write('<h1>Página sobre</h1>')
        res.write('<p>Está é a página sobre!</p>')
        res.end()
    }else if(req.url === '/contato'){
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.write('<h1>Página de contato</h1>')
        res.write('<p>Fale comigo!</p>')
        res.end()
    }else{
        res.writeHead(200 , {'Content-Type':'text/html'})
        res.write('<h1>Página não Encontrada</h1>')
        res.write('<p>O que você faz aqui?</p>')
        res.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}😍`)
})

