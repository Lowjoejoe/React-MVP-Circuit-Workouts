import React, {useState} from "react";


const SelectedCircuitWorkouts = ({ selectedWorkouts, onWorkoutRemove }) => {
//   console.log("SCW", selectedWorkouts);
    return (
    <div id="selectedWorkoutsContainer">
      Workout Selection
      {selectedWorkouts.map((selectedWorkout) => {
        //   console.log('selectedWorkout:', selectedWorkout.id);
        return (
          <div className="selectedWorkout" key={selectedWorkout.id}>
            {selectedWorkout.name.toUpperCase()}
            <button onClick={()=> onWorkoutRemove(selectedWorkout.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCircuitWorkouts;
