import { configureStore } from '@reduxjs/toolkit';
import calculator from './calculatorRedux';
import post from './postRedux';
import counter from './counterRedux';

const store = configureStore({
  reducer: {
      calculator,
      post,
      counter
  }
})


export default store;