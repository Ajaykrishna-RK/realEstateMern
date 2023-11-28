import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
 loading:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    signInSuccess: (state, action) => {
      return {
        ...state,
        currentUser: action?.payload,
        loading: false,
        error: null,
      };
    },
    signInFailure: (state, action) => {
      return {
        ...state,
        error: action?.payload,
        loading: false,
      };
    },
  },
});
export const {signInFailure,signInStart,signInSuccess} = userSlice.actions

export default userSlice.reducer
