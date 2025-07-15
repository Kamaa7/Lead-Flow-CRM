import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import leadsSlice from './leadsSlice';
import propertiesSlice from './propertiesSlice';
import tasksSlice from './tasksSlice';
import analyticsSlice from './analyticsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    leads: leadsSlice,
    properties: propertiesSlice,
    tasks: tasksSlice,
    analytics: analyticsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;