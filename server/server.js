require('dotenv').config();
const express = require('express')
    // , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then( db => {
    console.log('massive function is running')
    app.set('db', db);
})

// endpoints

app.get('/api/allPets', function(req,res){
    const db = app.get('db')
    db.allPets().then(pets => res.status(200).send(pets))
})

app.get('/api/onePet/:id', function(req, res){
    const db = app.get('db')
    console.log(req.params.id)
    db.onePet(req.params.id).then(pet => res.status(200).send(pet))
})

app.post('/api/addPet', function(req,res){
    const db = app.get('db')
    console.log('from post', req.body.animal);
    db.addPet(req.body.animal).then( pet => {
        res.status(200).send( 'completed' )
    })
    
})

app.put('/api/change/:id', function(req, res){
    const db = app.get('db');
    db.change(req.params.id, req.body.name ).then( res2 => res.status(200) )
    console.log('from put', req)
})

app.delete('/api/delete/:id', function(req,res){
    const db = app.get('db')
    db.delete(req.params.id).then( res2 => res.status(200).send('done') )
    console.log('from delete', req);
})


const PORT = 3005;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT} :)`))