import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const cyclesCompleted = 8;

const CleaningCycle = () => {
  const percentage = (cyclesCompleted / 24) * 100;

  return (
    <>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${cyclesCompleted}/24`}
          styles={buildStyles({
            textSize: "16px",
            textColor:"rgba(1,1,1,1)",
            pathColor: `rgba(1,1,1,1`,
            textColor: "#3e98c7",
            trailColor: "#d6d6d6",
          })}
        />
      </div>
      <div>
        Cleaning Cycle Description 
      </div>
    </>
  );
};

export default CleaningCycle;




