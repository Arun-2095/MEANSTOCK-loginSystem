const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');

const passport   = require('passport');
const cors       = require('cors');
const userRoutes = require ('./routes/user');
const adminRoutes = require ('./routes/admin');

const authentication = require('./config/passport');

const app = express();

const port = process.env.port || 5000;



//load static files 

app.use(express.static(path.join(__dirname,'public')));

//  access the api from multi IPS

app.use(cors());

//bodyParser 

app.use(bodyParser.json());

// passport initialise

app.use(passport.initialize());
app.use(passport.session());

authentication(passport);
//setting routes

app.get('/', (req,res)=>{ res.send("hello")});

//user Api 
app.use('/user' , userRoutes);

//admin Api 
app.use('/admin' , adminRoutes);


app.listen(port,()=>{ console.log('server running on' + port ) });
