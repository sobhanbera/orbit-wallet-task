import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import CoreAppNavigator from './navigators/CoreAppNavigator';

type Props = {};
const MainApp = (_props: Props) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer>
          <CoreAppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default MainApp;
