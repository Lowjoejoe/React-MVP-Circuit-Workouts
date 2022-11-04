import React from 'react';


const SelectedCircuitWorkouts=({selectedWorkouts})=>{
    return (
       <div id='selectedWorkoutsContainer'>
        Workout Selection
        {selectedWorkouts.map(selectedWorkout=>{
            return ( 
            <div className='selectedWorkout'
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