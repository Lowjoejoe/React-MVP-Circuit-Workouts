import React, {useState, useEffect} from 'react';
import '../styles.css';
import Header from './Header';
import SelectedCircuitWorkouts from './SelectedCircuitWorkouts';
import Workouts from './Workouts';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
const [workouts, setWorkouts]=useState([]);
const [selectedWorkouts, setSelectedWorkouts]=useState([]);

// console.log("workouts state:", workouts);

const onWorkoutAdd = (addedWorkout)=>{
  setSelectedWorkouts([...selectedWorkouts, addedWorkout])
}


const onWorkoutRemove = (id)=>{
  let adjustedArray = [...selectedWorkouts];
  let arrOfIds = adjustedArray.map(workout=>{
    return workout.id; 
  })
  // console.log("arrofIds", arrOfIds);

  var index = arrOfIds.indexOf(id)
  // console.log("index:", index);
  if(index !== -1) {
    adjustedArray.splice(index,1);
    setSelectedWorkouts(adjustedArray);
  }
}

console.log("selected workouts:", selectedWorkouts);

// defines function for fetching workouts which makes a fetch call to local API and pulls in all workouts and pushes them into workouts state array. 
function fetchWorkouts() {
  fetch('http://localhost:3002/api/workouts/')
    .then((res)=> res.json())
    .then((data)=>{

      setWorkouts(data)
// console.log("data from fetch:",workouts);
      
    })
}

useEffect(()=>{
  fetchWorkouts()
  // console.log('useEffect:', workouts);
},[])

console.log("selectedWorkouts:", selectedWorkouts);
  return (
        <div className="App">
          <Header/>
            <div className="linkContainer">
                <Link to='/'> Home </Link>
                <Link to='/selectedWorkout'> Selected Workout </Link>
            </div>
            <Routes>
                <Route path='/' element={<Workouts workouts={workouts} onWorkoutAdd={onWorkoutAdd} />}/>
                <Route path='/selectedWorkout' element={<SelectedCircuitWorkouts selectedWorkouts={selectedWorkouts} onWorkoutRemove={onWorkoutRemove}/>}/>
            </Routes>
            </div>
  
  );
}

export default App;
