import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}
const authSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.userData = action.payload.userData;
            //Also be written as state.userData = action.payload.user; 
        },
        logout:(state,action)=>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer;