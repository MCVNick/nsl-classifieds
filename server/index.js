require('dotenv').config()
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env
const express = require('express')
const { json } = require('express')
const massive = require('massive')
const session = require('express-session')
const path = require('path')

const authCtrl = require('./controller/auth')

const app = express()

app.use(json())
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        const port = SERVER_PORT || 3005
        app.listen(port, console.log('The server is running on port', port))
    })

//Authentication endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)