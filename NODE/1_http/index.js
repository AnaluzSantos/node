const { Console } = require('console')
const http = require('http')
//console.log(http)
const PORT = 3000

// const server = http.createServer((req, res)=>{
//     res.write('Olá, Mundo!')
//     res.end()
// })


// const server = http.createServer((req, res)=>{
//     if(req.url ===  '/home'){
//         res.writeHead( 200, {'Content-Type':'text-plan'})
//         res.write('Página Home')
//         res.end()
//     } else if(req.url === '/sobre'){
//         res.writeHead( 200, {'Content-Type':'text-plan'})
//         res.write('Página Sobre')
//         res.end()
//     } else {
//         res.writeHead( 404, {'Content-Type':'text-plan'})
//         res.write('Página não Encontrada')
//         res.end()
//     }
// })


//Retornando HTML

const server = http.createServer((req. res)=>{
        if(req.url === '/home')
            res.write('<meta charset=utf8>')
            res.write('<P>Esta é a página home</p>')
            res.end     
        }else if(req.url === '/sobre'){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write('<h1>Página Sobre</h1>')
            
        } else if (req.url === '/contato') {
           
        }else {
            res.writeHead(200, {'Content-Type':'text/html 😎'})

        }
})



server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})


