import React from 'react'
import Display_profile from './Display_profile'
import Horse_Details from './Horse_Details'
import FeiRegistration from './FeiRegistration'
import OwnerInfo from './OwnerInfo'
import TrainerInfo from './TrainerInfo'
import ToggleButton from './ToggleButton'

const Main_Horse_Profile = () => {
    const dummyImg = [{
        imgSrc:"https://images.pexels.com/photos/793235/pexels-photo-793235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        imgSrc:"https://images.pexels.com/photos/1203309/pexels-photo-1203309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        imgSrc:"https://images.pexels.com/photos/1462369/pexels-photo-1462369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        imgSrc:"https://images.pexels.com/photos/3854867/pexels-photo-3854867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
      ]
      
    const dummyDetails = [{
        horseNO:'1',hName:'Doremon',color:'Black',cob:'India',breed:'asian',breeder:'unknown',dob:'23-07-23',gender:'male',cor:'arab',mn:'1234567890',Height:'5.6ft',weight:'800 pounds',spicialAbility:'unknown'
    },
    {
        horseNO:'2',hName:'ShinChan',color:'Brown',cob:'Arab',breed:'asian',breeder:'unknown',dob:'23-07-23',gender:'male',cor:'arab',mn:'1234567890',Height:'5.6ft',weight:'800 pounds',spicialAbility:'unknown'
    },
    {
        horseNO:'3',hName:'Naruto',color:'white',cob:'America',breed:'asian',breeder:'unknown',dob:'23-07-23',gender:'male',cor:'arab',mn:'1234567890',Height:'5.6ft',weight:'800 pounds',spicialAbility:'unknown'
    }]
  return (
    <>
    <Display_profile imgSrc={dummyImg} />
    <ToggleButton/>
    {/* <Horse_Details horseDetails={dummyDetails}/>
    <FeiRegistration/>
    <OwnerInfo/>
    <TrainerInfo/> */}
    </>
  )
}

export default Main_Horse_Profile