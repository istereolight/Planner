import { configureStore } from '@reduxjs/toolkit'
import plannerReducer from '../features/planner/plannerSlice';

export default configureStore({
  reducer: {
    planner: plannerReducer,
  },
})