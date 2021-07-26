import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const main = createSlice({
  name: "main",
  initialState: {
    login: false,
    userName: "",
    projects: [],
  },
  reducers: {
    setLogin(state, action: PayloadAction<any>) {
      if (action.payload === false) {
        state.userName = "";
        state.projects = [];
      }
      state.login = action.payload;
    },
    setUser(state, action: PayloadAction<any>) {
      state.userName = action.payload;
    },
    setProjects(state, action: PayloadAction<any>) {
      state.projects = action.payload;
    },
  },
});

export const { setLogin, setUser, setProjects } = main.actions;

export default main.reducer;
