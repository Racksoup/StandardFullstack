import { configureStore } from '@reduxjs/toolkit';
// import youtubeReducer from './youtubeSlice';
import adminReducer from './adminSlice';

export const store = configureStore({
  reducer: {
    // youtube: youtubeReducer,
    admin: adminReducer,
  },
});
