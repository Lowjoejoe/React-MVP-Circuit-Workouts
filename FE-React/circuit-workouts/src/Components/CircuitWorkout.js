import react, {useState} from 'react';
import WorkoutDetails from './WorkoutDetails';

//workouts passes single workout here from map at workouts.js
const CircuitWorkout = ({workouts, onWorkoutAdd}) =>{
    const [isClicked, setIsClicked] = useState(true);

    return (
    <div className='circuitWorkout'key={workouts.id} >
    
        {workouts.name.toUpperCase()} 
        <button onClick={()=> setIsClicked(!isClicked)}>Toggle Details</button>
        <button onClick={()=> onWorkoutAdd(workouts)}>Add workout to circuit</button> 
        {isClicked && <WorkoutDetails workouts={workouts}/>}
    </div>
    )
};


// {props.workouts.description} {props.workouts.type} {props.workouts.equipment} {props.workouts.reps}
export default CircuitWorkout;