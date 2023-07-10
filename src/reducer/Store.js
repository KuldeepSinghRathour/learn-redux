import { configureStore } from '@reduxjs/toolkit'
import HorseProfileSlice from "./Reducer"

const store=configureStore({
    reducer:{
        horseprofile:HorseProfileSlice
       
    }
})
export default store;