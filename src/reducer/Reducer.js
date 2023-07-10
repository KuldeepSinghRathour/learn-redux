import { createSlice } from "@reduxjs/toolkit";


const HorseProfileSlice=createSlice({
    name:"horseprofile",
    initialState:{
        globalBoolenValue:false,
        name:"kuldeep"
    },
    reducers:{
        toggler(state,action){
            state.globalBoolenValue=!state.globalBoolenValue
            console.log(state.globalBoolenValue)
        },
        NameChanger(state,action){
            state.name=action.payload
            console.log(state)
        }
    }
})

export default HorseProfileSlice.reducer;
export const {toggler,NameChanger}=HorseProfileSlice.actions

