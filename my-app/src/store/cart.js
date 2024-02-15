import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    handleItem: (state, action) => {
      const name = action.payload;

      const index = state.items.indexOf(name);
      if (index > -1) {
        state.items.splice(index, 1);
      } else {
        state.items = [
          ...state.items,
          name,
        ]
      }
    },
  }
})

export const { handleItem } = cartSlice.actions

export default cartSlice.reducer