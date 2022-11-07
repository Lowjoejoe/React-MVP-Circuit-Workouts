import React, {useState} from 'react';
import { json } from 'react-router-dom';


const AddWorkout = (props) =>{
    // sets up state to be an empty object with the keys that need to be filled
    const [workoutToBeAdded, setWorkoutToBeAdded] = useState({
        name: '', 
        description: '',
        type: '',
        equipment: '', 
        reps:'', 
    });
    
   


const recordWorkoutToBeAdded = (event) =>{
    //implement record workout to be added
    console.log("Record workout to be added:", workoutToBeAdded)
    setWorkoutToBeAdded({...workoutToBeAdded, [event.target.name]:event.target.value});
    
};

const submitWorkout = () =>{
     fetch ('http://localhost:3002/api/workouts', {
        method: "POST",
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(workoutToBeAdded), 
        })
     }

return (
        <div id="workoutToBeAddedContainer" data-testid="workoutToBeAdded">
            <form>
                <input type='text' className='nameInput' placeholder='workout name' name='name' onChange= {recordWorkoutToBeAdded} required value={workoutToBeAdded.name}></input>
                <input type='text' className='descriptionInput'placeholder='workout description' name ='description' onChange= {recordWorkoutToBeAdded} required value={workoutToBeAdded.description}></input>
                <input type='text' className='typeInput'placeholder='workout type' name ='type' onChange= {recordWorkoutToBeAdded} required value={workoutToBeAdded.type}></input>
                <input type='text' className='equipmentInput'placeholder='equipment needed' name='equipment' onChange= {recordWorkoutToBeAdded} required value={workoutToBeAdded.equipment}></input>
                <input type='text' className='repsInput'placeholder='recommended reps' name='reps' onChange= {recordWorkoutToBeAdded} required value={workoutToBeAdded.reps}></input>
                <button className='addNewWorkoutButton' onClick={()=>{submitWorkout()}}>Add New Workout</button>
                
            </form>

        </div>
    );
};

export default AddWorkout;