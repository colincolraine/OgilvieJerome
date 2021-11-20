const express = require('express')

const app = express();
app.use(express.urlencoded({ extended: true }))
const PORT =(process.env.PORT) ? process.env.PORT : 5000;

app.set('view engine', 'ejs');
app.use(express.json())

app.use(express.static(__dirname + '/public'));

const HomeRoute = require('./routes/routes')
app.use('/', HomeRoute)

const AboutUsRoute = require('./routes/routes')
app.use('/aboutus', AboutUsRoute)

const LoginRoute = require('./routes/routes')
app.use('/login', LoginRoute)

const RegisterRoute = require('./routes/routes')
app.use('/register', RegisterRoute)

//Start Server
app.listen(PORT,()=>{
    console.log('Server has started');
})