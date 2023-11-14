const http = require( 'http' );


const PORT = 8080;

http.createServer( ( req, res ) => {

    // res.writeHead( 200, { 'Content-Type': 'application/json' });
    // res.setHeader( 200, { 'Content-Disposition': 'attachment; filename=lista.csv' });
    // res.writeHead( 200, { 'Content-Type': 'application/csv' });


    res.write( 'Hello, world' );
    res.end();

}).listen( PORT );



console.log( 'Server listening on port:', PORT );