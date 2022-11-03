//set dependencies
const express =require('express');
const app= express();
const cors = require ('cors');
const {Client} = require ('pg');
const config = require ('.config.js')[process.env.NODE_ENV || 'dev']

const PORT = config.port 

const client = new Client ({
    connectionString: config.connectionString,
});

client.connect();

//set up middleware
app.use(cors());
app.use(express.json());

//set up routes 




// listen on port 
app.listen(PORT, ()=>{
    console.log(`backend server is running on port: ${PORT}`);
});