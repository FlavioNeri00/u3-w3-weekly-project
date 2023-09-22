import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import rockArtistsReducer from "../reducers/rockArtistsReducer";
import popArtistsReducer from "../reducers/popArtistsReducer";
import hipHopArtistsReducer from "../reducers/hiphopArtistReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  rockArtists: rockArtistsReducer,
  popArtists: popArtistsReducer,
  hipHopArtists: hipHopArtistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
