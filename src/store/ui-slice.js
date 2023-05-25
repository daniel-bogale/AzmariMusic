import { createSlice } from '@reduxjs/toolkit';

const initialState = { editCardVisible: false, songIndexToEdit: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleEditCard(state, action = null) {
      state.editCardVisible = !state.editCardVisible;
      state.songIndexToEdit = action.payload;
    }
  }
});
export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
