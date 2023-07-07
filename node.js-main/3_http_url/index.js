const { console } = require('console')
const http = require('https');
const { endianness } = require('os');
const PORT = 5000

const server = http.createServer((req, res) =>{
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type','text/html')

    if(!name){
        res;endianness('<h1>Preencha seu nome</h1> <form method="GET"> <input text= "text" name="name"> <input type="submit" value="Enviar" /> </form>')
    } else {
        res.end(`Seja Bem Vindo ${name}`)
    }

});

server.listen(PORT, () => {
    console.log(`Servidor Rodando da Porta ${PORT}`)
})