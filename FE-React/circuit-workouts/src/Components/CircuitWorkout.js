import react from 'react';
import WorkoutDetails from './WorkoutDetails';


const CircuitWorkout = ({workouts, onWorkoutAdd}) =>{
    return (
    <div className='circuitWorkout'key={workouts.id}>
        {workouts.name.toUpperCase()} 
        <button onClick={()=> onWorkoutAdd(workouts)}>Add workout to circuit</button> 
        <WorkoutDetails workouts={workouts}/>
    </div>
    )
};


// {props.workouts.description} {props.workouts.type} {props.workouts.equipment} {props.workouts.reps}
export default CircuitWorkout;