import React from 'react'


const SelectedWorkoutDetails=({selectedWorkout})=>{
    // console.log("SWD", selectedWorkouts)
    return (
        <div className='selectedWorkoutDetails'key={selectedWorkout.name}>
           <li>Description: {selectedWorkout.description} </li>
           <li>Muscle Group Targeted: {selectedWorkout.type} </li>
           <li>Equipment Needed: {selectedWorkout.equipment} </li>  
           <li>Recommended Reps: {selectedWorkout.reps} </li>
        </div>
    )
};

export default SelectedWorkoutDetails;