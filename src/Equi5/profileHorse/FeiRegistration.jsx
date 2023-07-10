import React from "react";
// import './FeiRegistration.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NameChanger } from "../../reducer/Reducer";


const FeiRegistration = () => {
    const dispatch=useDispatch();
    const [feiDetails, setFeiDetails] = useState(false)
    const [name, setName] = useState("")
    const handleToggle = () => {
        setFeiDetails(!feiDetails);
        
      };
      const handleNameChange=()=>{
        dispatch(NameChanger(name))


      }

  return (
    <>
      
      <div className="Feidetail-container">
      <button onClick={handleToggle} >FEI Details</button>
      {feiDetails && <div className="FeiDetails">
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleNameChange}>Change Name</button>
        <h1>FEI PASSPORT NUMBER : 4354252425</h1>
        <h1>FEI ISSUE DATE : </h1>
        <h1>FEI REGISTRATION NUMBER : </h1>
        </div>}
        {/* <div className="dummyfei"></div> */}
      </div>
    </>
  );
};

export default FeiRegistration;
