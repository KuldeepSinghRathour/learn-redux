import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const HorseRegistration = [
    {id: 1, title: "Horse Information",horseNO: "1", hName: "Doremon",
      color: "Black", cob: "India", breed: "asian", breeder: "unknown",
      dob: "23-07-23", gender: "male", cor: "arab", mn: "1234567890",
      Height: "5.6ft", weight: "800 pounds", spicialAbility: "unknown",
    }
  ];

  const FeiRegistration = [
    {
      FeiRegistrationNo: "345627677",
      FeiPassportNo: "64536736",
      FeiissueDate: "12/02/23",
    },
  ];

  const Owneinfo = [{ name: "Eren Eager" }];

  const Trainereinfo = [{ name: "Eren Eager the Trainer" }];

  const [expandedButton, setExpandedButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setExpandedButton((prevButton) =>
      prevButton === buttonNumber ? null : buttonNumber
    );
  };

  const isButtonExpanded = (buttonNumber) => {
    return expandedButton === buttonNumber;
  };

  const getContent = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        return (
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="main-container"
          >
            <div>
              {HorseRegistration.map((element, index) => {
                return (
                  <div key={index}>
                    <p className="contents">
                      <strong>Horse Name :</strong> {element.hName}
                    </p>
                    <p className="contents">
                      <strong>Country of Birth :</strong> {element.cob}
                    </p>
                    <p className="contents">
                      <strong>Breeder :</strong> {element.breeder}
                    </p>
                    <p className="contents">
                      <strong>Gender : </strong>
                      {element.gender}
                    </p>
                    <p className="contents">
                      <strong>Microchip Number :</strong> {element.mn}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              {HorseRegistration.map((element, index) => {
                return (
                  <div key={index}>
                    <p className="contents">
                      <strong>Color : </strong>
                      {element.color}
                    </p>

                    <p className="contents">
                      <strong>BREED : </strong>
                      {element.breed}
                    </p>

                    <p className="contents">
                      <strong>DATE OF BIRTH : </strong>
                      {element.dob}
                    </p>

                    <p className="contents">
                      <strong>COUNTRY OF RESIDENCE : </strong>
                      {element.cor}
                    </p>

                    <p className="contents">
                      <strong>HORSE HEIGHT : </strong>
                      {element.Height}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 2:
        return (
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="main-container"
          >
            <div>
              {FeiRegistration.map((Feidata, index) => {
                return (
                  <div key={index}>
                    <p className="contents">
                      <strong>FEI REGISTRATION NUMBER : </strong>
                      {Feidata.FeiRegistrationNo}
                    </p>
                    <p className="contents">
                      <strong>FEI ISSUE DATE : </strong>
                      {Feidata.FeiissueDate}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              {FeiRegistration.map((Feidata, index) => {
                return (
                  <div key={index}>
                    <p className="contents">
                      <strong>FEI PASSPORT NUMBER : </strong>
                      {Feidata.FeiPassportNo}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 3:
        return (
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="main-container"
          >
            {Owneinfo.map((ownerData, index) => {
              return (
                <div key={index}>
                  <p className="contents">
                    <strong>Owner Name : </strong>
                    {ownerData.name}
                  </p>
                </div>
              );
            })}
          </div>
        );
      case 4:
        return (
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="main-container"
          >
            {Trainereinfo.map((trainerData, index) => {
              return (
                <div key={index}>
                  <p className="contents">
                    <strong>Trainer Name : </strong>
                    {trainerData.name}
                  </p>
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="buttons">
        <button onClick={() => handleButtonClick(1)}>
          <b>Horse Information</b>
        </button>
        <div
          className={
            isButtonExpanded(1) ? "expanded-content" : "collapsed-content"
          }
        >
          {isButtonExpanded(1) && getContent(1)}
        </div>
        <button onClick={() => handleButtonClick(2)}>
          <b>FEI Registration</b>
        </button>
        <div
          className={
            isButtonExpanded(2) ? "expanded-content" : "collapsed-content"
          }
        >
          {isButtonExpanded(2) && getContent(2)}
        </div>
        <button onClick={() => handleButtonClick(3)}>
          <b>Owner Information</b>
        </button>
        <div
          className={
            isButtonExpanded(3) ? "expanded-content" : "collapsed-content"
          }
        >
          {isButtonExpanded(3) && getContent(3)}
        </div>
        <button onClick={() => handleButtonClick(4)}>
          <b>Trainer Information</b>
        </button>
        <div
          className={
            isButtonExpanded(4) ? "expanded-content" : "collapsed-content"
          }
        >
          {isButtonExpanded(4) && getContent(4)}
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
