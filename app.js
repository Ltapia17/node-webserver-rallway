const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port=process.env.PORT;


//require('hbs);
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico 
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home',{
    nombre:'Luis',
    titulo:'curso node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre:'Luis',
    titulo:'curso node'
  });
});


app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:'Luis',
    titulo:'curso node'
  });
});




  app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
  })

  

  app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/public/elements.html')
  })

  app.get('*', function (req, res) {
    res.send('404 | page not found')
  })
 

app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
})

