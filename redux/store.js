import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorRedux';
import postReducer from './postRedux';

const store = configureStore({
  reducer: {
      calculator: calculatorReducer,
      post: postReducer
  }
})


export default store;