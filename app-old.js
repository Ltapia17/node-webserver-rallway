const http = require('http');

http.createServer( (req,res) =>{

    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // res.writeHead(200,{'Content-Type': 'application/cvs'});


    res.write('hola mundo');
    res.end();

} )
.listen(8080);

console.log('Esuchando en el puerto: ',8080);
