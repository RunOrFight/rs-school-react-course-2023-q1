import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

export default createSlice({
  name: 'search',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});
