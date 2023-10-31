import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
  },
  reducers: {
    adduser: (state, action) => {
      state.userList.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, todo } = action.payload;
      const user = state.userList.find((user) => user.id == id);
      console.log(user);
      if (user) {
        user.name = name;
        user.email = email;
        user.todo = todo;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const user = state.userList.find((user) => user.id == id);
      if (user) {
        state.userList = state.userList.filter((user) => user.id !== id);
      }
    },
  },
});

export const { adduser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
