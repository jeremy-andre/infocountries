import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/reducers";

// Configura la persistencia
const persistConfig = {
  key: "root",
  storage,
};

// Crea el persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crea el store con el persisted reducer y el middleware por defecto
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Desactiva la verificación de acciones no serializables
  }),
});

// Crea el persistor
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
