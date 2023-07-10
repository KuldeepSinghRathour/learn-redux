import React from "react";
import './FeiRegistration.css'
import { useState } from "react";
import { useSelector } from "react-redux";


const OwnerInfo = () => {
    const selecor=useSelector((state)=>state.horseprofile)
    console.log(selecor)
    const [ownerDetails, setOwnerDetails] = useState(false)
    const handleToggle = () => {
        setOwnerDetails(!ownerDetails);
      };

  return (
    <>
      
      <div className="Feidetail-container">
      <button onClick={handleToggle} >Owner Details</button>
      {ownerDetails && <div className="FeiDetails">
        <h1>Name : Sakaal</h1>
        <h2>Global Values:{`Name ${selecor.name} Boolan Value ${selecor.globalBoolenValue}`}</h2>
        </div>}
        {/* <div className="dummyfei"></div> */}
      </div>
    </>
  );
};

export default OwnerInfo;
