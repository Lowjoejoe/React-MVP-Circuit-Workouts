import React from 'react'

const SelectedWorkoutDetails=({selectedWorkouts})=>{
    // console.log("SWD", selectedWorkouts)
    return (
        <div className='SelectedWorkoutDetails'key={selectedWorkouts.name}>
           <li>Description: {selectedWorkouts.description} </li>
           <li>Muscle Group Targeted: {selectedWorkouts.type} </li>
           <li>Equipment Needed: {selectedWorkouts.equipment} </li>  
           <li>Recommended Reps: {selectedWorkouts.reps} </li>
        </div>
    )
};

export default SelectedWorkoutDetails;