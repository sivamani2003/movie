import { configureStore, createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name: "user",
    initialState: { isloggedin: false }, 
    reducers: {
      login(state) {
        state.isloggedin = true;
      },
      logout(state) {
        state.isloggedin = false; 
      },
    },
  });
  
  const adminSlice = createSlice({
    name: "auth",
    initialState: { isloggedin: false }, 
    reducers: {
      login(state) {
        state.isloggedin = true; 
      },
      logout(state) {
        state.isloggedin = false; 
      },
    },
  });
  
export const  userActions = userSlice.actions;
export const  adminActions = adminSlice.actions;
export const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        admin:adminSlice.reducer,
    }
})
