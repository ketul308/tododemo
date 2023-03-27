const { configureStore } = require("@reduxjs/toolkit");
const { todoSlice } = require("../Slice/todo");
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});
export { store };

export const persistor = persistStore(store);