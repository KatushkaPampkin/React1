import { configureStore } from "@reduxjs/toolkit";

import calculator from "./reducers/calculator";

export const store = configureStore({
  reducer: {
    calculator: calculator,
  },
});
