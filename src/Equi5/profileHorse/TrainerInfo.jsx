import React from "react";
import './FeiRegistration.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggler } from "../../reducer/Reducer";


const TrainerInfo = () => {
    const dispatch=useDispatch();
    const [trainerDetails, setTrainerDetails] = useState(false)
    const handleToggle = () => {
        setTrainerDetails(!trainerDetails);
      };

  return (
    <>
      
    <button onClick={()=>dispatch(toggler())}>Toggle Globle Boolen Value</button>
      <div className="Feidetail-container">
      <button onClick={handleToggle} >Trainer Details</button>
      {trainerDetails && <div className="FeiDetails">
        <h1>Name : Jaykaal</h1>
        </div>}
        {/* <div className="dummyfei"></div> */}
      </div>
    </>
  );
};

export default TrainerInfo;
