import React from 'react'

const WorkoutDetails=({workouts})=>{
    return (
        <div className='workoutDetails'key={workouts.name}>
           {workouts.description} {workouts.type} {workouts.equipment} {workouts.reps}
           
        </div>
    )
};

export default WorkoutDetails;