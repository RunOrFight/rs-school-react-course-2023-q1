import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAudio } from 'types';

const initialState = {
  submitions: [] as IAudio[],
};

export default createSlice({
  name: 'form',
  initialState,
  reducers: {
    addSubmition(state, action: PayloadAction<Omit<IAudio, 'id'>>) {
      state.submitions.push({ ...action.payload, id: state.submitions.length + 1 });
    },
  },
});
