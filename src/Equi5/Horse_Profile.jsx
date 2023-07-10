import React from 'react';
import "./Horse_Profile.css"
import horseData from "./HorseData"

const HorseProfile = () => {
//  console.log("horsedata", horseData)
  return (
    <>
        {horseData.map((item, index)=>{
        return(
            <div className="horse-profile" key={index}>
            <div className="horse-image">
              <img src={item.image} alt="Horse" />
            </div>
            <div className="horse-description">
              <h2>{item.hName}</h2>
              <p>{item.description}</p>
              <b>{item.color}</b>
            </div>
          </div>
        )
       })}
       </>

  );
};

export default HorseProfile;
