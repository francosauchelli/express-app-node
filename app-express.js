require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// servir archivo estático
// ? si se carga de esta manera, busca primero los archivos en "piblic" porque tienen prioridad.
// ! cuidado que el archivo debe llamarse "index.html" porque Express lo busca así
app.use( express.static( 'public' ));

// app.get('/', (req, res) => {
//   res.send( 'Home Page' )
// });


app.get('/hello-world', (req, res) => {
    res.send( 'Hello World!' )
  });


app.get('/', (req, res) => {
  res.render( 'home', {
    name: 'Franco Sauchelli',
    title: 'Node Course'
  });
});

app.get('/generic', (req, res) => {
    
  // ! esta linea es para servir archivo estático
    // res.sendFile( __dirname + '/public/generic.html' );

    res.render( 'generic', {
      name: 'Franco Sauchelli',
      title: 'Node Course'
    });
});

app.get('/elements', (req, res) => {

  // ! esta linea es para servir archivo estático
    // res.sendFile( __dirname + '/public/elements.html' );

    res.render( 'elements', {
      name: 'Franco Sauchelli',
      title: 'Node Course'
    });
});



app.get('*', (req, res) => {
    // res.send( '404 | Page not found.' );
    
    // ! buscando el contendio estático:
    res.sendFile( __dirname + '/public/404notfound.html' );

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});