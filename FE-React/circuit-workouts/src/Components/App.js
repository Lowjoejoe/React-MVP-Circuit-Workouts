import React, {useState, useEffect} from 'react';
import '../styles.css';
import Header from './Header';
import SelectedCircuitWorkouts from './SelectedCircuitWorkouts';
import Workouts from './Workouts';

function App() {
const [workouts, setWorkouts]=useState([]);
const [selectedWorkouts, setSelectedWorkouts]=useState([]);

// console.log("workouts state:", workouts);

const onWorkoutAdd = (addedWorkout)=>{
  setSelectedWorkouts([...selectedWorkouts, addedWorkout])
}


const onWorkoutRemove = (selectedWorkoutsArr, removeWorkout)=>{

}

console.log("selected workouts:", selectedWorkouts);

// defines function for fetching workouts which makes a fetch call to local API and pulls in all workouts and pushes them into workouts state array. 
function fetchWorkouts() {
  fetch('http://localhost:3002/api/workouts/')
    .then((res)=> res.json())
    .then((data)=>{

      setWorkouts(data)
console.log("data from fetch:",workouts);
      
    })
}

useEffect(()=>{
  fetchWorkouts()
  console.log('useEffect:', workouts);
},[])


// function toggleWorkoutDetails() {
//   var details = document.querySelector(".workoutDetails");
//   if(details.style.display === 'none'){
//     details.style.display = 'block';
//   }else {
//     details.style.display = 'none';
//   }
// }

 
  return (
    <div className="App">
      <Header/>
      <Workouts workouts={workouts} onWorkoutAdd={onWorkoutAdd} />
      <SelectedCircuitWorkouts selectedWorkouts={selectedWorkouts}/>
    </div>
  );
}

export default App;
