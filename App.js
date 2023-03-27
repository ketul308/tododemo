import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store/store'
import RootNavigation from './src/Navigation/RootNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/Redux/Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  )
}
