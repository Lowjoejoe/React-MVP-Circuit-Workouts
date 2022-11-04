import React from 'react';


const SelectedCircuitWorkouts=({selectedWorkouts})=>{
    return (
       <div id='selectedWorkoutsContainer'>
        {selectedWorkouts.map(selectedWorkout=>{
            return ( 
            <div className='selected workout'
            key={selectedWorkout.id}
            > 
            {selectedWorkout.name}
            <button>Remove</button>
              </div>
            )
        })}

       </div>
    )
}













export default SelectedCircuitWorkouts; 