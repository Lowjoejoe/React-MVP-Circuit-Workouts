import React from 'react';
import CircuitWorkout from './CircuitWorkout';


const Workouts = ({workouts, onWorkoutAdd})=>{
  
    return(
        <div id='workoutsContainer'>
            {workouts.map(workout=>{
                return <CircuitWorkout
                key={workout.id}
                workouts={workout}
                onWorkoutAdd={onWorkoutAdd}
               
                />
            })}
        </div>
    )
};



export default Workouts;