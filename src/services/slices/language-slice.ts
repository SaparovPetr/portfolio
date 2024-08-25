import { createSlice } from '@reduxjs/toolkit';
import { LanguageMode } from '@utils-types';

interface ImodeState {
  mode: LanguageMode;
}

const initialState: ImodeState = {
  mode: LanguageMode.Russian
};

export const languageSlice = createSlice({
  name: 'language-slice',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.mode = action.payload;
      localStorage.setItem(`currientLanguage`, `${state.mode}`);
    }
  },
  selectors: {
    selectModeState: (sliceState) => sliceState.mode
  }
});

export const { setLanguage } = languageSlice.actions;
export const { selectModeState } = languageSlice.selectors;
