import React from 'react'


//not used having issues with async timing and populating selectedWorkouts properties 
const SelectedWorkoutDetails=({selectedWorkout})=>{
    // console.log("SWD", selectedWorkouts)
    return (
        <div className='SelectedWorkoutDetails'key={selectedWorkout.name}>
           <li>Description: {selectedWorkout.description} </li>
           <li>Muscle Group Targeted: {selectedWorkout.type} </li>
           <li>Equipment Needed: {selectedWorkout.equipment} </li>  
           <li>Recommended Reps: {selectedWorkout.reps} </li>
        </div>
    )
};

export default SelectedWorkoutDetails;