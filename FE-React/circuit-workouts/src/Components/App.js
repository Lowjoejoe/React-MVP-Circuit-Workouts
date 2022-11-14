import React, {useState, useEffect} from 'react';
import '../styles.css';
import { Routes, Route, Link} from 'react-router-dom';
import Header from './Header';
import Workouts from './Workouts';
import AboutUs from './AboutUs';
import SelectedCircuitWorkouts from './SelectedCircuitWorkouts';
import AddWorkout from './AddWorkout';
import DeleteWorkout from './DeleteWorkout';
import {FaHome} from 'react-icons/fa';
import {GoDiffAdded} from 'react-icons/go';
import {BsCardChecklist} from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai';

function App() {
const [workouts, setWorkouts]=useState([]);
const [selectedWorkouts, setSelectedWorkouts]=useState([]);

// console.log("workouts state:", workouts);

const onWorkoutAdd = (addedWorkout)=>{
  setSelectedWorkouts([...selectedWorkouts, addedWorkout])
}

//  sets adjusted array = to a shallow copy of the selectedWorkouts
// maps an array of all the ids of each workout

const onWorkoutRemove = (id)=>{
  let adjustedArray = [...selectedWorkouts];
  let arrOfIds = adjustedArray.map(workout=>{
    return workout.id; 
  })
  // console.log("arrofIds", arrOfIds);

  //set index equal to the index of the workout selected to be removed
  var index = arrOfIds.indexOf(id)
  // console.log("index:", index);
  //if index is present in the selected array it will remove it from the adjustedArray
  // and then reset state of selectedWorkouts to that of the adjustedArray
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
                <Link to='/'> Home <FaHome/> </Link>
                <Link to='/selectedWorkout'> Selected Workout <BsCardChecklist /> </Link>
                <Link to='/addNewWorkout'>Add New Workout <GoDiffAdded/> </Link>
                <Link to='/deleteWorkout'>Delete Workout <AiFillDelete/> </Link>
            </div>
            <Routes>
                <Route path='/' element={
                  <>
                  <Workouts workouts={workouts} onWorkoutAdd={onWorkoutAdd} />
                  <AboutUs/>
                  </>
                  }
                  />
                <Route path='/selectedWorkout' element={<SelectedCircuitWorkouts selectedWorkouts={selectedWorkouts} onWorkoutRemove={onWorkoutRemove}/>}/>
                <Route path='/addNewWorkout' element ={<AddWorkout />  } />
                <Route path='/deleteWorkout' element ={<DeleteWorkout/>  } />
            </Routes>
            </div>
  
  );
}

export default App;
