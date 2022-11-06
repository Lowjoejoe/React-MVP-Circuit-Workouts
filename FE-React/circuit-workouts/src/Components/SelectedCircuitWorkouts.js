import React, {useState} from "react";
import SelectedWorkoutDetails from "./SelectedWorkoutDetails";

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
            <SelectedWorkoutDetails selectedWorkout={selectedWorkout}/>
          
            <button onClick={()=> onWorkoutRemove(selectedWorkout.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCircuitWorkouts;
