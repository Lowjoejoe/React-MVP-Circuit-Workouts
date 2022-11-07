import React, {useState} from 'react';


const AddWorkout = (props) =>{
    const [workoutToBeAdded, setWorkoutToBeAdded] = useState([]);
   


const recordWorkoutToBeAdded = (event) =>{
    //implement record workout to be added
    setWorkoutToBeAdded(event.target.value);
};

const submitWorkout = (event) =>{
    let workout = {
        name: '', 
        description: '',
        type: '',
        equipment: '', 
        reps:'', 
    }
    if(event.key == "Enter"){
        if(event.target.value=''){
            return;
        }else{
            console.log('adding work workout to database:', workoutToBeAdded )
        }
        //need to assign the input values to the workout to be submitted 
     }
};

return (
        <div id="workoutToBeAddedContainer" data-testid="workoutToBeAdded">
            <input type='text' className='nameInput' placeholder='workout name'></input>
            <input type='text' className='descriptionInput'placeholder='workout description'></input>
            <input type='text' className='typeInput'placeholder='workout type'></input>
            <input type='text' className='equipmentInput'placeholder='equipment needed'></input>
            <input type='text' className='repsInput'placeholder='recommended reps'></input>
            <button className='addNewWorkoutButton'>Add New Workout</button>

        </div>
    );
};

export default AddWorkout;