import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
      name: '名無し',
      hobby: '',
      words: '',
    },
    reducers: {
      setUser(state,{type,payload}){
          state.name = payload.name
          state.hobby = payload.hobby
          state.words = payload.words
          
      }
    },
  });
  
  const { setUser } = user.actions;
    
  export { setUser }
  export default user.reducer