import React, { useState } from "react";
// import "./Horse_Details.css";

const Horse_Details = (props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <button onClick={handleToggle}>
        Horse information
      </button>
      {show &&
        props.horseDetails.map((item, index) => {
          return (
            <div key={index} className="main-div">
              <div className="left-menu"></div>

              <div className="detail-container">
                <div className="Horse-Profile">
                  Horse Profile : <span>{item.horseNO}</span>
                </div>
                <div className="detail-container-left">
                  <h2>
                    Horse Name : <span>{item.hName}</span>
                  </h2>
                  <h2>
                    Color : <span>{item.color}</span>
                  </h2>
                  <h2>
                    Country of Birth : <span>{item.cob}</span>
                  </h2>
                  <h2>
                    Breed : <span>{item.breed}</span>
                  </h2>
                  <h2>
                    Breeder : <span>{item.breeder}</span>
                  </h2>
                  <h2>
                    Date of Birth : <span>{item.dob}</span>
                  </h2>
                </div>
                <div className="detail-container-right">
                  <h2>
                    Gender : <span>{item.gender}</span>
                  </h2>
                  <h2>
                    Country of resident : <span>{item.cor}</span>
                  </h2>
                  <h2>
                    Microchip Number : <span>{item.mn}</span>
                  </h2>
                  <h2>
                    Height : <span>{item.Height}</span>
                  </h2>
                  <h2>
                    Weight : <span>{item.weight}</span>
                  </h2>
                  <h2>
                    Spicial Ability : <span>{item.spicialAbility}</span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
        
    </>
  );
};

export default Horse_Details;
