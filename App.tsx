import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainApp from './src/MainApp';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <MainApp />
    </SafeAreaProvider>
  );
}

export default App;
