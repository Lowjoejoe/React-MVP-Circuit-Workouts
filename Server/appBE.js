//set dependencies
const express =require('express');
const app= express();
const cors = require ('cors');
const {Client} = require ('pg');
const config = require ('./config.js')[process.env.NODE_ENV || 'dev']

const PORT = config.port 

const client = new Client ({
    connectionString: config.connectionString,
});

client.connect();

//set up middleware
app.use(cors());
app.use(express.json());

//set up routes 

//initial request route
app.get('/', (req,res)=>{
    res.send("Welcome to Workout Circuit Warrior")
});

//route to return all workouts in db
app.get('/api/workouts',(req,res,err)=>{
    client.query('SELECT * FROM workouts')
    .then(results=>{
        res.status(200);
        res.send(results.rows);
    })
    .catch((err)=>console.log(error));
});

//route to get workouts by ID
app.get('/api/workouts/:id', (res,req,err)=>{
    client.query(`SELECT * FROM workouts where id = ${req.params.id} `)
    .then(results=>{
        if(results.rows.length==0){
            res.status(404);
            res.send(`workout id not found in database`);
            return;
        }
        res.status(200);
        res.status(results.rows);
    })
    .catch((err)=>console.log('error: retrieving by ID'))
})

//route to get workouts by type

app.get('/api/workouts/type/:type', (req,res,err)=>{
    let type = req.params.type
    client.query(`SELECT * FROM workouts WHERE type = '${type}'`)
    .then(results=>{
        if(results.rows.length == 0){
            res.status(404);
            res.send(`Workout type not found in database`);
            return;
        }
        res.status(200);
        res.send(results.rows);
    })
    .catch((err)=>console.log('error: retrieving by type'));
});

//route to get workouts by equipment

app.get('/api/workouts/equipment/:equipment', (req,res,err)=>{
    let equipment = req.params.equipment
    client.query(`SELECT * FROM workouts WHERE equipment = '${equipment}'`)
    .then(results=>{
        if(results.rows.length == 0){
            res.status(404);
            res.send(`Workout equipment not found in database`);
            return;
        }
        res.status(200);
        res.send(results.rows);
    })
    .catch((err)=>console.log('error: retrieving by equipment'));
});

//route to post new workout to database
app.post('/api/workouts', (req,res)=>{
    let newWorkout = req.body;
    if(newWorkout.name && newWorkout.description && newWorkout.type && newWorkout.equipment && newWorkout.reps && newWorkout.name.length !=0 && newWorkout.description.length !=0 && newWorkout.type.length !=0 && newWorkout.equipment.length !=0 && newWorkout.reps.length !=0){
       client.query(`INSERT INTO workouts (name, description, type, equipment, reps) VALUES ('${newWorkout.name}','${newWorkout.description}','${newWorkout.type}','${newWorkout.equipment}','${newWorkout.reps}')`,
       (err)=>{
        if(err){
            console.error(err);
        }else{
            let newWorkoutString = JSON.stringify(newWorkout);
            res.status(200);
            res.status(`Workout information added to the database: ${newWorkoutString}`);
        }
       });
    }else{
        res.status(404); 
        res.send(`404 ERROR: bad input please provide workout: name|description|type|equipment|reps`);
    }
});

//route to delete workouts from database by id
app.delete('/api/workouts/:id', (req,res)=>{
    client.query(`SELECT FROM workouts WHERE id =${req.params.id}`)
    .then(results=>{
        if (results.rows.length ==0){
            res.status(404); 
            res.send(`Workout doesn't exist in the database`);
            return;
        }else{
            let deletedWorkout = JSON.stringify(results.rows);
            res.status(200);
            res.send(`Workout data deleted from database: ${deletedWorkout}`);
            client.query(`DELETE FROM workouts WHERE id = ${req.params.id}`);
        }
    })
});


// listen on port 
app.listen(PORT, ()=>{
    console.log(`backend server is running on port: ${PORT}`);
});