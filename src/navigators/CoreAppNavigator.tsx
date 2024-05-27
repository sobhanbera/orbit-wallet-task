import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './core/HomeNavigator';
import SearchNavigator from './core/SearchNavigator';

const BottomTab = createBottomTabNavigator();

type Props = {};
const CoreAppNavigator = (_props: Props) => {
  return (
    <BottomTab.Navigator
      id="CoreAppNavigator"
      initialRouteName="HomeNavigator"
      screenOptions={{headerShown: false}}
      backBehavior="history">
      <BottomTab.Screen name="HomeNavigator" component={HomeNavigator} />

      <BottomTab.Screen name="SearchNavigator" component={SearchNavigator} />
    </BottomTab.Navigator>
  );
};

export default CoreAppNavigator;
