import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 0,
  currentCost: 0,
  choices: [],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setCurrentStep: (state, payload) => {
      state.currentStep = payload.payload;
    },
    increaseCurrentCost: (state, payload) => {
      state.currentCost = state.currentCost + payload.payload;
    },
    decreaseCurrentCost: (state, payload) => {
      state.currentCost = state.currentCost - payload.payload;
    },
    addChoice: (state, payload) => {
      state.choices[payload.payload.index] = payload.payload.choice;
    },
    removeChoice: (state, payload) => {
      state.choices[payload.payload.index] = {};
    },
  },
});

export const {
  setCurrentStep,
  increaseCurrentCost,
  decreaseCurrentCost,
  addChoice,
  removeChoice,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
