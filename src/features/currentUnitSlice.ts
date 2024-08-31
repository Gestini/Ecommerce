// src/features/unitSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Unit } from '@/types/Unit';

interface UnitState {
  currentUnit: Unit | null;
}

const initialState: UnitState = {
  currentUnit: null,
};

const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    setUnit(state, action: PayloadAction<Unit | null>) {
      state.currentUnit = action.payload;
    },
  },
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;
