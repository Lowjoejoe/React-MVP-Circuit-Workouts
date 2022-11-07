import react, {useState} from 'react';
import WorkoutDetails from './WorkoutDetails';
import {BsToggleOn} from 'react-icons/bs';
import {GoDiffAdded} from 'react-icons/go';

//workouts passes single workout here from map at workouts.js
//isClicked state by default is set to true and make <WorkoutDetails to render on if isClicked is true
const CircuitWorkout = ({workouts, onWorkoutAdd}) =>{
    const [isClicked, setIsClicked] = useState(true);

    return (
    <div className='circuitWorkout'key={workouts.id} >
    
        {workouts.name.toUpperCase()} 
        <button onClick={()=> setIsClicked(!isClicked)}> <BsToggleOn/>Details</button>
        <button onClick={()=> onWorkoutAdd(workouts)}><GoDiffAdded/></button> 
        {isClicked && <WorkoutDetails workouts={workouts}/>}
    </div>
    )
};


// {props.workouts.description} {props.workouts.type} {props.workouts.equipment} {props.workouts.reps}
export default CircuitWorkout;