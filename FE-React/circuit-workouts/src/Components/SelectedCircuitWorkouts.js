import React, {useState} from "react";
import SelectedWorkoutDetails from "./SelectedWorkoutDetails";
import {AiFillDelete} from "react-icons/ai";

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
          
            <button className="deleteButton" onClick={()=> onWorkoutRemove(selectedWorkout.id)}><AiFillDelete/></button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCircuitWorkouts;
