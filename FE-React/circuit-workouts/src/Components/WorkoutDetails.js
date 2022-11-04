import React from 'react'

const WorkoutDetails=({workouts})=>{
    return (
        <div className='workoutDetails'key={workouts.name}>
           <li>Description: {workouts.description} </li>
           <li>Muscle Group Targeted: {workouts.type} </li>
           <li>Equipment Needed: {workouts.equipment} </li>  
           <li>Recommended Reps: {workouts.reps} </li>
        </div>
    )
};

export default WorkoutDetails;