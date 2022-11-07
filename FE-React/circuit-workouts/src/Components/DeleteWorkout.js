import React, {useState} from 'react';
import { json } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';


const DeleteWorkout = (props) =>{
    const [workoutToBeDeleted, setWorkoutToBeDeleted] = useState({
        id: '',
        name: '' 
    });
    
   


const recordWorkoutToBeDeleted = (event) =>{
    //implement record workout to be Deleted
    console.log("Record workout to be Deleted:", workoutToBeDeleted)
    setWorkoutToBeDeleted({...workoutToBeDeleted, [event.target.name]:event.target.value});
    
};
// need to update fetch to delete route 
const deleteWorkout = () =>{
     fetch (`http://localhost:3002/api/workouts/${workoutToBeDeleted.id}`, {
        method: "DELETE",
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        })
        alert(`deleted workout from database: ${workoutToBeDeleted.name}`)
     }

return (
        <div id="workoutToBeDeletedContainer" data-testid="workoutToBeDeleted">
            <form>
                <input type='text' className='idInput' placeholder='input workout id'name='id' onChange= {recordWorkoutToBeDeleted} required value={workoutToBeDeleted.id}></input>
                <input type='text' className='nameInput' placeholder='workout name' name='name' onChange= {recordWorkoutToBeDeleted} required value={workoutToBeDeleted.name}></input>
                
                <button className='deleteButton' onClick={()=>{deleteWorkout()}}> <AiFillDelete/></button>
            </form>

        </div>
    );
};

export default DeleteWorkout;