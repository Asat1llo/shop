import { createSlice } from "@reduxjs/toolkit";

const initialState={
  lang:'ru'
}


const languageSlice = createSlice({
 name:'language',
 initialState,
 reducers:{
    changelang:(state,action)=>{
        state.lang = action.payload
    }
 }
})


export const {changelang} = languageSlice.actions
export default languageSlice.reducer