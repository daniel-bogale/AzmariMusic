import createSagaMiddleware, { runSaga } from 'redux-saga';
import uiSlice from './ui-slice';
import userSongSlice from './user-songs-slice';
import suggestedSongSlice from './suggested-song-slice';
import saga from './Redux-saga/sagas';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

const store = configureStore({
  reducer: {
    ui: uiSlice,
    userSongs: userSongSlice,
    suggestedSongs: suggestedSongSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

sagaMiddleWare.run(saga);

export default store;
